export interface Beach {
  id: string;
  name: string;
  image: string;
  description: string;
  region: string;
  town: string;
  type: string;
  services: string[];
  access: string;
  featured: boolean;
}

export interface BeachFilters {
  search?: string;
  region?: string;
  town?: string;
  type?: string;
} 