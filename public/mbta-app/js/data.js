/* ============================================
   MBTA mTicket - Mock Data
   ============================================ */

// Commuter Rail Lines
const LINES = [
  { id: 'greenbush', name: 'Greenbush Line', color: '#80276C' },
  { id: 'providence', name: 'Providence/Stoughton Line', color: '#80276C' },
  { id: 'franklin', name: 'Franklin/Foxboro Line', color: '#80276C' },
  { id: 'fairmount', name: 'Fairmount Line', color: '#80276C' },
  { id: 'worcester', name: 'Worcester Line', color: '#80276C' },
  { id: 'needham', name: 'Needham Line', color: '#80276C' },
  { id: 'newburyport', name: 'Newburyport/Rockport Line', color: '#80276C' },
  { id: 'haverhill', name: 'Haverhill Line', color: '#80276C' },
  { id: 'lowell', name: 'Lowell Line', color: '#80276C' },
  { id: 'fitchburg', name: 'Fitchburg Line', color: '#80276C' },
  { id: 'middleborough', name: 'Middleborough/Lakeville Line', color: '#80276C' },
  { id: 'kingston', name: 'Kingston Line', color: '#80276C' }
];

// Stations with zones
const STATIONS = [
  // Zone 1A - Downtown Boston
  { name: 'South Station', zone: '1A', lines: ['providence', 'franklin', 'fairmount', 'worcester', 'greenbush', 'middleborough', 'kingston'] },
  { name: 'North Station', zone: '1A', lines: ['newburyport', 'haverhill', 'lowell', 'fitchburg'] },
  { name: 'Back Bay', zone: '1A', lines: ['providence', 'franklin', 'worcester', 'needham'] },

  // Zone 2
  { name: 'JFK/UMass', zone: '2', lines: ['greenbush', 'middleborough', 'kingston'] },
  { name: 'Ruggles', zone: '2', lines: ['providence', 'franklin', 'needham'] },
  { name: 'Forest Hills', zone: '2', lines: ['needham'] },
  { name: 'Chelsea', zone: '2', lines: ['newburyport'] },

  // Zone 3
  { name: 'Quincy Center', zone: '3', lines: ['greenbush', 'middleborough', 'kingston'] },
  { name: 'Hyde Park', zone: '3', lines: ['providence', 'franklin', 'fairmount'] },
  { name: 'Readville', zone: '3', lines: ['providence', 'franklin', 'fairmount'] },

  // Zone 4
  { name: 'Braintree', zone: '4', lines: ['greenbush', 'middleborough', 'kingston'] },
  { name: 'Route 128', zone: '4', lines: ['providence'] },
  { name: 'Dedham Corporate Center', zone: '4', lines: ['franklin'] },

  // Zone 5
  { name: 'North Scituate', zone: '5', lines: ['greenbush'] },
  { name: 'Cohasset', zone: '5', lines: ['greenbush'] },
  { name: 'Canton Junction', zone: '5', lines: ['providence'] },
  { name: 'Norwood Central', zone: '5', lines: ['franklin'] },

  // Zone 6
  { name: 'Greenbush', zone: '6', lines: ['greenbush'] },
  { name: 'Sharon', zone: '6', lines: ['providence'] },
  { name: 'Walpole', zone: '6', lines: ['franklin'] },
  { name: 'Framingham', zone: '6', lines: ['worcester'] },

  // Zone 7
  { name: 'Stoughton', zone: '7', lines: ['providence'] },
  { name: 'Norfolk', zone: '7', lines: ['franklin'] },
  { name: 'Ashland', zone: '7', lines: ['worcester'] },

  // Zone 8
  { name: 'Mansfield', zone: '8', lines: ['providence'] },
  { name: 'Franklin', zone: '8', lines: ['franklin'] },
  { name: 'Southborough', zone: '8', lines: ['worcester'] },
  { name: 'Salem', zone: '8', lines: ['newburyport'] },

  // Zone 9
  { name: 'Attleboro', zone: '9', lines: ['providence'] },
  { name: 'Forge Park/495', zone: '9', lines: ['franklin'] },
  { name: 'Westborough', zone: '9', lines: ['worcester'] },

  // Zone 10
  { name: 'Providence', zone: '10', lines: ['providence'] },
  { name: 'Worcester', zone: '10', lines: ['worcester'] }
];

