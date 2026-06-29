import axios from 'axios';

/**
 * Public HTTP client (no auth). Base URL comes from VITE_API_BASE_URL.
 *
 * NOTE: this landing page currently serves data from local mocks (see
 * src/api/menus.ts), so this instance is wired but not yet called. When a real
 * backend exists, swap the mock functions in src/api/* to use `publicApi`.
 */
export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
