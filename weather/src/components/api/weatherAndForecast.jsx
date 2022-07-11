import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "3b144a713d4b9e2025b079f4aed663da",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
