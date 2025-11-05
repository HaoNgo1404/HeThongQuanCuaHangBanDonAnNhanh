import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.fastfoodrestaurant.com', // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to handle requests
client.interceptors.request.use(
  (config) => {
    // You can add authorization tokens or other headers here
    const token = localStorage.getItem('token'); // Example: get token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor to handle responses
client.interceptors.response.use(
  (response) => {
    return response.data; // Return only the data from the response
  },
  (error) => {
    // Handle errors globally
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default client;