import React, { useState } from "react";
import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Kolkata",
    temp: 21,
    tempMin: 20,
    tempMax: 25,
    humidity: 70,
    feelsLike: 23,
    weather: "Sunny",
  });

  let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      <h2>Weather App by Forecaster</h2>
      <SearchBox updateInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
