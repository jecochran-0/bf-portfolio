/* ============================================
   MBTA mTicket - Screen Renderers
   ============================================ */

// ============================================
// Onboarding Screen
// ============================================

function renderOnboarding(container) {
  hideBottomNav();

  container.innerHTML = `
    <div class="onboarding animate-fade-in">
      <div class="onboarding__logo">T</div>

      <h1 class="onboarding__title">MBTA mTicket</h1>

      <p class="onboarding__subtitle">
        Buy and manage your Commuter Rail and Ferry tickets right from your phone.
      </p>

      <div class="onboarding__notice">
        <strong>Commuter Rail & Ferry Only</strong>
        For subway (T) and bus, use MBTA Go app or tap-to-pay at stations.
      </div>

      <div class="onboarding__buttons">
        <button class="btn btn--primary btn--large btn--full" onclick="handleOnboardingComplete('commuter')">
          I'm a Regular Rider
        </button>

        <button class="btn btn--outline btn--large btn--full" style="border-color: white; color: white;" onclick="handleOnboardingComplete('visitor')">
          I'm Visiting Boston
        </button>

        <button class="onboarding__skip" onclick="handleOnboardingComplete('skip')">
          Skip for now
        </button>
      </div>
    </div>
  `;
}

// ============================================
// Home Screen
// ============================================

