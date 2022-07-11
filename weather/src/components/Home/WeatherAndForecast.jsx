import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "../styles/WeatherAndForecast.css";

import Weatherdetail from "./Weatherdetail";

function WeatherAndForecast({ weatherInfo, location, forecast3hrs }) {
  const date = dateBuilder(new Date());

  function dateBuilder(d) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const date = [];

    for (let count = 0; count < 5; count++) {
      if (d.getDay() + count < 7) date[count] = d.getDay() + count;
      else if (d.getDay() + count === 7) date[count] = 0;
      else if (d.getDay() + count === 8) date[count] = 1;
      else if (d.getDay() + count === 9) date[count] = 2;
      else if (d.getDay() + count === 10) date[count] = 3;
    }

    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]]
    ];
  }

  return (
    <div className="WeatherAndForecast">
      <div className="ForecastContainer">
        <Forecast className="weekForecast" weatherInfo={weatherInfo.daily[0]} date={date[0]} />
        <Forecast className="weekForecast" weatherInfo={weatherInfo.daily[1]} date={date[1]} />
        <Forecast className="weekForecast" weatherInfo={weatherInfo.daily[2]} date={date[2]} />
        <Forecast className="weekForecast" weatherInfo={weatherInfo.daily[3]} date={date[3]} />
        <Forecast className="weekForecast" weatherInfo={weatherInfo.daily[4]} date={date[4]} />
      </div>
      <div className="DetailsAndGrafh">
        <div className="temperature">
          <Weather weatherInfo={weatherInfo} />
        </div>
        <div className="Grafh">
          
        </div>
        <div>
          <Weatherdetail weatherInfo={weatherInfo}/>
        </div>
      </div>
    </div>
  );
}

export default WeatherAndForecast;
