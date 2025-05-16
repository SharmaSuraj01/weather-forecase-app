export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
        pressure: number;
    };
    weather: {
        description: string;
    }[];
    wind: {
        speed: number;
    };
    name: string; // City name
}

export interface WeatherForecast {
    dt: number; // Timestamp
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
}