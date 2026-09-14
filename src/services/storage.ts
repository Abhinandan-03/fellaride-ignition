import type { Community, Ride, Route, User } from '../models/types';
import { POST_ACTIVATION_STATE } from '../store/mockData';

const STORAGE_KEYS = {
  USERS: 'fellaride_v2_users',
  SESSION: 'fellaride_v2_session',
  COMMUNITIES: 'fellaride_v2_communities',
  ROUTES: 'fellaride_v2_routes',
  RIDES: 'fellaride_v2_rides',
};

// Seed Communities
const SEED_COMMUNITIES: Community[] = [
  {
    id: 'community-northside',
    name: 'Northside Community',
    ownerId: 'system',
    description: 'Active community ride network with recurring Northside — Central District travel.',
    location: 'Northside District',
    corridor: 'Northside · Central District',
    category: 'residential',
    potentialScore: 91,
    potentialMembers: 12400,
    potentialDrivers: 43,
    potentialPassengers: 128,
    potentialConnectors: 7,
    isActivated: false,
    state: {
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
        trend: 'up',
        previousScore: 18,
      },
    },
  },
  {
    id: 'community-eastview',
    name: 'Eastview Community',
    ownerId: 'system',
    description: 'Growing suburban community connecting Eastview to metro tech hubs.',
    location: 'Eastview Metro',
    corridor: 'Eastview · Central District',
    category: 'colleges',
    potentialScore: 78,
    potentialMembers: 8200,
    potentialDrivers: 28,
    potentialPassengers: 94,
    potentialConnectors: 4,
    isActivated: false,
    state: {
      activeMembers: 17,
      drivers: 6,
      passengers: 11,
      rides: 8,
      health: {
        score: 64,
        activeParticipation: 62,
        driverSupply: 58,
        rideActivity: 60,
        repeatUsage: 54,
        trend: 'up',
        previousScore: 50,
      },
    },
  },
  {
    id: 'community-lakeside',
    name: 'Lakeside Community',
    ownerId: 'system',
    description: 'Emerging neighborhood corridor around Lakeside waterfront.',
    location: 'Lakeside Marina',
    corridor: 'Lakeside · Central District',
    category: 'residential',
    potentialScore: 68,
    potentialMembers: 5400,
    potentialDrivers: 19,
    potentialPassengers: 62,
    potentialConnectors: 3,
    isActivated: false,
    state: {
      activeMembers: 11,
      drivers: 4,
      passengers: 7,
      rides: 5,
      health: {
        score: 52,
        activeParticipation: 48,
        driverSupply: 46,
        rideActivity: 44,
        repeatUsage: 40,
        trend: 'stable',
        previousScore: 52,
      },
    },
  },
  {
    id: 'community-downtown',
    name: 'Downtown Metro Hub',
    ownerId: 'system',
    description: 'Dense metro commuter network for financial, legal, and tech professionals.',
    location: 'Downtown Core',
    corridor: 'Financial & Tech District',
    category: 'enterprise',
    potentialScore: 94,
    potentialMembers: 18900,
    potentialDrivers: 62,
    potentialPassengers: 240,
    potentialConnectors: 11,
    isActivated: true,
    state: POST_ACTIVATION_STATE,
  },
];

// Seed Routes (Demonstrating multiple routes from same start point!)
const SEED_ROUTES: Route[] = [
  // Routes from Northside Hub
  {
    id: 'route-ns-central',
    communityId: 'community-northside',
    name: 'Northside Hub → Central District',
    startPoint: 'Northside Hub',
    destination: 'Central District',
    typicalDuration: '24 mins',
    estimatedMiles: 11.2,
  },
  {
    id: 'route-ns-tech',
    communityId: 'community-northside',
    name: 'Northside Hub → Eastside Tech Park',
    startPoint: 'Northside Hub',
    destination: 'Eastside Tech Park',
    typicalDuration: '32 mins',
    estimatedMiles: 15.8,
  },
  {
    id: 'route-ns-university',
    communityId: 'community-northside',
    name: 'Northside Hub → Metro University',
    startPoint: 'Northside Hub',
    destination: 'Metro University',
    typicalDuration: '18 mins',
    estimatedMiles: 7.4,
  },

  // Routes from Eastview
  {
    id: 'route-ev-central',
    communityId: 'community-eastview',
    name: 'Eastview Civic Center → Central District',
    startPoint: 'Eastview Civic Center',
    destination: 'Central District',
    typicalDuration: '28 mins',
    estimatedMiles: 13.5,
  },
  {
    id: 'route-ev-tech',
    communityId: 'community-eastview',
    name: 'Eastview Civic Center → Eastside Tech Park',
    startPoint: 'Eastview Civic Center',
    destination: 'Eastside Tech Park',
    typicalDuration: '20 mins',
    estimatedMiles: 8.9,
  },

  // Routes from Lakeside
  {
    id: 'route-ls-central',
    communityId: 'community-lakeside',
    name: 'Lakeside Marina → Central District',
    startPoint: 'Lakeside Marina',
    destination: 'Central District',
    typicalDuration: '35 mins',
    estimatedMiles: 16.4,
  },
];