// Zone fare matrix (one-way adult fares)
const ZONE_FARES = {
  '1A': { '1A': 2.40, '2': 3.50, '3': 4.25, '4': 5.00, '5': 5.75, '6': 6.50, '7': 7.25, '8': 8.00, '9': 9.50, '10': 11.00 },
  '2': { '1A': 3.50, '2': 2.40, '3': 3.50, '4': 4.25, '5': 5.00, '6': 5.75, '7': 6.50, '8': 7.25, '9': 8.00, '10': 9.50 },
  '3': { '1A': 4.25, '2': 3.50, '3': 2.40, '4': 3.50, '5': 4.25, '6': 5.00, '7': 5.75, '8': 6.50, '9': 7.25, '10': 8.00 },
  '4': { '1A': 5.00, '2': 4.25, '3': 3.50, '4': 2.40, '5': 3.50, '6': 4.25, '7': 5.00, '8': 5.75, '9': 6.50, '10': 7.25 },
  '5': { '1A': 5.75, '2': 5.00, '3': 4.25, '4': 3.50, '5': 2.40, '6': 3.50, '7': 4.25, '8': 5.00, '9': 5.75, '10': 6.50 },
  '6': { '1A': 6.50, '2': 5.75, '3': 5.00, '4': 4.25, '5': 3.50, '6': 2.40, '7': 3.50, '8': 4.25, '9': 5.00, '10': 5.75 },
  '7': { '1A': 7.25, '2': 6.50, '3': 5.75, '4': 5.00, '5': 4.25, '6': 3.50, '7': 2.40, '8': 3.50, '9': 4.25, '10': 5.00 },
  '8': { '1A': 8.00, '2': 7.25, '3': 6.50, '4': 5.75, '5': 5.00, '6': 4.25, '7': 3.50, '8': 2.40, '9': 3.50, '10': 4.25 },
  '9': { '1A': 9.50, '2': 8.00, '3': 7.25, '4': 6.50, '5': 5.75, '6': 5.00, '7': 4.25, '8': 3.50, '9': 2.40, '10': 3.50 },
  '10': { '1A': 11.00, '2': 9.50, '3': 8.00, '4': 7.25, '5': 6.50, '6': 5.75, '7': 5.00, '8': 4.25, '9': 3.50, '10': 2.40 }
};

// Ticket types
const TICKET_TYPES = [
  {
    id: 'one-way',
    name: 'One Way',
    multiplier: 1,
    description: 'Valid for a single trip',
    validity: '2 hours from activation'
  },
  {
    id: 'round-trip',
    name: 'Round Trip',
    multiplier: 2,
    description: 'Valid for one round trip',
    validity: '24 hours from activation'
  },
  {
    id: 'one-way-half',
    name: 'One Way Reduced',
    multiplier: 0.5,
    description: 'Students, Seniors (65+), Persons with Disabilities',
    validity: '2 hours from activation'
  },
  {
    id: 'round-trip-half',
    name: 'Round Trip Reduced',
    multiplier: 1,
    description: 'Students, Seniors (65+), Persons with Disabilities',
    validity: '24 hours from activation'
  },
  {
    id: '10-ride',
    name: '10-Ride Pass',
    multiplier: 9,
    description: 'Save with 10 rides at the price of 9',
    validity: '90 days from purchase'
  },
  {
    id: 'monthly',
    name: 'Monthly Pass',
    multiplier: 'monthly',
    description: 'Unlimited rides for calendar month',
    validity: 'Calendar month'
  }
];

// Monthly pass prices by zone
const MONTHLY_PRICES = {
  '1A': 90.00,
  '2': 110.00,
  '3': 140.00,
  '4': 170.00,
  '5': 200.00,
  '6': 230.00,
  '7': 261.00,
  '8': 291.00,
  '9': 326.00,
  '10': 388.00
};

// Sample alerts
const SAMPLE_ALERTS = [
  {
    id: 'alert-001',
    line: 'Providence/Stoughton Line',
    lineId: 'providence',
    severity: 'delay',
    title: '15-minute delays',
    description: 'Signal problems at Attleboro are causing delays systemwide on the Providence/Stoughton Line.',
    affectedStations: ['Attleboro', 'South Attleboro', 'Providence', 'Mansfield'],
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString() // 30 min ago
  },
  {
    id: 'alert-002',
    line: 'Worcester Line',
    lineId: 'worcester',
    severity: 'info',
    title: 'Track work this weekend',
    description: 'Buses will replace trains between Framingham and Worcester on Saturday and Sunday.',
    affectedStations: ['Framingham', 'Ashland', 'Southborough', 'Westborough', 'Worcester'],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
  }
];

// Helper functions
function getStationByName(name) {
  return STATIONS.find(s => s.name === name);
}

function getFare(originZone, destZone) {
  return ZONE_FARES[originZone]?.[destZone] || 0;
}

function calculateTicketPrice(originZone, destZone, ticketTypeId) {
  const baseFare = getFare(originZone, destZone);
  const ticketType = TICKET_TYPES.find(t => t.id === ticketTypeId);

  if (!ticketType) return baseFare;

  if (ticketType.multiplier === 'monthly') {
    // For monthly pass, use the higher zone
    const maxZone = [originZone, destZone].sort().pop();
    return MONTHLY_PRICES[maxZone] || 0;
  }

  return (baseFare * ticketType.multiplier).toFixed(2);
}

function getLineById(lineId) {
  return LINES.find(l => l.id === lineId);
}

function getStationsByLine(lineId) {
  return STATIONS.filter(s => s.lines.includes(lineId));
}

function formatPrice(price) {
  return '$' + parseFloat(price).toFixed(2);
}

function formatTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return date.toLocaleDateString();
}

function getZoneExplanation() {
  return `
    <p><strong>How zones work:</strong></p>
    <p>Commuter Rail fares are based on how many zones you travel through. Zone 1A includes downtown Boston stations (South Station, North Station, Back Bay). The further you travel, the higher the zone number and fare.</p>
    <p>Your fare is calculated based on the zones of your origin and destination stations.</p>
  `;
}
