import type { Community, Connector, DemandOpportunity, CurrentUser, Ride } from '../models/types';

export const CANONICAL_USER: CurrentUser = {
  id: 'user-sarah-chen',
  name: 'Sarah Chen',
  role: 'Both',
  communityId: 'community-northside',
  typicalCorridor: 'Northside → Central District'
};

export const CANONICAL_COMMUNITY: Community = {
  id: 'community-northside',
  name: 'Northside Community',
  potentialScore: 91,
  potentialMembers: 12400,
  potentialDrivers: 43,
  potentialPassengers: 128,
  potentialConnectors: 7,
  isActivated: false,
  state: {
    activeMembers: 0,
    drivers: 0,
    passengers: 0,
    rides: 0,
    health: {
      score: 18,
      activeParticipation: 0,
      driverSupply: 0,
      rideActivity: 0,
      repeatUsage: 0,
      trend: 'stable',
      previousScore: 18
    }
  }
};

export const POST_ACTIVATION_STATE = {
  activeMembers: 32,
  drivers: 9,
  passengers: 18,
  rides: 14,
  health: {
    score: 82,
    activeParticipation: 88,
    driverSupply: 84,
    rideActivity: 79,
    repeatUsage: 78,
    trend: 'up' as const,
    previousScore: 18
  }
};

export const CANONICAL_CONNECTOR: Connector = {
  id: 'connector-alex-morgan',
  name: 'Alex Morgan',
  role: 'Connector',
  intelligence: {
    score: 96,
    reach: 24,
    roleLikelihood: {
      driver: 91,
      passenger: 12,
      connector: 96,
      earlyAdopter: 88
    },
    scoreBreakdown: {
      communityInfluence: 94,
      networkReach: 91,
      coordinationActivity: 96,
      commuteRelevance: 88
    }
  }
};

export const CANONICAL_DEMAND: DemandOpportunity = {
  id: 'demand-sports-fest',
  communityId: 'community-northside',
  eventName: 'Northside Sports Festival',
  predictedPassengers: 37,
  availableDrivers: 6,
  seatShortage: 25,
  confidence: 87
};

export const INITIAL_RIDES: Ride[] = [
  {
    id: 'ride-1',
    communityId: 'community-northside',
    driverId: 'connector-alex-morgan',
    driverName: 'Alex Morgan',
    driverRole: 'Connector',
    vehicle: 'Toyota RAV4',
    vehiclePlate: 'Navy · NS-44',
    origin: 'Northside Community',
    destination: 'Central District',
    departureTime: '6:00 PM',
    availableSeats: 2,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-1', 'user-peer-2'],
    pricePerSeat: 80,
    corridorId: 'corridor-rt44',
    matchScore: 96
  },
  {
    id: 'ride-2',
    communityId: 'community-northside',
    driverId: 'driver-sam-carter',
    driverName: 'Sam Carter',
    driverRole: 'Driver',
    vehicle: 'Honda Civic',
    vehiclePlate: 'Silver · NS-12',
    origin: 'Northside Community',
    destination: 'Central District',
    departureTime: '5:30 PM',
    availableSeats: 2,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-3', 'user-peer-4'],
    pricePerSeat: 80,
    corridorId: 'corridor-rt44',
    matchScore: 91
  },
  {
    id: 'ride-3',
    communityId: 'community-northside',
    driverId: 'driver-priya-shah',
    driverName: 'Priya Shah',
    driverRole: 'Driver',
    vehicle: 'Hyundai Creta',
    vehiclePlate: 'White · NS-88',
    origin: 'Northside Community',
    destination: 'Central District',
    departureTime: '6:15 PM',
    availableSeats: 1,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-5', 'user-peer-6', 'user-peer-7'],
    pricePerSeat: 70,
    corridorId: 'corridor-rt44',
    matchScore: 89
  }
];

export const BUTTERFLY_STAGES = [
  { step: 0, stage: 1, label: 'Wave 0 · 1 Connector (0h)', tabTime: 'Wave 0 · 0h', tabSubtitle: 'Connector', ratio: '1 → 1', count: 1, members: 1, drivers: 1, passengers: 0, rides: 1, referrals: 0, repeatRiders: 0, co2: 4 },
  { step: 1, stage: 3, label: 'Wave 1 · 3 Invites (4h)', tabTime: 'Wave 1 · 4h', tabSubtitle: 'First invites', ratio: '1 → 3', count: 3, members: 3, drivers: 1, passengers: 2, rides: 2, referrals: 2, repeatRiders: 1, co2: 12 },
  { step: 2, stage: 8, label: 'Wave 2 · 8 Members (11h)', tabTime: 'Wave 2 · 11h', tabSubtitle: 'Shared routes', ratio: '1 → 8', count: 8, members: 8, drivers: 3, passengers: 5, rides: 4, referrals: 5, repeatRiders: 4, co2: 32 },
  { step: 3, stage: 17, label: 'Wave 3 · 17 Members (20h)', tabTime: 'Wave 3 · 20h', tabSubtitle: 'Route network', ratio: '1 → 17', count: 17, members: 17, drivers: 5, passengers: 12, rides: 8, referrals: 11, repeatRiders: 9, co2: 72 },
  { step: 4, stage: 32, label: 'Wave 4 · 32 Members (36h)', tabTime: 'Wave 4 · 36h', tabSubtitle: 'Self-sustaining', ratio: '1 → 32', count: 32, members: 32, drivers: 9, passengers: 18, rides: 14, referrals: 21, repeatRiders: 18, co2: 126 }
];
