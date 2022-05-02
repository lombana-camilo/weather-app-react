import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentData from "./components/CurrentData";
import Forecast from "./components/Forecast";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Error from "./components/Error";
import useWeatherApi from "./apiHook/useWeatherApi";

const App = () => {
  const { isError, isLoading, currData, submitRequest } = useWeatherApi();
  const [cities, setCities] = useState([]);

  const onSubmit = async (location) => {
    const cityData = await submitRequest(location);
    setCities((oldCities) => [...oldCities, cityData]);
    console.log(cities);
  };

  return (
    <div>
      <SearchBar submitRequest={onSubmit} />
      {isError && <Error message={isError} />}
      {/* {currData && <Cards cities={cities} />} */}
      {currData && <Cards cities={cities} />}
      {/* <CurrentData/> */}
      {/* <Forecast/> */}
    </div>
  );
};

export default App;