function renderHome(container) {
  showBottomNav();
  updateBottomNav('home');

  const content = document.createElement('div');
  content.className = 'screen';

  // Header
  content.appendChild(createHeader({
    showLogo: true,
    title: 'mTicket',
    rightAction: `
      <button class="header__action" onclick="showSettingsMenu()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    `
  }));

  // Main content
  const main = document.createElement('div');
  main.className = 'screen__content';

  // Alert Banner (if any active alerts)
  const activeAlerts = getActiveAlerts();
  if (activeAlerts.length > 0) {
    main.appendChild(createAlertBanner(activeAlerts[0]));
  }

  // Quick Buy Section
  const lastTrip = getLastTrip();
  const returnTrip = getReturnTrip();

  if (lastTrip || returnTrip) {
    const quickBuySection = document.createElement('div');
    quickBuySection.innerHTML = `
      <div class="section-header">
        <h2 class="section-header__title">Quick Buy</h2>
      </div>
    `;

    const quickBuyCards = document.createElement('div');
    quickBuyCards.className = 'quick-buy';

    if (lastTrip) {
      const lastCard = createQuickBuyCard('last', lastTrip);
      if (lastCard) quickBuyCards.appendChild(lastCard);
    }

    if (returnTrip) {
      const returnCard = createQuickBuyCard('return', returnTrip);
      if (returnCard) quickBuyCards.appendChild(returnCard);
    }

    quickBuySection.appendChild(quickBuyCards);
    main.appendChild(quickBuySection);
  }

  // Buy Tickets Button
  const buyBtn = document.createElement('button');
  buyBtn.className = 'btn btn--primary btn--large btn--full';
  buyBtn.style.marginBottom = 'var(--space-lg)';
  buyBtn.textContent = 'Buy Tickets';
  buyBtn.addEventListener('click', () => navigate('buyTickets'));
  main.appendChild(buyBtn);

  // Favorites Section
  if (AppState.favorites.length > 0) {
    const favSection = document.createElement('div');
    favSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-header__title">Favorites</h2>
        <button class="section-header__action" onclick="navigate('manageFavorites')">Edit</button>
      </div>
    `;

    AppState.favorites.forEach(fav => {
      favSection.appendChild(createFavoriteCard(fav));
    });

    main.appendChild(favSection);
  }

  // My Tickets Section (Flattened Wallet - Key UX Fix!)
  const ticketsSection = document.createElement('div');
  ticketsSection.style.marginTop = 'var(--space-lg)';

  const activeTicket = getActiveTicket();
  const inactiveTickets = getInactiveTickets();
  const totalTickets = (activeTicket ? 1 : 0) + inactiveTickets.length;

  ticketsSection.innerHTML = `
    <div class="section-header">
      <h2 class="section-header__title">My Tickets ${totalTickets > 0 ? `(${totalTickets})` : ''}</h2>
      <button class="section-header__action" onclick="navigate('ticketHistory')">History</button>
    </div>
  `;

  if (activeTicket) {
    ticketsSection.appendChild(createTicketCard(activeTicket));
    // Start timer for active ticket
    startTicketTimer(activeTicket.id);
  }

  inactiveTickets.forEach(ticket => {
    ticketsSection.appendChild(createTicketCard(ticket));
  });

  if (totalTickets === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'card';
    emptyState.style.textAlign = 'center';
    emptyState.style.padding = 'var(--space-xl)';
    emptyState.innerHTML = `
      <div style="font-size: 40px; margin-bottom: var(--space-md);">🎫</div>
      <p style="color: var(--color-gray-600); margin-bottom: var(--space-md);">No tickets yet</p>
      <button class="btn btn--primary" onclick="navigate('buyTickets')">Buy Your First Ticket</button>
    `;
    ticketsSection.appendChild(emptyState);
  }

  main.appendChild(ticketsSection);
  content.appendChild(main);
  container.appendChild(content);

  // Update alert badge
  updateAlertBadge();
}

// ============================================
// Buy Tickets Screen - Route Selection
// ============================================

function renderBuyTickets(container) {
  showBottomNav();
  updateBottomNav('buyTickets');

  const content = document.createElement('div');
  content.className = 'screen';

  content.appendChild(createHeader({
    showBack: true,
    title: 'Buy Tickets',
    onBack: 'navigate("home")'
  }));

  const main = document.createElement('div');
  main.className = 'screen__content';

  // Smart Shortcuts
  const lastTrip = getLastTrip();
  if (lastTrip && !AppState.purchaseFlow.origin) {
    const shortcutsSection = document.createElement('div');
    shortcutsSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-header__title">Quick Select</h2>
      </div>
    `;

    const shortcuts = document.createElement('div');
    shortcuts.className = 'quick-buy';
    shortcuts.style.marginBottom = 'var(--space-lg)';

    // Last trip shortcut
    const lastCard = document.createElement('div');
    lastCard.className = 'quick-buy__card';
    lastCard.innerHTML = `
      <div class="quick-buy__label">Your Last Trip</div>
      <div class="quick-buy__route">${lastTrip.origin.name} → ${lastTrip.destination.name}</div>
    `;
    lastCard.addEventListener('click', () => {
      AppState.purchaseFlow.origin = getStationByName(lastTrip.origin.name);
      AppState.purchaseFlow.destination = getStationByName(lastTrip.destination.name);
      renderBuyTickets(container);
    });
    shortcuts.appendChild(lastCard);

    // Return trip shortcut
    const returnCard = document.createElement('div');
    returnCard.className = 'quick-buy__card';
    returnCard.innerHTML = `
      <div class="quick-buy__label">Return Trip</div>
      <div class="quick-buy__route">${lastTrip.destination.name} → ${lastTrip.origin.name}</div>
    `;
    returnCard.addEventListener('click', () => {
      AppState.purchaseFlow.origin = getStationByName(lastTrip.destination.name);
      AppState.purchaseFlow.destination = getStationByName(lastTrip.origin.name);
      renderBuyTickets(container);
    });
    shortcuts.appendChild(returnCard);

    shortcutsSection.appendChild(shortcuts);
    main.appendChild(shortcutsSection);
  }

  // Route Selector
  const routeSection = document.createElement('div');
  routeSection.innerHTML = `
    <div class="section-header">
      <h2 class="section-header__title">Select Route</h2>
    </div>
  `;
  routeSection.appendChild(createRouteSelector());
  main.appendChild(routeSection);

  // Alert for selected route
  const { origin, destination } = AppState.purchaseFlow;
  if (origin && destination) {
    const routeAlert = getAlertForRoute(origin.name, destination.name);
    if (routeAlert) {
      const alertDiv = document.createElement('div');
      alertDiv.className = 'alert-banner';
      alertDiv.style.marginTop = 'var(--space-md)';
      alertDiv.innerHTML = `
        <span class="alert-banner__icon">⚠️</span>
        <div class="alert-banner__content">
          <span class="alert-banner__title">${routeAlert.line}:</span>
          ${routeAlert.title}
        </div>
      `;
      main.appendChild(alertDiv);
    }
  }

  // Continue Button
  const continueBtn = document.createElement('button');
  continueBtn.className = 'btn btn--primary btn--large btn--full';
  continueBtn.style.marginTop = 'var(--space-lg)';
  continueBtn.textContent = 'Continue';
  continueBtn.disabled = !origin || !destination;
  continueBtn.addEventListener('click', () => {
    if (origin && destination) {
      navigate('ticketType');
    }
  });
  main.appendChild(continueBtn);

  content.appendChild(main);
  container.appendChild(content);
}

