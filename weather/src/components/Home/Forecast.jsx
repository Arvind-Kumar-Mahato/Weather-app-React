import React from "react";
import "../styles/Forecast.css";

export default function Forecast({ weatherInfo, date }) {
  return (
    <div className="main_div">
      <div className="Forecst_MainDiv">
        <h1 className="Forecast_title">{[date[0], date[1], date[2]]}</h1>
        <img
          className="Forecast_icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.weather[0].main}
        />
        <div className="Forecast_temp">
          <span className="temp_max">{Math.round(weatherInfo.temp.max)}<span className="temp_symbol">°</span></span>
          <span className="temp_min">{Math.round(weatherInfo.temp.min)}<span className="temp_symbol">°</span></span>
        </div>
      </div>
    </div>
  );
}
