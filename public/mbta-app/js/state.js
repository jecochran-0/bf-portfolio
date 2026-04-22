/* ============================================
   MBTA mTicket - State Management
   ============================================ */

// Central application state
const AppState = {
  // User state
  user: {
    isFirstLaunch: true,
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com'
  },

  // Navigation
  currentScreen: 'home',
  screenParams: {},
  screenHistory: [],

  // Tickets in wallet
  tickets: [
    {
      id: 'ticket-001',
      type: 'one-way-half',
      typeName: 'One Way Reduced',
      origin: { name: 'South Station', zone: '1A' },
      destination: { name: 'North Scituate', zone: '5' },
      price: 2.88,
      status: 'inactive', // 'inactive', 'active', 'expired', 'used'
      purchaseDate: '2026-01-20',
      expiresAt: '2026-04-20T23:59:59',
      activatedAt: null,
      validUntil: null
    },
    {
      id: 'ticket-002',
      type: 'round-trip',
      typeName: 'Round Trip',
      origin: { name: 'North Scituate', zone: '5' },
      destination: { name: 'South Station', zone: '1A' },
      price: 11.50,
      status: 'inactive',
      purchaseDate: '2026-01-18',
      expiresAt: '2026-04-18T23:59:59',
      activatedAt: null,
      validUntil: null
    }
  ],

  // Favorite routes (persisted to localStorage)
  favorites: [
    {
      id: 'fav-001',
      origin: { name: 'North Scituate', zone: '5' },
      destination: { name: 'South Station', zone: '1A' }
    }
  ],

  // Trip history for smart suggestions
  tripHistory: [
    {
      origin: { name: 'North Scituate', zone: '5' },
      destination: { name: 'South Station', zone: '1A' },
      date: '2026-01-21',
      time: '07:15'
    },
    {
      origin: { name: 'South Station', zone: '1A' },
      destination: { name: 'North Scituate', zone: '5' },
      date: '2026-01-21',
      time: '17:30'
    }
  ],

  // Current alerts
  alerts: [...SAMPLE_ALERTS],

  // Dismissed alert IDs (persisted)
  dismissedAlertIds: [],

  // Purchase flow state
  purchaseFlow: {
    step: 1, // 1: route, 2: ticket type, 3: payment, 4: confirmation
    origin: null,
    destination: null,
    ticketType: null,
    quantity: 1,
    totalPrice: 0
  },

  // Station selection context
  stationSelectContext: null, // 'origin' or 'destination'

  // Active timers
  activeTimers: {}
};

// ============================================
// State Persistence
// ============================================

const STORAGE_KEY = 'mbta_mticket_state';

function saveState() {
  const persistedState = {
    isFirstLaunch: AppState.user.isFirstLaunch,
    favorites: AppState.favorites,
    tripHistory: AppState.tripHistory,
    dismissedAlertIds: AppState.dismissedAlertIds,
    tickets: AppState.tickets
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
  } catch (e) {
    console.warn('Could not save state to localStorage:', e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);

      if (parsed.isFirstLaunch !== undefined) {
        AppState.user.isFirstLaunch = parsed.isFirstLaunch;
      }
      if (parsed.favorites) {
        AppState.favorites = parsed.favorites;
      }
      if (parsed.tripHistory) {
        AppState.tripHistory = parsed.tripHistory;
      }
      if (parsed.dismissedAlertIds) {
        AppState.dismissedAlertIds = parsed.dismissedAlertIds;
      }
      if (parsed.tickets) {
        AppState.tickets = parsed.tickets;
      }
    }
  } catch (e) {
    console.warn('Could not load state from localStorage:', e);
  }
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// ============================================
// Ticket Management
// ============================================

function activateTicket(ticketId) {
  const ticket = AppState.tickets.find(t => t.id === ticketId);
  if (!ticket || ticket.status !== 'inactive') return false;

  const now = new Date();
  const validityHours = ticket.type.includes('round') ? 24 : 2;
  const validUntil = new Date(now.getTime() + validityHours * 60 * 60 * 1000);

  ticket.status = 'active';
  ticket.activatedAt = now.toISOString();
  ticket.validUntil = validUntil.toISOString();

  saveState();
  return true;
}

function deactivateTicket(ticketId) {
  const ticket = AppState.tickets.find(t => t.id === ticketId);
  if (!ticket || ticket.status !== 'active') return false;

  ticket.status = 'used';
  saveState();
  return true;
}

function getActiveTicket() {
  return AppState.tickets.find(t => t.status === 'active');
}

function getInactiveTickets() {
  return AppState.tickets.filter(t => t.status === 'inactive');
}

function addTicket(ticketData) {
  const newTicket = {
    id: 'ticket-' + Date.now(),
    ...ticketData,
    status: 'inactive',
    purchaseDate: new Date().toISOString().split('T')[0],
    expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    activatedAt: null,
    validUntil: null
  };

  AppState.tickets.unshift(newTicket);
  saveState();
  return newTicket;
}