// Seed Rides
const SEED_RIDES: Ride[] = [
  {
    id: 'ride-1',
    communityId: 'community-northside',
    routeId: 'route-ns-central',
    driverId: 'connector-alex-morgan',
    driverName: 'Alex Morgan',
    driverRole: 'Connector',
    vehicle: 'Toyota RAV4 (Navy NS-44)',
    vehiclePlate: 'NS-44',
    origin: 'Northside Hub',
    destination: 'Central District',
    departureTime: '6:00 PM',
    availableSeats: 2,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-1', 'user-peer-2'],
    pricePerSeat: 80,
    matchScore: 96,
  },
  {
    id: 'ride-2',
    communityId: 'community-northside',
    routeId: 'route-ns-central',
    driverId: 'driver-sam-carter',
    driverName: 'Sam Carter',
    driverRole: 'Driver',
    vehicle: 'Honda Civic (Silver NS-12)',
    vehiclePlate: 'NS-12',
    origin: 'Northside Hub',
    destination: 'Central District',
    departureTime: '5:30 PM',
    availableSeats: 2,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-3', 'user-peer-4'],
    pricePerSeat: 80,
    matchScore: 91,
  },
  {
    id: 'ride-3',
    communityId: 'community-northside',
    routeId: 'route-ns-tech',
    driverId: 'driver-priya-shah',
    driverName: 'Priya Shah',
    driverRole: 'Driver',
    vehicle: 'Hyundai Creta (White NS-88)',
    vehiclePlate: 'NS-88',
    origin: 'Northside Hub',
    destination: 'Eastside Tech Park',
    departureTime: '6:15 PM',
    availableSeats: 1,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-5', 'user-peer-6', 'user-peer-7'],
    pricePerSeat: 70,
    matchScore: 89,
  },
  {
    id: 'ride-ev-1',
    communityId: 'community-eastview',
    routeId: 'route-ev-central',
    driverId: 'driver-david-kim',
    driverName: 'David Kim',
    driverRole: 'Driver',
    vehicle: 'Subaru Outback (Green EV-09)',
    vehiclePlate: 'EV-09',
    origin: 'Eastview Civic Center',
    destination: 'Central District',
    departureTime: '7:45 AM',
    availableSeats: 3,
    totalSeats: 4,
    status: 'available',
    passengerIds: ['user-peer-8'],
    pricePerSeat: 75,
    matchScore: 93,
  },
  {
    id: 'ride-ls-1',
    communityId: 'community-lakeside',
    routeId: 'route-ls-central',
    driverId: 'driver-elena-r',
    driverName: 'Elena Rostova',
    driverRole: 'Driver',
    vehicle: 'Tesla Model 3 (Midnight LS-01)',
    vehiclePlate: 'LS-01',
    origin: 'Lakeside Marina',
    destination: 'Central District',
    departureTime: '8:15 AM',
    availableSeats: 3,
    totalSeats: 4,
    status: 'available',
    passengerIds: [],
    pricePerSeat: 85,
    matchScore: 88,
  },
];

// Seed Users for Demo Quick Logins
const SEED_USERS: User[] = [
  {
    id: 'user-demo-alex',
    name: 'Alex Rivera',
    email: 'alex.rivera@fellaride.io',
    role: 'Both',
    plan: 'Free',
    communityIds: ['community-northside', 'community-eastview'],
    selectedCommunityId: 'community-northside',
    typicalCorridor: 'Northside · Central District',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'user-demo-maya',
    name: 'Maya Lin',
    email: 'maya.lin@commute.org',
    role: 'Find',
    plan: 'Free',
    communityIds: ['community-northside'],
    selectedCommunityId: 'community-northside',
    typicalCorridor: 'Northside Hub → Central District',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'user-demo-jordan',
    name: 'Jordan Hayes',
    email: 'jordan.hayes@mobility.net',
    role: 'Offer',
    plan: 'Starter',
    communityIds: ['community-northside'],
    selectedCommunityId: 'community-northside',
    typicalCorridor: 'Northside Hub → Eastside Tech Park',
    createdAt: new Date().toISOString(),
  },
];

