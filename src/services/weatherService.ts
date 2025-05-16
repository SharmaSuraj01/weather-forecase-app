import axios from 'axios';
import { WeatherData, WeatherForecast } from '../types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

if (!API_KEY) {
    console.error('API Key is missing!');
}
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city: string): Promise<WeatherData> => {
    try {
        if (!city || city.trim() === '') {
            throw new Error('City name is required');
        }

        const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
        console.log('API URL:', url); // Debug the API URL

        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('API Error:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
        throw new Error('Could not fetch current weather data');
    }
};

export const fetchWeatherForecast = async (city: string): Promise<WeatherForecast[]> => {
    try {
        const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        console.log('API URL:', url); // Debug the API URL

        const response = await axios.get(url);
        return response.data.list; // Forecast data is in the `list` field
    } catch (error: any) {
        if (error.response) {
            console.error('API Error:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
        throw new Error('Could not fetch weather forecast data');
    }
};