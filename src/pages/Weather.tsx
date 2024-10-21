import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherFiveDays from "src/components/WeatherFiveDays";
import WeatherToday from "src/components/WeatherToday";

interface Props {}

const Weather: React.FC<Props> = () => {
  const { city } = useParams<{ city: string }>();
  const [weatherDataToday, setWeatherDataToday] = useState<any>(null);
  const [weatherDataFiveDays, setWeatherDataFiveDays] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchWeather = async () => {
    try {
      // Fetch geolocation data for the specified city
      const geoResponse = await fetch(
      `${API_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoResponse.json();
      if (geoData.length === 0) {
        setError(`City '${city}' not found`);
        return;
      }

      const { lat, lon , name} = geoData[0];
      // Use Promise.all to fetch today's weather and 5-day forecast concurrently
      const [weatherTodayResponse, weatherFiveDaysResponse] =
        await Promise.all([
          fetch(
            `${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          ),
          fetch(
            `${API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          ),
        ]);

      const weatherToday = await weatherTodayResponse.json();
      const weatherFiveDays = await weatherFiveDaysResponse.json();
      if (weatherToday.cod !== 200 || weatherFiveDays.cod !== '200') {
        setError(`Error fetching weather data for '${city}' city`);
        return;
      }

      setWeatherDataToday({ ...weatherToday, cityName:name });
      setWeatherDataFiveDays(weatherFiveDays);
      setError(null);

    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching data");
    }
  };
   
  useEffect(() => {
    fetchWeather();
  }, [city]);

  if (error) {
    return <div className="text-3xl">{error}</div>;
  }

  if (!weatherDataToday || !weatherDataFiveDays) {
    return <div className="text-3xl">...</div>;
  }
  return (
    <div className="grid lg:grid-cols-2 sm:gap-10 gap-20 ">
      <WeatherToday weatherData={weatherDataToday} />
      <WeatherFiveDays weatherData={weatherDataFiveDays} />
    </div>
  );
};

export default Weather;