class StorageService {
  private isBrowser(): boolean {
    return (
      (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') ||
      (typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined')
    );
  }

  constructor() {
    this.initializeSeedData();
  }

  public initializeSeedData(): void {
    if (!this.isBrowser()) return;

    // Seed Communities
    if (!localStorage.getItem(STORAGE_KEYS.COMMUNITIES)) {
      localStorage.setItem(STORAGE_KEYS.COMMUNITIES, JSON.stringify(SEED_COMMUNITIES));
    }

    // Seed Routes
    if (!localStorage.getItem(STORAGE_KEYS.ROUTES)) {
      localStorage.setItem(STORAGE_KEYS.ROUTES, JSON.stringify(SEED_ROUTES));
    }

    // Seed Rides
    if (!localStorage.getItem(STORAGE_KEYS.RIDES)) {
      localStorage.setItem(STORAGE_KEYS.RIDES, JSON.stringify(SEED_RIDES));
    }

    // Seed Users
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(SEED_USERS));
    }
  }

  // User Management
  getUsers(): User[] {
    if (!this.isBrowser()) return SEED_USERS;
    const data = localStorage.getItem(STORAGE_KEYS.USERS);
    return data ? JSON.parse(data) : SEED_USERS;
  }

  saveUser(user: User): void {
    if (!this.isBrowser()) return;
    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === user.id);
    if (index >= 0) {
      users[index] = user;
    } else {
      users.push(user);
    }
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }

  findUserById(id: string): User | null {
    const users = this.getUsers();
    return users.find((u) => u.id === id) || null;
  }

  findUserByEmail(email: string): User | null {
    const users = this.getUsers();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim()) || null;
  }

  // Session Management
  getCurrentSessionUserId(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(STORAGE_KEYS.SESSION);
  }

  setCurrentSessionUserId(userId: string): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(STORAGE_KEYS.SESSION, userId);
  }

  clearSession(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  }

  // Communities Management
  getCommunities(): Community[] {
    if (!this.isBrowser()) return SEED_COMMUNITIES;
    const data = localStorage.getItem(STORAGE_KEYS.COMMUNITIES);
    return data ? JSON.parse(data) : SEED_COMMUNITIES;
  }

  getCommunityById(id: string): Community | null {
    const communities = this.getCommunities();
    return communities.find((c) => c.id === id) || null;
  }

  saveCommunity(community: Community): void {
    if (!this.isBrowser()) return;
    const communities = this.getCommunities();
    const index = communities.findIndex((c) => c.id === community.id);
    if (index >= 0) {
      communities[index] = community;
    } else {
      communities.unshift(community);
    }
    localStorage.setItem(STORAGE_KEYS.COMMUNITIES, JSON.stringify(communities));
  }

  // Routes Management
  getRoutes(): Route[] {
    if (!this.isBrowser()) return SEED_ROUTES;
    const data = localStorage.getItem(STORAGE_KEYS.ROUTES);
    return data ? JSON.parse(data) : SEED_ROUTES;
  }

  getRoutesByCommunity(communityId: string): Route[] {
    const routes = this.getRoutes();
    return routes.filter((r) => r.communityId === communityId);
  }

  saveRoute(route: Route): void {
    if (!this.isBrowser()) return;
    const routes = this.getRoutes();
    const index = routes.findIndex((r) => r.id === route.id);
    if (index >= 0) {
      routes[index] = route;
    } else {
      routes.push(route);
    }
    localStorage.setItem(STORAGE_KEYS.ROUTES, JSON.stringify(routes));
  }

  // Rides Management
  getRides(): Ride[] {
    if (!this.isBrowser()) return SEED_RIDES;
    const data = localStorage.getItem(STORAGE_KEYS.RIDES);
    return data ? JSON.parse(data) : SEED_RIDES;
  }

  getRidesByCommunity(communityId: string): Ride[] {
    const rides = this.getRides();
    return rides.filter((r) => r.communityId === communityId);
  }

  saveRide(ride: Ride): void {
    if (!this.isBrowser()) return;
    const rides = this.getRides();
    const index = rides.findIndex((r) => r.id === ride.id);
    if (index >= 0) {
      rides[index] = ride;
    } else {
      rides.unshift(ride);
    }
    localStorage.setItem(STORAGE_KEYS.RIDES, JSON.stringify(rides));
  }

  updateRide(ride: Ride): void {
    this.saveRide(ride);
  }
}

export const storage = new StorageService();
