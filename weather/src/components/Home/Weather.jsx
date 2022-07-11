import React from "react";

import "../styles/Weather.css";

export default function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather">
      <div className="WeatherInfo">
        <ul className="WeatherList">
          <li className="listTemp">
            {Math.round(weatherInfo.current.temp)}
            <span className="listTemperatureSymbol">°C</span>
          </li>
        </ul>
        <img
          className="WeatherIcon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
      </div>
    </div>
  );
}
