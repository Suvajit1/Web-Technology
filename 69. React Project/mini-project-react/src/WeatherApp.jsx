import React, { useState } from "react";
import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    temp: 30,
    tempMin: 31,
    tempMax: 32,
    humidity: 40,
    feelsLike: 35,
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
