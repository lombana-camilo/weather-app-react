import { useState } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [isError, setError] = useState("");
  // const [currData, setCurrData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const submitRequest = async (location) => {
    //Getting latitude and longitude from first api endpoint
    const URL1 = "https://api.openweathermap.org/data/2.5/weather";
    const config1 = {
      params: { q: location, appid: process.env.REACT_APP_APIKEY },
    };
    const res1 = await axios.get(URL1, config1);
    const currData = res1.data;
    const la = currData.coord.lat;
    const lo = currData.coord.lon;
    //Getting the forecast data from second api endpoint
    const URL2 = " https://api.openweathermap.org/data/2.5/onecall";
    const config2 = {
      params: { lat: la, lon: lo, appid: process.env.REACT_APP_APIKEY },
    };
    const res2 = await axios.get(URL2, config2);
    const forecastData = res2.data;

    // Getting info to be displayed
    const currentCity = {
      id: currData.id,
      name: currData.name,
      temp: Math.floor(currData.main.temp - 273.15),
      max: Math.floor(currData.main.temp_max - 273.15),
      min: Math.floor(currData.main.temp_min - 273.15),
      feelsLike: Math.floor(currData.main.feels_like - 273.15),
      description: currData.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${currData.weather[0].icon}@2x.png`,
      hourly: forecastData.hourly
    };
    // console.log(data);
    return currentCity;
  };

  return {
    isError,
    setError,
    isLoading,
    submitRequest,
  };
};

export default useWeatherApi;
