// filepath: src/pages/city/[city].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import WeatherCard from '../../components/WeatherCard';
import WeatherForecastCard from '../../components/WeatherForecastCard';
import { fetchCurrentWeather, fetchWeatherForecast } from '../../services/weatherService';
import { WeatherData, WeatherForecast } from '../../types/weather';

const CityWeather = () => {
    const router = useRouter();
    const { city } = router.query; // Get the city name from the URL

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [forecastData, setForecastData] = useState<WeatherForecast[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (city) {
            const loadWeather = async () => {
                try {
                    const currentWeather = await fetchCurrentWeather(city as string);
                    const forecast = await fetchWeatherForecast(city as string);
                    setWeatherData(currentWeather);
                    setForecastData(forecast);
                } catch (err) {
                    setError('Failed to fetch weather data');
                } finally {
                    setLoading(false);
                }
            };

            loadWeather();
        }
    }, [city]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <WeatherCard weatherData={weatherData} cityName={city as string} />
            <WeatherForecastCard forecastData={forecastData} />
        </div>
    );
};

export default CityWeather;