// ============================================
// Station Selection Screen
// ============================================

function renderStationSelect(container) {
  hideBottomNav();

  const context = AppState.stationSelectContext; // 'origin' or 'destination'

  const content = document.createElement('div');
  content.className = 'station-select';

  content.appendChild(createHeader({
    showBack: true,
    title: context === 'origin' ? 'Select Origin' : 'Select Destination',
    onBack: 'closeStationSelect()'
  }));

  // Search
  const searchDiv = document.createElement('div');
  searchDiv.className = 'station-select__search';
  searchDiv.innerHTML = `
    <input
      type="text"
      class="station-select__input"
      placeholder="Search stations..."
      id="station-search"
      oninput="filterStations(this.value)"
    >
  `;
  content.appendChild(searchDiv);

  // Station List
  const list = document.createElement('ul');
  list.className = 'station-list';
  list.id = 'station-list';

  // Group stations by zone
  const stationsByZone = {};
  STATIONS.forEach(station => {
    if (!stationsByZone[station.zone]) {
      stationsByZone[station.zone] = [];
    }
    stationsByZone[station.zone].push(station);
  });

  // Recent stations first
  const recentHeader = document.createElement('li');
  recentHeader.className = 'station-list__section';
  recentHeader.textContent = 'Recent';
  list.appendChild(recentHeader);

  // Get unique recent stations from history
  const recentStations = [];
  AppState.tripHistory.slice(0, 5).forEach(trip => {
    if (!recentStations.find(s => s.name === trip.origin.name)) {
      const station = getStationByName(trip.origin.name);
      if (station) recentStations.push(station);
    }
    if (!recentStations.find(s => s.name === trip.destination.name)) {
      const station = getStationByName(trip.destination.name);
      if (station) recentStations.push(station);
    }
  });

  recentStations.slice(0, 4).forEach(station => {
    list.appendChild(createStationListItem(station, handleStationSelect));
  });

  // All stations by zone
  Object.keys(stationsByZone).sort((a, b) => {
    if (a === '1A') return -1;
    if (b === '1A') return 1;
    return parseInt(a) - parseInt(b);
  }).forEach(zone => {
    const header = document.createElement('li');
    header.className = 'station-list__section';
    header.textContent = `Zone ${zone}`;
    list.appendChild(header);

    stationsByZone[zone].forEach(station => {
      list.appendChild(createStationListItem(station, handleStationSelect));
    });
  });

  content.appendChild(list);
  container.appendChild(content);

  // Focus search input
  setTimeout(() => {
    document.getElementById('station-search')?.focus();
  }, 100);
}

// ============================================
// Ticket Type Selection Screen
// ============================================

