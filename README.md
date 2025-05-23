# Weather Forecast Web Application

## Overview
This project is a Weather Forecast Web Application built using Next.js and TypeScript. It allows users to view a list of cities, search for specific locations, and view detailed weather information for each city.

## Features
- Display cities in a table format with infinite scroll.
- Search functionality with autocomplete suggestions.
- Filter and sort capabilities for each column in the city table.
- Clickable city names that navigate to a detailed weather page.
- Weather information includes current conditions and forecasts.
- Responsive design with dynamic backgrounds based on weather conditions.
- Error handling for API requests and invalid queries.

## Technologies Used
- Next.js
- TypeScript
- Tailwind CSS (optional)
- OpenWeatherMap API for weather data
- Public API for city data

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd weather-forecast-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
   ```
   NEXT_PUBLIC_WEATHER_API_KEY=<your_api_key>
   ```

## Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment
This application can be deployed using platforms like Vercel, Netlify, or any other hosting provider that supports Next.js applications.

## Usage
- Use the search bar to find cities.
- Click on a city name to view detailed weather information.
- The weather page displays current weather, forecasts, and additional details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- OpenWeatherMap for providing weather data.
- Public APIs for city data.#   w e a t h e r - f o r e c a s e - a p p  
 