import axios from 'axios';

/**
 * Centralized API client.
 * Phase 1: configured and exported for future use.
 * Phase 2+: endpoints for GitHub, projects, case studies, etc. will be added here.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach auth tokens in future phases.
apiClient.interceptors.request.use((config) => {
  return config;
});

// Response interceptor — centralized error handling in future phases.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);