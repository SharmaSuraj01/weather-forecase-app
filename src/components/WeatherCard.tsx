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

    const { main, weather, wind } = weatherData;
    const weatherType = weather[0].main.toLowerCase(); // e.g. "clear", "clouds", "rain", etc.

    return (
        <div className={`weather-card weather-bg-${weatherType}`}>
            <h2>Weather in {cityName}</h2>
            <div className="current-weather" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                    alt={weather[0].description}
                    style={{ width: 80, height: 80 }}
                />
                <div>
                    <h3>Current Weather</h3>
                    <p>Temperature: {main.temp}°C</p>
                    <p>Weather: {weather[0].description}</p>
                    <p>Humidity: {main.humidity}%</p>
                    <p>Wind Speed: {wind.speed} m/s</p>
                    <p>Pressure: {main.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;