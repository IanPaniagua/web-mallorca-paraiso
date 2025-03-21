export interface MallorcaLocation {
  id: string;
  name: string;
  zone: MallorcaZone;
  type: 'city' | 'town' | 'port' | 'coast';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export enum MallorcaZone {
  PALMA = 'palma',
  NORTH = 'north',
  SOUTH = 'south',
  EAST = 'east',
  WEST = 'west',
  INLAND = 'inland',
  TRAMUNTANA = 'tramuntana'
}

export const MALLORCA_ZONES = {
  [MallorcaZone.PALMA]: {
    id: MallorcaZone.PALMA,
    name: 'Palma',
    description: 'Capital and metropolitan area',
  },
  [MallorcaZone.NORTH]: {
    id: MallorcaZone.NORTH,
    name: 'North',
    description: 'Northern area of the island',
  },
  [MallorcaZone.SOUTH]: {
    id: MallorcaZone.SOUTH,
    name: 'South',
    description: 'Southern area of the island',
  },
  [MallorcaZone.EAST]: {
    id: MallorcaZone.EAST,
    name: 'East',
    description: 'Eastern area of the island',
  },
  [MallorcaZone.WEST]: {
    id: MallorcaZone.WEST,
    name: 'West',
    description: 'Western area of the island',
  },
  [MallorcaZone.INLAND]: {
    id: MallorcaZone.INLAND,
    name: 'Inland',
    description: 'Interior area of the island',
  },
  [MallorcaZone.TRAMUNTANA]: {
    id: MallorcaZone.TRAMUNTANA,
    name: 'Tramuntana',
    description: 'Tramuntana Mountain Range',
  },
};

export const MALLORCA_LOCATIONS: MallorcaLocation[] = [
  // Palma
  {
    id: 'palma',
    name: 'Palma de Mallorca',
    zone: MallorcaZone.PALMA,
    type: 'city',
  },
  {
    id: 'cala-major',
    name: 'Cala Major',
    zone: MallorcaZone.PALMA,
    type: 'coast',
  },

  // North
  {
    id: 'pollensa',
    name: 'Pollença',
    zone: MallorcaZone.NORTH,
    type: 'town',
  },
  {
    id: 'alcudia',
    name: 'Alcúdia',
    zone: MallorcaZone.NORTH,
    type: 'town',
  },
  {
    id: 'puerto-pollensa',
    name: 'Port de Pollença',
    zone: MallorcaZone.NORTH,
    type: 'port',
  },

  // East
  {
    id: 'cala-dor',
    name: "Cala d'Or",
    zone: MallorcaZone.EAST,
    type: 'coast',
  },
  {
    id: 'porto-cristo',
    name: 'Porto Cristo',
    zone: MallorcaZone.EAST,
    type: 'port',
  },
  {
    id: 'cala-millor',
    name: 'Cala Millor',
    zone: MallorcaZone.EAST,
    type: 'coast',
  },

  // Inland
  {
    id: 'inca',
    name: 'Inca',
    zone: MallorcaZone.INLAND,
    type: 'city',
  },
  {
    id: 'manacor',
    name: 'Manacor',
    zone: MallorcaZone.INLAND,
    type: 'city',
  },

  // Tramuntana
  {
    id: 'soller',
    name: 'Sóller',
    zone: MallorcaZone.TRAMUNTANA,
    type: 'town',
  },
  {
    id: 'valldemossa',
    name: 'Valldemossa',
    zone: MallorcaZone.TRAMUNTANA,
    type: 'town',
  },
  {
    id: 'deia',
    name: 'Deià',
    zone: MallorcaZone.TRAMUNTANA,
    type: 'town',
  },
];

// Helper functions
export function getLocationsByZone(zone: MallorcaZone): MallorcaLocation[] {
  return MALLORCA_LOCATIONS.filter(location => location.zone === zone);
}

export function getLocationById(id: string): MallorcaLocation | undefined {
  return MALLORCA_LOCATIONS.find(location => location.id === id);
}

export function getZoneById(id: MallorcaZone) {
  return MALLORCA_ZONES[id];
} 