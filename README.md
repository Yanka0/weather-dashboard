# Weather Application

A React-based weather application that provides current weather data and a 5-day forecast for any city. The app uses the OpenWeatherMap API to fetch weather data based on user input.

## Features

- **Current Weather**: Displays the current temperature, humidity, wind speed, and weather conditions for a selected city.
- **5-Day Forecast**: Shows a detailed forecast with temperatures for the next five days, organized by day.
- **Favorite Cities**: Users can save and remove their favorite cities for quick access. Favorite cities are stored in Browser Local Storage so that the list of favorite cities persists when the page is refreshed.
- **Responsive Design**: The app is designed to work seamlessly across different devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Redux**: State management library for managing application state.
- **Tailwind CSS**: Utility-first CSS framework for styling the components.
- **OpenWeatherMap API**: API to fetch weather data.
- **Jest**: Testing framework for writing tests to ensure code quality and reliability.

## Points to improve (outside scope)

- **Lat and lon cache**: Save lat and lon in Redux for favorite cities to decrease number of requests.
- **Localization**: Localization in terms of language change as well as Celsius/Fahrenheit temperature scale.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

 ```
 git clone https://github.com/Yanka0/weather-dashboard.git
 ```
2. Navigate into the project directory:

 ```
 cd weather-app
 ```
3. Install the dependencies:

 ```
 npm install
 ```
4. !!Important!! Set API key - edit .env file in the root of the project:

 ```
 VITE_WEATHER_API_KEY=your_api_key_here
 VITE_WEATHER_API_BASE_URL=http://api.openweathermap.org
 ```
5. Start the development server:

 ```
 npm run dev
 ```
6. Open your browser and visit http://localhost:3000 to view the app.

## Usage
1. Enter the name of a city in the search bar to retrieve the current weather and 5-Day forecast.
2. Click on the "Save" button to add the city to your favorites for easy access later.
3. Use the "Delete" button to remove a city from your favorites.
4. Click on the "My favorites" to view and open forecasts for your favorite cities. 

## API Reference
The application interacts with the OpenWeatherMap API. You can find the API documentation here: [OpenWeatherMap API Documentation](https://openweathermap.org/api/geocoding-api).