function renderTicketType(container) {
  showBottomNav();
  updateBottomNav('buyTickets');

  const { origin, destination, ticketType: selectedType } = AppState.purchaseFlow;
  const baseFare = getFare(origin.zone, destination.zone);

  const content = document.createElement('div');
  content.className = 'screen';

  content.appendChild(createHeader({
    showBack: true,
    title: 'Select Ticket',
    onBack: 'navigate("buyTickets")'
  }));

  const main = document.createElement('div');
  main.className = 'screen__content screen__content--white';
  main.style.padding = '0';

  // Route summary
  const routeSummary = document.createElement('div');
  routeSummary.style.cssText = 'background: var(--color-primary); color: white; padding: var(--space-md); text-align: center;';
  routeSummary.innerHTML = `
    <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">
      ${origin.name} → ${destination.name}
    </div>
    <div style="font-size: var(--font-size-sm); opacity: 0.8;">
      Zone ${origin.zone} to Zone ${destination.zone}
    </div>
  `;
  main.appendChild(routeSummary);

  // Ticket types list
  const list = document.createElement('ul');
  list.className = 'ticket-types';

  TICKET_TYPES.forEach(type => {
    const isSelected = selectedType?.id === type.id;
    list.appendChild(createTicketTypeItem(type, baseFare, isSelected, handleTicketTypeSelect));
  });

  main.appendChild(list);

  // Continue button
  const btnWrapper = document.createElement('div');
  btnWrapper.style.padding = 'var(--space-md)';

  const continueBtn = document.createElement('button');
  continueBtn.className = 'btn btn--primary btn--large btn--full';
  continueBtn.textContent = selectedType ? `Continue - ${formatPrice(AppState.purchaseFlow.totalPrice)}` : 'Select a ticket type';
  continueBtn.disabled = !selectedType;
  continueBtn.addEventListener('click', () => {
    if (selectedType) {
      navigate('payment');
    }
  });
  btnWrapper.appendChild(continueBtn);
  main.appendChild(btnWrapper);

  content.appendChild(main);
  container.appendChild(content);
}

// ============================================
// Payment Screen
// ============================================

function renderPayment(container) {
  showBottomNav();
  updateBottomNav('buyTickets');

  const { origin, destination, ticketType, totalPrice } = AppState.purchaseFlow;

  const content = document.createElement('div');
  content.className = 'screen';

  content.appendChild(createHeader({
    showBack: true,
    title: 'Payment',
    onBack: 'navigate("ticketType")'
  }));

  const main = document.createElement('div');
  main.className = 'screen__content screen__content--white';

  // Order Summary
  const summary = document.createElement('div');
  summary.className = 'payment-summary';
  summary.innerHTML = `
    <div class="payment-summary__row">
      <span>Route</span>
      <span>${origin.name} → ${destination.name}</span>
    </div>
    <div class="payment-summary__row">
      <span>Ticket Type</span>
      <span>${ticketType.name}</span>
    </div>
    <div class="payment-summary__row payment-summary__row--total">
      <span>Total</span>
      <span>${formatPrice(totalPrice)}</span>
    </div>
  `;
  main.appendChild(summary);

  // Payment Methods
  const paymentSection = document.createElement('div');
  paymentSection.className = 'payment-methods';

  // Apple Pay (Key UX Fix - no CVV needed!)
  paymentSection.appendChild(createApplePayButton(handleApplePayPurchase));

  // Google Pay (Key UX Fix - Android parity!)
  const gpayBtn = createGooglePayButton(handleGooglePayPurchase);
  gpayBtn.style.marginTop = 'var(--space-md)';
  paymentSection.appendChild(gpayBtn);

  // Divider
  const divider = document.createElement('div');
  divider.className = 'payment-divider';
  divider.textContent = 'Or pay with saved card';
  paymentSection.appendChild(divider);

  // Saved Card (no CVV re-entry!)
  paymentSection.appendChild(createSavedCardOption(handleCardPurchase));

  main.appendChild(paymentSection);

  // Add new card link
  const addCardLink = document.createElement('button');
  addCardLink.className = 'btn btn--ghost btn--full';
  addCardLink.textContent = '+ Add New Card';
  addCardLink.addEventListener('click', () => {
    showModal('Add Card', '<p style="color: var(--color-gray-600); text-align: center; padding: var(--space-lg);">Card entry form would appear here.<br><br>For this prototype, use Apple Pay, Google Pay, or the saved card above.</p>');
  });
  main.appendChild(addCardLink);

  content.appendChild(main);
  container.appendChild(content);
}

