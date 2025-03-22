import type { Beach } from '../types/beach.types';

const BACKEND_URL = import.meta.env.PUBLIC_BACKEND_URL;

export async function getAllBeaches(): Promise<Beach[]> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/beaches`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching beaches:', error);
    throw error;
  }
}

export async function getBeachById(id: string): Promise<Beach> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/beaches/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching beach with id ${id}:`, error);
    throw error;
  }
}

export async function getBeachesByRegion(region: string): Promise<Beach[]> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/beaches/region/${region}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching beaches for region ${region}:`, error);
    throw error;
  }
} 