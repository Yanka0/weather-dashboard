import React from "react";
import { useDispatch, useSelector } from "react-redux";
import weather from "src/assets/weather.svg";
import {
  addToMyFavorites,
  removeFromMyFavorites,
  selectCities,
} from "src/store/myFavorites";

interface Props {
  weatherData: any;
}

const WeatherToday: React.FC<Props> = ({ weatherData }) => {
  const dispatch = useDispatch();
  const favoriteCities = useSelector(selectCities);
  const isFavoriteCity = weatherData.cityName
    ? favoriteCities.includes(weatherData.cityName)
    : false;

  const handleClick = () => {
    if (weatherData.cityName) {
      if (isFavoriteCity) {
        dispatch(removeFromMyFavorites(weatherData.cityName));
      } else {
        dispatch(addToMyFavorites(weatherData.cityName));
      }
    }
  };

  return (
    <div>
      <div className="bg-blue ronded rounded-lg text-center w-96 p-5 ">
      <p className=" text-2xl text-white pb-3">Right now</p>
      <p className="text-5xl text-white pb-5 font-semibold">
        {weatherData.cityName}
      </p>
      <p className="text-white text-6xl">
        {Math.round(weatherData.main.temp)} °C
      </p>
      <div className="flex justify-center p-3">
        <img alt="weather" src={weather} />
      </div>
      <div className="bg-white rounded rounded-xl text-lg">
        <p>
          <strong>Feels Like:</strong> {Math.round(weatherData.main.feels_like)}
          °C
        </p>
        <p>
          <strong>Weather:</strong> {weatherData.weather[0].description}
        </p>
        <p>
          <strong>Humidity:</strong> {weatherData.main.humidity} %
        </p>
        <p>
          <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
        </p>
        <p>
          <strong>Visibility:</strong> {weatherData.visibility / 1000} km
        </p>
      </div>
      <button
        className="bg-red text-white px-8 py-1 rounded rounded-xl mt-3"
        onClick={handleClick}
      >
        { isFavoriteCity ? "Delete" : "Save"}
      </button>
    </div>
    </div>
  );
};

export default WeatherToday;
