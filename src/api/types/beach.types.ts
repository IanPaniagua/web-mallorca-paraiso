interface Zone {
  id: number;
  name: string;
}

interface Locality {
  id: number;
  name: string;
  type: string;
  zone: Zone;
}

export interface Beach {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  type: string;
  services: string[];
  access: string;
  featured: boolean;
  latitude: number;
  longitude: number;
  locality_id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  locality: Locality;
  distance: number | null;
}

export interface BeachFilters {
  search?: string;
  region?: string;
  town?: string;
  type?: string;
} 