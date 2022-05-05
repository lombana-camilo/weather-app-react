import { useState } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [isError, setError] = useState("");
  const [currData, setCurrData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const submitRequest = async (location) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const config = {
      params: { q: location, appid: process.env.REACT_APP_APIKEY },
    };
    const { data } = await axios.get(URL, config);

    const currentCity = {
      id: data.id,
      name: data.name,
      temp: Math.floor(data.main.temp - 273.15),
      max: Math.floor(data.main.temp_max - 273.15),
      min: Math.floor(data.main.temp_min - 273.15),
      feelsLike: Math.floor(data.main.feels_like - 273.15),
      description: data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
    setCurrData(true);
    return currentCity;
  };

  return {
    isError,
    setError,
    currData,
    isLoading,
    submitRequest,
  };
};

export default useWeatherApi;