// ============================================
// Confirmation Screen
// ============================================

function renderConfirmation(container, params) {
  hideBottomNav();

  const { ticket } = params;

  const content = document.createElement('div');
  content.className = 'confirmation animate-fade-in';

  content.innerHTML = `
    <div class="confirmation__icon">✓</div>

    <h1 class="confirmation__title">Ticket Purchased!</h1>
    <p class="confirmation__subtitle">Your ticket has been added to your wallet</p>

    <div class="confirmation__card">
      <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-sm);">
        ${ticket.typeName}
      </div>
      <div style="margin-bottom: var(--space-sm);">
        ${ticket.origin.name} → ${ticket.destination.name}
      </div>
      <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-primary);">
        ${formatPrice(ticket.price)}
      </div>
    </div>

    <div class="confirmation__buttons">
      <button class="btn btn--activate btn--large" onclick="handleActivateFromConfirmation('${ticket.id}')">
        Activate Now
      </button>
      <button class="btn btn--secondary btn--large btn--full" onclick="navigate('home')">
        Activate Later
      </button>
    </div>
  `;

  container.appendChild(content);
}

// ============================================
// Active Ticket View Screen
// ============================================

function renderTicketView(container, params) {
  hideBottomNav();

  const ticket = AppState.tickets.find(t => t.id === params.ticketId);
  if (!ticket) {
    navigate('home');
    return;
  }

  const timeRemaining = getTicketTimeRemaining(ticket);

  const content = document.createElement('div');
  content.className = 'active-ticket animate-fade-in';

  // Status bar
  const statusBar = document.createElement('div');
  statusBar.className = 'active-ticket__status';
  statusBar.textContent = 'ACTIVE TICKET';
  content.appendChild(statusBar);

  // QR Code area
  const qrSection = document.createElement('div');
  qrSection.className = 'active-ticket__qr';
  qrSection.innerHTML = `
    <div class="active-ticket__qr-code">
      <svg width="180" height="180" viewBox="0 0 100 100">
        <!-- Simplified QR code pattern -->
        <rect x="0" y="0" width="100" height="100" fill="white"/>
        <rect x="5" y="5" width="25" height="25" fill="black"/>
        <rect x="10" y="10" width="15" height="15" fill="white"/>
        <rect x="12" y="12" width="11" height="11" fill="black"/>
        <rect x="70" y="5" width="25" height="25" fill="black"/>
        <rect x="75" y="10" width="15" height="15" fill="white"/>
        <rect x="77" y="12" width="11" height="11" fill="black"/>
        <rect x="5" y="70" width="25" height="25" fill="black"/>
        <rect x="10" y="75" width="15" height="15" fill="white"/>
        <rect x="12" y="77" width="11" height="11" fill="black"/>
        <!-- Random pattern in center -->
        <rect x="35" y="5" width="5" height="5" fill="black"/>
        <rect x="45" y="5" width="5" height="5" fill="black"/>
        <rect x="55" y="5" width="5" height="5" fill="black"/>
        <rect x="35" y="15" width="5" height="5" fill="black"/>
        <rect x="50" y="15" width="5" height="5" fill="black"/>
        <rect x="35" y="35" width="30" height="30" fill="black"/>
        <rect x="40" y="40" width="20" height="20" fill="white"/>
        <rect x="45" y="45" width="10" height="10" fill="black"/>
        <rect x="5" y="35" width="5" height="5" fill="black"/>
        <rect x="15" y="40" width="5" height="5" fill="black"/>
        <rect x="5" y="50" width="5" height="5" fill="black"/>
        <rect x="20" y="55" width="5" height="5" fill="black"/>
        <rect x="70" y="35" width="5" height="5" fill="black"/>
        <rect x="80" y="45" width="5" height="5" fill="black"/>
        <rect x="90" y="40" width="5" height="5" fill="black"/>
        <rect x="75" y="55" width="5" height="5" fill="black"/>
        <rect x="35" y="70" width="5" height="5" fill="black"/>
        <rect x="45" y="75" width="5" height="5" fill="black"/>
        <rect x="55" y="80" width="5" height="5" fill="black"/>
        <rect x="70" y="70" width="25" height="25" fill="black"/>
        <rect x="75" y="75" width="5" height="5" fill="white"/>
        <rect x="85" y="75" width="5" height="5" fill="white"/>
        <rect x="80" y="80" width="5" height="5" fill="white"/>
        <rect x="75" y="85" width="5" height="5" fill="white"/>
        <rect x="85" y="85" width="5" height="5" fill="white"/>
      </svg>
    </div>
  `;
  content.appendChild(qrSection);

  // Ticket info
  const info = document.createElement('div');
  info.className = 'active-ticket__info';
  info.innerHTML = `
    <div class="active-ticket__route">
      ${ticket.origin.name} → ${ticket.destination.name}
    </div>
    <div class="active-ticket__type">
      ${ticket.typeName} • ${formatPrice(ticket.price)}
    </div>
    <div class="active-ticket__timer ${timeRemaining?.warning ? 'active-ticket__timer--warning' : ''}" id="active-timer">
      ${timeRemaining?.text || '--:--:--'}
    </div>
  `;
  content.appendChild(info);

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'btn btn--secondary btn--large btn--full';
  closeBtn.style.margin = 'var(--space-md)';
  closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', () => navigate('home'));
  content.appendChild(closeBtn);

  container.appendChild(content);

  // Start timer
  startActiveTicketTimer(ticket.id);
}

