/* ============================================
   MBTA mTicket - Main Application Controller
   ============================================ */

// ============================================
// Screen Registry
// ============================================

const screens = {
  onboarding: renderOnboarding,
  home: renderHome,
  buyTickets: renderBuyTickets,
  stationSelect: renderStationSelect,
  ticketType: renderTicketType,
  payment: renderPayment,
  confirmation: renderConfirmation,
  ticketView: renderTicketView,
  alerts: renderAlerts,
  zoneMap: renderZoneMap,
  account: renderAccount
};

// ============================================
// Navigation
// ============================================

function navigate(screenName, params = {}) {
  // Store history for back navigation
  if (AppState.currentScreen && AppState.currentScreen !== screenName) {
    AppState.screenHistory.push({
      screen: AppState.currentScreen,
      params: AppState.screenParams
    });

    // Limit history size
    if (AppState.screenHistory.length > 10) {
      AppState.screenHistory.shift();
    }
  }

  AppState.currentScreen = screenName;
  AppState.screenParams = params;

  // Clear app container
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Clear any active timers
  clearAllTimers();

  // Render screen
  const renderFn = screens[screenName];
  if (renderFn) {
    renderFn(app, params);
  } else {
    console.error('Unknown screen:', screenName);
    renderHome(app);
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

function goBack() {
  if (AppState.screenHistory.length > 0) {
    const prev = AppState.screenHistory.pop();
    AppState.currentScreen = prev.screen;
    AppState.screenParams = prev.params;

    const app = document.getElementById('app');
    app.innerHTML = '';
    clearAllTimers();

    const renderFn = screens[prev.screen];
    if (renderFn) {
      renderFn(app, prev.params);
    }
  } else {
    navigate('home');
  }
}

// ============================================
// Bottom Navigation
// ============================================

function showBottomNav() {
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.classList.remove('hidden');
}

function hideBottomNav() {
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.classList.add('hidden');
}

function updateBottomNav(activeScreen) {
  const items = document.querySelectorAll('.bottom-nav__item');
  items.forEach(item => {
    const screen = item.dataset.screen;
    item.classList.toggle('bottom-nav__item--active', screen === activeScreen);
  });
}

function updateAlertBadge() {
  const badge = document.getElementById('alert-badge');
  const activeAlerts = getActiveAlerts();

  if (badge) {
    if (activeAlerts.length > 0) {
      badge.textContent = activeAlerts.length;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

// ============================================
// Event Handlers - Onboarding
// ============================================

function handleOnboardingComplete(type) {
  completeOnboarding();

  if (type === 'visitor') {
    // Show zone map first for visitors
    navigate('zoneMap');
  } else {
    navigate('home');
  }
}

// ============================================
// Event Handlers - Tickets
// ============================================

function handleActivateTicket(ticketId) {
  const btn = document.querySelector(`#ticket-${ticketId} .btn--activate`);
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>';
  }

  // Simulate network delay
  setTimeout(() => {
    if (activateTicket(ticketId)) {
      // Refresh home screen to show activated ticket
      navigate('home');
    } else {
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Activate';
      }
      alert('Could not activate ticket. Please try again.');
    }
  }, 500);
}

function handleActivateFromConfirmation(ticketId) {
  if (activateTicket(ticketId)) {
    navigate('ticketView', { ticketId });
  }
}

// ============================================
// Event Handlers - Favorites
// ============================================

function handleRemoveFavorite(favId) {
  if (confirm('Remove this favorite?')) {
    removeFavorite(favId);
    navigate('home');
  }
}

function handleSwapFavorite(favId) {
  swapFavorite(favId);
  navigate('home');
}

function handleQuickBuyFavorite(favId) {
  const fav = AppState.favorites.find(f => f.id === favId);
  if (fav) {
    AppState.purchaseFlow.origin = getStationByName(fav.origin.name);
    AppState.purchaseFlow.destination = getStationByName(fav.destination.name);
    navigate('buyTickets');
  }
}

// ============================================
// Event Handlers - Alerts
// ============================================

function handleDismissAlert(alertId) {
  const banner = document.getElementById(`alert-banner-${alertId}`);
  if (banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(-10px)';
    banner.style.transition = 'all 0.3s ease';

    setTimeout(() => {
      dismissAlert(alertId);
      banner.remove();
      updateAlertBadge();
    }, 300);
  }
}

// ============================================
// Event Handlers - Station Selection
// ============================================

function openStationSelect(context) {
  AppState.stationSelectContext = context;
  navigate('stationSelect');
}

function closeStationSelect() {
  AppState.stationSelectContext = null;
  navigate('buyTickets');
}

function handleStationSelect(station) {
  const context = AppState.stationSelectContext;

  if (context === 'origin') {
    setPurchaseOrigin(station);
  } else if (context === 'destination') {
    setPurchaseDestination(station);
  }

  closeStationSelect();
}

function filterStations(query) {
  const list = document.getElementById('station-list');
  if (!list) return;

  const items = list.querySelectorAll('.station-list__item');
  const sections = list.querySelectorAll('.station-list__section');
  const lowerQuery = query.toLowerCase();

  // Hide/show sections based on matches
  const visibleZones = new Set();

  items.forEach(item => {
    const name = item.querySelector('.station-list__name')?.textContent.toLowerCase() || '';
    const matches = name.includes(lowerQuery);
    item.style.display = matches || !query ? '' : 'none';

    if (matches || !query) {
      // Find the station to get its zone
      const stationName = item.querySelector('.station-list__name')?.textContent;
      const station = STATIONS.find(s => s.name === stationName);
      if (station) {
        visibleZones.add(station.zone);
      }
    }
  });

  // Update section visibility
  sections.forEach(section => {
    const zoneMatch = section.textContent.match(/Zone (\w+)/);
    if (zoneMatch) {
      section.style.display = visibleZones.has(zoneMatch[1]) || !query ? '' : 'none';
    } else if (section.textContent === 'Recent') {
      section.style.display = !query ? '' : 'none';
    }
  });
}

// ============================================
// Event Handlers - Purchase Flow
// ============================================

function handleSwapPurchaseStations() {
  swapPurchaseStations();

  // Re-render the buy tickets screen
  const app = document.getElementById('app');
  app.innerHTML = '';
  renderBuyTickets(app);
}

function handleTicketTypeSelect(ticketType, price) {
  AppState.purchaseFlow.ticketType = ticketType;
  AppState.purchaseFlow.totalPrice = price;

  // Re-render to show selection
  const app = document.getElementById('app');
  app.innerHTML = '';
  renderTicketType(app);
}

function handleApplePayPurchase() {
  processPurchase('Apple Pay');
}

function handleGooglePayPurchase() {
  processPurchase('Google Pay');
}

function handleCardPurchase() {
  processPurchase('Card');
}

function processPurchase(method) {
  // Show loading
  showModal('Processing', `
    <div style="text-align: center; padding: var(--space-xl);">
      <div class="spinner" style="margin: 0 auto var(--space-md);"></div>
      <p>Processing payment with ${method}...</p>
    </div>
  `);

  // Simulate payment processing
  setTimeout(() => {
    closeModal();

    const ticket = completePurchase();
    if (ticket) {
      navigate('confirmation', { ticket });
    } else {
      alert('Purchase failed. Please try again.');
      navigate('payment');
    }
  }, 1500);
}

// ============================================
// Event Handlers - Zone Help
// ============================================

function showZoneHelp() {
  showModal('Understanding Zones', `
    <div style="padding: var(--space-md);">
      <p style="margin-bottom: var(--space-md);">
        <strong>Commuter Rail fares are based on zones.</strong>
      </p>
      <p style="margin-bottom: var(--space-md); color: var(--color-gray-600);">
        Zone 1A includes downtown Boston stations (South Station, North Station, Back Bay).
        The further you travel from downtown, the higher the zone number and fare.
      </p>
      <p style="color: var(--color-gray-600);">
        Your fare is calculated based on how many zones you travel through.
      </p>
      <button class="btn btn--primary btn--full" style="margin-top: var(--space-lg);" onclick="closeModal(); navigate('zoneMap');">
        View Zone Map
      </button>
    </div>
  `);
}

// ============================================
// Timer Management
// ============================================

function startTicketTimer(ticketId) {
  // Clear existing timer for this ticket
  if (AppState.activeTimers[ticketId]) {
    clearInterval(AppState.activeTimers[ticketId]);
  }

  AppState.activeTimers[ticketId] = setInterval(() => {
    const ticket = AppState.tickets.find(t => t.id === ticketId);
    if (!ticket || ticket.status !== 'active') {
      clearInterval(AppState.activeTimers[ticketId]);
      return;
    }

    const timeRemaining = getTicketTimeRemaining(ticket);
    const timerEl = document.getElementById(`timer-${ticketId}`);

    if (timerEl && timeRemaining) {
      timerEl.textContent = `Valid for ${timeRemaining.text}`;
      timerEl.classList.toggle('ticket-card__timer--warning', timeRemaining.warning);

      if (timeRemaining.expired) {
        ticket.status = 'expired';
        saveState();
        clearInterval(AppState.activeTimers[ticketId]);
        navigate('home');
      }
    }
  }, 1000);
}

function startActiveTicketTimer(ticketId) {
  // Clear existing timer
  if (AppState.activeTimers['activeView']) {
    clearInterval(AppState.activeTimers['activeView']);
  }

  AppState.activeTimers['activeView'] = setInterval(() => {
    const ticket = AppState.tickets.find(t => t.id === ticketId);
    if (!ticket || ticket.status !== 'active') {
      clearInterval(AppState.activeTimers['activeView']);
      return;
    }

    const timeRemaining = getTicketTimeRemaining(ticket);
    const timerEl = document.getElementById('active-timer');

    if (timerEl && timeRemaining) {
      timerEl.textContent = timeRemaining.text;
      timerEl.classList.toggle('active-ticket__timer--warning', timeRemaining.warning);

      if (timeRemaining.expired) {
        ticket.status = 'expired';
        saveState();
        clearInterval(AppState.activeTimers['activeView']);
        alert('Your ticket has expired.');
        navigate('home');
      }
    }
  }, 1000);
}

function clearAllTimers() {
  Object.keys(AppState.activeTimers).forEach(key => {
    clearInterval(AppState.activeTimers[key]);
  });
  AppState.activeTimers = {};
}

// ============================================
// Settings Menu
// ============================================

function showSettingsMenu() {
  showModal('Menu', `
    <div style="padding: var(--space-sm);">
      <button class="btn btn--ghost btn--full" style="justify-content: flex-start; padding: var(--space-md);" onclick="closeModal(); navigate('zoneMap');">
        🗺️ Zone Map
      </button>
      <button class="btn btn--ghost btn--full" style="justify-content: flex-start; padding: var(--space-md);" onclick="closeModal(); navigate('alerts');">
        🔔 Service Alerts
      </button>
      <button class="btn btn--ghost btn--full" style="justify-content: flex-start; padding: var(--space-md);" onclick="closeModal(); navigate('account');">
        👤 Account
      </button>
      <hr style="border: none; border-top: 1px solid var(--color-gray-200); margin: var(--space-sm) 0;">
      <button class="btn btn--ghost btn--full" style="justify-content: flex-start; padding: var(--space-md); color: var(--color-gray-500);" onclick="closeModal(); resetOnboarding(); navigate('onboarding');">
        🔄 Show Onboarding
      </button>
    </div>
  `);
}

// ============================================
// Bottom Nav Click Handlers
// ============================================

function initBottomNav() {
  const nav = document.getElementById('bottom-nav');
  if (!nav) return;

  nav.addEventListener('click', (e) => {
    const item = e.target.closest('.bottom-nav__item');
    if (!item) return;

    const screen = item.dataset.screen;
    if (screen) {
      // Reset purchase flow when navigating away
      if (screen !== 'buyTickets' && AppState.currentScreen === 'buyTickets') {
        resetPurchaseFlow();
      }
      navigate(screen);
    }
  });
}

// ============================================
// Initialization
// ============================================

function init() {
  // Load persisted state
  loadState();

  // Initialize bottom nav handlers
  initBottomNav();

  // Check for expired tickets
  AppState.tickets.forEach(ticket => {
    if (ticket.status === 'active' && ticket.validUntil) {
      const validUntil = new Date(ticket.validUntil);
      if (validUntil < new Date()) {
        ticket.status = 'expired';
      }
    }
  });
  saveState();

  // Navigate to appropriate screen
  if (AppState.user.isFirstLaunch) {
    navigate('onboarding');
  } else {
    navigate('home');
  }

  console.log('MBTA mTicket Prototype loaded');
  console.log('To reset the demo, go to Account > Reset Demo');
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
