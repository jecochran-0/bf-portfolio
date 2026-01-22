/* ============================================
   MBTA mTicket - Reusable Components
   ============================================ */

// ============================================
// Header Component
// ============================================

function createHeader(options = {}) {
  const {
    title = '',
    showBack = false,
    showLogo = false,
    onBack = null,
    rightAction = null
  } = options;

  const header = document.createElement('header');
  header.className = 'header';

  // Left side
  const leftDiv = document.createElement('div');
  leftDiv.className = 'header__left';

  if (showBack) {
    const backBtn = document.createElement('button');
    backBtn.className = 'header__back';
    backBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
      <span>Back</span>
    `;
    backBtn.addEventListener('click', () => {
      if (onBack && typeof onBack === 'function') {
        onBack();
      } else if (typeof onBack === 'string') {
        // Execute string as function call
        eval(onBack);
      } else {
        goBack();
      }
    });
    leftDiv.appendChild(backBtn);
  } else if (showLogo) {
    leftDiv.innerHTML = `<div class="header__logo">T</div>`;
  }

  header.appendChild(leftDiv);

  // Title
  const titleEl = document.createElement('h1');
  titleEl.className = 'header__title';
  titleEl.textContent = title;
  header.appendChild(titleEl);

  // Right side
  const rightDiv = document.createElement('div');
  rightDiv.className = 'header__right';
  if (rightAction) {
    rightDiv.innerHTML = rightAction;
  }
  header.appendChild(rightDiv);

  return header;
}

// ============================================
// Alert Banner Component
// ============================================

function createAlertBanner(alert) {
  const banner = document.createElement('div');
  banner.className = 'alert-banner animate-slide-up';
  banner.id = `alert-banner-${alert.id}`;

  banner.innerHTML = `
    <span class="alert-banner__icon">⚠️</span>
    <div class="alert-banner__content">
      <span class="alert-banner__title">${alert.line}:</span>
      ${alert.title}
    </div>
    <button class="alert-banner__dismiss" onclick="handleDismissAlert('${alert.id}')">&times;</button>
  `;

  return banner;
}

// ============================================
// Ticket Card Component
// ============================================

function createTicketCard(ticket) {
  const isActive = ticket.status === 'active';
  const card = document.createElement('div');
  card.className = `ticket-card ${isActive ? 'ticket-card--active' : ''} animate-slide-up`;
  card.id = `ticket-${ticket.id}`;

  let timerHtml = '';
  let actionHtml = '';

  if (isActive) {
    const timeRemaining = getTicketTimeRemaining(ticket);
    timerHtml = `
      <div class="ticket-card__timer ${timeRemaining?.warning ? 'ticket-card__timer--warning' : ''}" id="timer-${ticket.id}">
        Valid for ${timeRemaining?.text || '--:--:--'}
      </div>
    `;
    actionHtml = `
      <div class="ticket-card__actions">
        <button class="btn btn--primary btn--full" onclick="navigate('ticketView', { ticketId: '${ticket.id}' })">
          View Ticket
        </button>
      </div>
    `;
  } else {
    actionHtml = `
      <div class="ticket-card__actions">
        <button class="btn btn--activate" onclick="handleActivateTicket('${ticket.id}')">
          Activate
        </button>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="ticket-card__inner">
      <div class="ticket-card__watermark">T</div>
      <div class="ticket-card__header">
        <div>
          <div class="ticket-card__type">${ticket.type === 'one-way' ? 'One Way' : ticket.type === 'round-trip' ? 'Round Trip' : 'One Way'}</div>
          <div class="ticket-card__subtype">${ticket.typeName}</div>
        </div>
        <span class="ticket-card__status ${isActive ? 'ticket-card__status--active' : ''}">
          ${isActive ? 'ACTIVE' : 'INACTIVE'}
        </span>
      </div>
      <div class="ticket-card__route">
        <div class="ticket-card__station ticket-card__station--left">
          <span class="ticket-card__station-name">${ticket.origin.name}</span>
          <span class="ticket-card__station-zone">${ticket.origin.zone}</span>
        </div>
        <span class="ticket-card__arrow">→</span>
        <div class="ticket-card__station ticket-card__station--right">
          <span class="ticket-card__station-name">${ticket.destination.name}</span>
          <span class="ticket-card__station-zone">${ticket.destination.zone}</span>
        </div>
      </div>
      ${timerHtml}
      <div class="ticket-card__expires">
        Expires ${formatDate(ticket.expiresAt)}
      </div>
      ${actionHtml}
    </div>
  `;

  return card;
}

// ============================================
// Quick Buy Card Component
// ============================================

function createQuickBuyCard(type, trip) {
  if (!trip) return null;

  const card = document.createElement('div');
  card.className = 'quick-buy__card';

  const label = type === 'last' ? 'Last Trip' : 'Return Trip';
  const fare = getFare(trip.origin.zone, trip.destination.zone);

  card.innerHTML = `
    <div class="quick-buy__label">${label}</div>
    <div class="quick-buy__route">
      ${trip.origin.name}
      <span style="color: var(--color-gray-400);">→</span>
      ${trip.destination.name}
    </div>
    <div class="quick-buy__price">${formatPrice(fare)}</div>
  `;

  card.addEventListener('click', () => {
    // Pre-fill purchase flow
    AppState.purchaseFlow.origin = getStationByName(trip.origin.name);
    AppState.purchaseFlow.destination = getStationByName(trip.destination.name);
    navigate('buyTickets');
  });

  return card;
}

// ============================================
// Favorite Card Component
// ============================================

function createFavoriteCard(favorite) {
  const card = document.createElement('div');
  card.className = 'favorite-card animate-slide-up';

  card.innerHTML = `
    <button class="favorite-card__star" onclick="handleRemoveFavorite('${favorite.id}')">★</button>
    <div class="favorite-card__route">
      <span class="favorite-card__station">${favorite.origin.name}</span>
      <button class="favorite-card__swap" onclick="handleSwapFavorite('${favorite.id}')">⇄</button>
      <span class="favorite-card__station">${favorite.destination.name}</span>
    </div>
    <button class="btn btn--primary btn--small" onclick="handleQuickBuyFavorite('${favorite.id}')">Buy</button>
  `;

  return card;
}

// ============================================
// Route Selector Component
// ============================================

function createRouteSelector() {
  const { origin, destination } = AppState.purchaseFlow;

  const selector = document.createElement('div');
  selector.className = 'route-selector';

  selector.innerHTML = `
    <div class="route-selector__field" onclick="openStationSelect('origin')">
      <div class="route-selector__label">From</div>
      <div class="route-selector__value ${origin ? 'route-selector__value--selected' : ''}">
        ${origin ? `${origin.name} (Zone ${origin.zone})` : 'Select origin station'}
      </div>
    </div>

    <div class="route-selector__swap">
      <button class="swap-btn" onclick="handleSwapPurchaseStations()">⇄</button>
    </div>

    <div class="route-selector__field" onclick="openStationSelect('destination')">
      <div class="route-selector__label">To</div>
      <div class="route-selector__value ${destination ? 'route-selector__value--selected' : ''}">
        ${destination ? `${destination.name} (Zone ${destination.zone})` : 'Select destination station'}
      </div>
    </div>
  `;

  return selector;
}

// ============================================
// Station List Item Component
// ============================================

function createStationListItem(station, onClick) {
  const item = document.createElement('li');
  item.className = 'station-list__item';

  item.innerHTML = `
    <span class="station-list__name">${station.name}</span>
    <span class="station-list__zone">
      Zone ${station.zone}
      <button class="station-list__zone-help" onclick="event.stopPropagation(); showZoneHelp()">?</button>
    </span>
  `;

  item.addEventListener('click', () => onClick(station));
  return item;
}

// ============================================
// Ticket Type Item Component
// ============================================

function createTicketTypeItem(ticketType, fare, isSelected, onClick) {
  const item = document.createElement('li');
  item.className = `ticket-type ${isSelected ? 'ticket-type--selected' : ''}`;

  let price;
  if (ticketType.multiplier === 'monthly') {
    const { origin, destination } = AppState.purchaseFlow;
    const maxZone = [origin?.zone || '1A', destination?.zone || '1A'].sort().pop();
    price = MONTHLY_PRICES[maxZone];
  } else {
    price = fare * ticketType.multiplier;
  }

  item.innerHTML = `
    <div class="ticket-type__info">
      <div class="ticket-type__name">${ticketType.name}</div>
      <div class="ticket-type__desc">${ticketType.description}</div>
    </div>
    <div class="ticket-type__price">${formatPrice(price)}</div>
  `;

  item.addEventListener('click', () => onClick(ticketType, price));
  return item;
}

// ============================================
// Alert Card Component
// ============================================

function createAlertCard(alert) {
  const card = document.createElement('div');
  card.className = `alert-card ${alert.severity === 'severe' ? 'alert-card--severe' : ''}`;

  card.innerHTML = `
    <div class="alert-card__header">
      <span class="alert-card__line">${alert.line}</span>
      <span class="alert-card__time">${formatTime(alert.timestamp)}</span>
    </div>
    <div class="alert-card__title">${alert.title}</div>
    <div class="alert-card__desc">${alert.description}</div>
  `;

  return card;
}

// ============================================
// Modal Component
// ============================================

function showModal(title, content, onClose) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay animate-fade-in';
  overlay.id = 'modal-overlay';

  overlay.innerHTML = `
    <div class="modal animate-slide-up">
      <div class="modal__header">
        <h2 class="modal__title">${title}</h2>
        <button class="modal__close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal__content">
        ${content}
      </div>
    </div>
  `;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
      if (onClose) onClose();
    }
  });

  document.body.appendChild(overlay);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.remove();
  }
}

// ============================================
// Payment Method Components
// ============================================

function createApplePayButton(onClick) {
  const btn = document.createElement('button');
  btn.className = 'btn btn--apple-pay';
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    Pay with Apple Pay
  `;
  btn.addEventListener('click', onClick);
  return btn;
}

function createGooglePayButton(onClick) {
  const btn = document.createElement('button');
  btn.className = 'btn btn--google-pay';
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" style="margin-right: 8px;">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
    Pay with Google Pay
  `;
  btn.addEventListener('click', onClick);
  return btn;
}

function createSavedCardOption(onClick) {
  const card = document.createElement('div');
  card.className = 'saved-card';
  card.innerHTML = `
    <div class="saved-card__icon">MC</div>
    <div class="saved-card__info">
      <div class="saved-card__number">MasterCard •••• 9694</div>
      <div style="font-size: 12px; color: var(--color-gray-500);">Expires 08/27</div>
    </div>
    <div class="saved-card__check">✓</div>
  `;
  card.addEventListener('click', onClick);
  return card;
}

// ============================================
// Utility Functions
// ============================================

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function showLoading(container) {
  container.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
    </div>
  `;
}

function showEmptyState(container, icon, message) {
  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-state__icon">${icon}</div>
      <div class="empty-state__text">${message}</div>
    </div>
  `;
}
