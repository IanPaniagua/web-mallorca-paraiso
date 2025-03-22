// API Base URL
export const API_BASE_URL = 'http://localhost:8000';

// API Endpoints
export const API_ENDPOINTS = {
  // Beaches endpoints
  beaches: {
    getAll: `${API_BASE_URL}/api/v1/beaches/`,
    getById: (id: string) => `${API_BASE_URL}/api/v1/beaches/${id}/`,
    getByRegion: (region: string) => `${API_BASE_URL}/api/v1/beaches/region/${region}/`,
  },
  // Add other endpoint groups here as needed (activities, culture, etc.)
} as const;

// API Configuration
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
} as const; 