function getTicketTimeRemaining(ticket) {
  if (!ticket.validUntil) return null;

  const now = new Date();
  const validUntil = new Date(ticket.validUntil);
  const diffMs = validUntil - now;

  if (diffMs <= 0) return { expired: true, text: 'Expired' };

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return {
    expired: false,
    hours,
    minutes,
    seconds,
    totalMinutes: hours * 60 + minutes,
    text: `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
    warning: hours === 0 && minutes < 15
  };
}

// ============================================
// Favorites Management
// ============================================

function addFavorite(origin, destination) {
  const exists = AppState.favorites.some(
    f => f.origin.name === origin.name && f.destination.name === destination.name
  );

  if (!exists) {
    AppState.favorites.push({
      id: 'fav-' + Date.now(),
      origin,
      destination
    });
    saveState();
    return true;
  }
  return false;
}

function removeFavorite(favId) {
  const index = AppState.favorites.findIndex(f => f.id === favId);
  if (index > -1) {
    AppState.favorites.splice(index, 1);
    saveState();
    return true;
  }
  return false;
}

function swapFavorite(favId) {
  const fav = AppState.favorites.find(f => f.id === favId);
  if (fav) {
    const temp = fav.origin;
    fav.origin = fav.destination;
    fav.destination = temp;
    saveState();
    return true;
  }
  return false;
}

function isFavorite(originName, destName) {
  return AppState.favorites.some(
    f => f.origin.name === originName && f.destination.name === destName
  );
}

// ============================================
// Trip History
// ============================================

function addToHistory(origin, destination) {
  const now = new Date();
  AppState.tripHistory.unshift({
    origin,
    destination,
    date: now.toISOString().split('T')[0],
    time: now.toTimeString().slice(0, 5)
  });

  // Keep only last 20 trips
  if (AppState.tripHistory.length > 20) {
    AppState.tripHistory = AppState.tripHistory.slice(0, 20);
  }

  saveState();
}

function getLastTrip() {
  return AppState.tripHistory[0] || null;
}

function getReturnTrip() {
  const last = getLastTrip();
  if (!last) return null;

  return {
    origin: last.destination,
    destination: last.origin
  };
}

// ============================================
// Alerts Management
// ============================================

function dismissAlert(alertId) {
  if (!AppState.dismissedAlertIds.includes(alertId)) {
    AppState.dismissedAlertIds.push(alertId);
    saveState();
  }
}

function getActiveAlerts() {
  return AppState.alerts.filter(a => !AppState.dismissedAlertIds.includes(a.id));
}

function getAlertForRoute(originName, destName) {
  const originStation = getStationByName(originName);
  const destStation = getStationByName(destName);

  if (!originStation || !destStation) return null;

  // Find common lines between stations
  const commonLines = originStation.lines.filter(l => destStation.lines.includes(l));

  // Check if any alert affects these lines
  return AppState.alerts.find(alert =>
    !AppState.dismissedAlertIds.includes(alert.id) &&
    commonLines.includes(alert.lineId)
  );
}

// ============================================
// Purchase Flow
// ============================================

function resetPurchaseFlow() {
  AppState.purchaseFlow = {
    step: 1,
    origin: null,
    destination: null,
    ticketType: null,
    quantity: 1,
    totalPrice: 0
  };
}

function setPurchaseOrigin(station) {
  AppState.purchaseFlow.origin = station;
  updatePurchasePrice();
}

function setPurchaseDestination(station) {
  AppState.purchaseFlow.destination = station;
  updatePurchasePrice();
}

function setPurchaseTicketType(ticketType) {
  AppState.purchaseFlow.ticketType = ticketType;
  updatePurchasePrice();
}

function swapPurchaseStations() {
  const temp = AppState.purchaseFlow.origin;
  AppState.purchaseFlow.origin = AppState.purchaseFlow.destination;
  AppState.purchaseFlow.destination = temp;
}

function updatePurchasePrice() {
  const { origin, destination, ticketType } = AppState.purchaseFlow;

  if (origin && destination && ticketType) {
    AppState.purchaseFlow.totalPrice = calculateTicketPrice(
      origin.zone,
      destination.zone,
      ticketType.id
    );
  }
}

function completePurchase() {
  const { origin, destination, ticketType, totalPrice } = AppState.purchaseFlow;

  if (!origin || !destination || !ticketType) return null;

  const ticket = addTicket({
    type: ticketType.id,
    typeName: ticketType.name,
    origin: { name: origin.name, zone: origin.zone },
    destination: { name: destination.name, zone: destination.zone },
    price: parseFloat(totalPrice)
  });

  addToHistory(
    { name: origin.name, zone: origin.zone },
    { name: destination.name, zone: destination.zone }
  );

  resetPurchaseFlow();
  return ticket;
}

// ============================================
// Onboarding
// ============================================

function completeOnboarding() {
  AppState.user.isFirstLaunch = false;
  saveState();
}

function resetOnboarding() {
  AppState.user.isFirstLaunch = true;
  saveState();
}
