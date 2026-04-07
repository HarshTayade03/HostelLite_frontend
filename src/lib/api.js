import axios from 'axios';

// Create an Axios instance configured to point to our Node.js Backend API
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response Interceptor: Disabled automatic redirect for better debugging/CORS handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // We let the application handle the error instead of force-redirecting the entire page
    return Promise.reject(error);
  }
);

export default api;
