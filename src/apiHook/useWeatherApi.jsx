import { useState } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [isError, setIsError] = useState(false);
  const [currData, setCurrData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const submitRequest = async (location) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const config = { params: { q: location, appid: process.env.REACT_APP_APIKEY} };
    const { data } = await axios.get(URL, config);
      

    const currentCity = {
      id: data.id,
      name: data.name,
      temp: Math.floor(data.main.temp),
      max: Math.floor(data.main.temp_max),
      min: Math.floor(data.main.temp_min),
      feelsLike: data.main.feels_like,
      description: data.weather[0].description,
      imgId: data.weather[0].id,
    };
    setCurrData(true);
    return currentCity;
  };

  return {
    isError,
    currData,
    isLoading,
    submitRequest,
  };
};

export default useWeatherApi;
