    import React from 'react';
    import { WeatherData } from '../types/weather';

    interface WeatherCardProps {
        weatherData: WeatherData | null;
        cityName: string;
    }

    const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, cityName }) => {
        if (!weatherData) {
            return <div>Loading...</div>;
        }

        // Safe access
        const main = weatherData.main;
        const weather = weatherData.weather && weatherData.weather.length > 0 ? weatherData.weather[0] : null;
        const wind = weatherData.wind;

        const weatherType = weather ? weather.main.toLowerCase() : 'default';

        return (
            <div className={`weather-card weather-bg-${weatherType}`}>
                <h2>Weather in {cityName}</h2>
                <div className="current-weather" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    {weather?.icon ? (
    <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt={weather.description || 'weather icon'}
        style={{ width: 80, height: 80 }}
    />
) : (
    <p>No icon available</p>
)}
                    <div>
                        <h3>Current Weather</h3>
                        <p>Temperature: {main?.temp}°C</p>
                        <p>Weather: {weather?.description}</p>
                        <p>Humidity: {main?.humidity}%</p>
                        <p>Wind Speed: {wind?.speed} m/s</p>
                        <p>Pressure: {main?.pressure} hPa</p>
                    </div>
                </div>
            </div>
        );
    };

    export default WeatherCard;