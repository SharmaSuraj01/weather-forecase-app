import React from 'react';
import { WeatherForecast } from '../types/weather';

interface WeatherForecastCardProps {
    forecastData: WeatherForecast[];
}

const WeatherForecastCard: React.FC<WeatherForecastCardProps> = ({ forecastData }) => {
    return (
        <div className="forecast-card">
            <h3>5-Day Forecast</h3>
            <div className="forecast-list">
                {forecastData.map((forecast) => (
    <div key={forecast.dt} className="forecast-item">
        <p>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
        <p>Temperature: {forecast.main.temp}°C</p>
        <p>Weather: {forecast.weather[0].description}</p>
    </div>
))}
            </div>
        </div>
    );
};

export default WeatherForecastCard;