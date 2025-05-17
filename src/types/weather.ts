export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
        pressure: number;
    };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
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