// ============================================
// Alerts Screen
// ============================================

function renderAlerts(container) {
  showBottomNav();
  updateBottomNav('alerts');

  const content = document.createElement('div');
  content.className = 'screen';

  content.appendChild(createHeader({
    title: 'Service Alerts'
  }));

  const main = document.createElement('div');
  main.className = 'screen__content screen__content--white';

  const alerts = AppState.alerts;

  if (alerts.length === 0) {
    main.innerHTML = `
      <div style="text-align: center; padding: var(--space-2xl);">
        <div style="font-size: 48px; margin-bottom: var(--space-md);">✓</div>
        <h2 style="margin-bottom: var(--space-sm);">All Clear!</h2>
        <p style="color: var(--color-gray-600);">All Commuter Rail lines are operating normally.</p>
      </div>
    `;
  } else {
    const alertsList = document.createElement('div');
    alertsList.className = 'alerts-list';
    alertsList.style.padding = '0';

    alerts.forEach(alert => {
      alertsList.appendChild(createAlertCard(alert));
    });

    main.appendChild(alertsList);
  }

  content.appendChild(main);
  container.appendChild(content);
}

// ============================================
// Zone Map Screen
// ============================================

function renderZoneMap(container) {
  showBottomNav();

  const content = document.createElement('div');
  content.className = 'screen';

  content.appendChild(createHeader({
    showBack: true,
    title: 'Zone Map',
    onBack: 'goBack()'
  }));

  const main = document.createElement('div');
  main.className = 'screen__content';

  // Zone visualization
  const mapVisual = document.createElement('div');
  mapVisual.className = 'zone-map__visual';
  mapVisual.innerHTML = `
    <div class="zone-map__diagram">
      <div class="zone-ring zone-ring--8"></div>
      <div class="zone-ring zone-ring--5"></div>
      <div class="zone-ring zone-ring--2"></div>
      <div class="zone-ring zone-ring--1a"></div>
      <span class="zone-map__label" style="top: 45%; left: 45%; color: white;">1A</span>
      <span class="zone-map__label" style="top: 30%; left: 30%;">2-3</span>
      <span class="zone-map__label" style="top: 18%; left: 18%;">5-6</span>
      <span class="zone-map__label" style="top: 5%; left: 5%;">8-10</span>
    </div>
    <p style="font-size: var(--font-size-sm); color: var(--color-gray-600);">
      Zones radiate outward from downtown Boston. Zone 1A is the city center.
    </p>
  `;
  main.appendChild(mapVisual);

  // Zone legend
  const legend = document.createElement('div');
  legend.className = 'zone-map__legend';
  legend.innerHTML = `
    <div class="zone-map__legend-title">Zone Fares (One Way from Zone 1A)</div>
    <div class="zone-map__legend-item"><span>Zone 1A</span><span>$2.40</span></div>
    <div class="zone-map__legend-item"><span>Zone 2</span><span>$3.50</span></div>
    <div class="zone-map__legend-item"><span>Zone 3</span><span>$4.25</span></div>
    <div class="zone-map__legend-item"><span>Zone 4</span><span>$5.00</span></div>
    <div class="zone-map__legend-item"><span>Zone 5</span><span>$5.75</span></div>
    <div class="zone-map__legend-item"><span>Zone 6</span><span>$6.50</span></div>
    <div class="zone-map__legend-item"><span>Zone 7</span><span>$7.25</span></div>
    <div class="zone-map__legend-item"><span>Zone 8</span><span>$8.00</span></div>
    <div class="zone-map__legend-item"><span>Zone 9</span><span>$9.50</span></div>
    <div class="zone-map__legend-item"><span>Zone 10</span><span>$11.00</span></div>
  `;
  main.appendChild(legend);

  content.appendChild(main);
  container.appendChild(content);
}

