import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Required for Django to receive/set CSRF cookies
});

// Interceptor to handle CSRF tokens from cookies (Mechanical necessity for Django POST/PUT/DELETE)
api.interceptors.request.use((config) => {
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
  
  if (csrfToken && config.method !== 'get') {
    config.headers['X-CSRFToken'] = csrfToken;
  }

  return config;
});

// Response Interceptor for basic error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Standard error logging without the auth redirects
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;