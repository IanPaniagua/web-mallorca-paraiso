import { API_CONFIG } from '../config/api';

/**
 * Generic function to fetch data from the backend
 */
export async function fetchFromBackend<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from backend:', error);
    throw error;
  }
}

/**
 * Generic function to post data to the backend
 */
export async function postToBackend<T>(url: string, data: unknown): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: API_CONFIG.headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting to backend:', error);
    throw error;
  }
} 