// ============================================
// Account Screen
// ============================================

function renderAccount(container) {
  showBottomNav();
  updateBottomNav('account');

  const content = document.createElement('div');
  content.className = 'screen';

  // Account header
  const header = document.createElement('div');
  header.className = 'account-header';
  header.innerHTML = `
    <div class="account-avatar">SC</div>
    <div class="account-name">${AppState.user.name}</div>
    <div class="account-email">${AppState.user.email}</div>
  `;
  content.appendChild(header);

  // Menu
  const menu = document.createElement('ul');
  menu.className = 'account-menu';

  const menuItems = [
    { icon: '💳', label: 'Payment Methods', action: () => showModal('Payment Methods', '<p style="padding: var(--space-lg); text-align: center; color: var(--color-gray-600);">Payment settings would appear here.</p>') },
    { icon: '🔔', label: 'Notifications', action: () => showModal('Notifications', '<p style="padding: var(--space-lg); text-align: center; color: var(--color-gray-600);">Notification preferences would appear here.</p>') },
    { icon: '📋', label: 'Trip History', action: () => showModal('Trip History', '<p style="padding: var(--space-lg); text-align: center; color: var(--color-gray-600);">Your trip history would appear here.</p>') },
    { icon: '🗺️', label: 'Zone Map', action: () => navigate('zoneMap') },
    { icon: '❓', label: 'Help & Support', action: () => showModal('Help', '<p style="padding: var(--space-lg); text-align: center; color: var(--color-gray-600);">Help content would appear here.</p>') },
    { icon: '🔄', label: 'Reset Demo', action: () => { if (confirm('Reset all data and show onboarding?')) { clearState(); } } }
  ];

  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'account-menu__item';
    li.innerHTML = `
      <span class="account-menu__icon">${item.icon}</span>
      <span class="account-menu__label">${item.label}</span>
      <span class="account-menu__arrow">›</span>
    `;
    li.addEventListener('click', item.action);
    menu.appendChild(li);
  });

  content.appendChild(menu);
  container.appendChild(content);
}
