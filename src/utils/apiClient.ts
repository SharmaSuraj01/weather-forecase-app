import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 10000,
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        const { response } = error;
        if (response && response.status === 404) {
            console.error('Resource not found:', response);
        } else {
            console.error('API request error:', error);
        }
        return Promise.reject(error);
    }
);

export const fetchCities = async (url: string) => {
    try {
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch cities');
    }
};

export const fetchWeather = async (city: string, apiKey: string) => {
    try {
        const response = await apiClient.get(`weather?q=${city}&appid=${apiKey}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};

export const fetchForecast = async (city: string, apiKey: string) => {
    try {
        const response = await apiClient.get(`forecast?q=${city}&appid=${apiKey}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch forecast data');
    }
};