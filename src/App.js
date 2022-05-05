import { useState } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import CurrentData from "./components/CurrentData";
import Forecast from "./components/Forecast";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Error from "./components/Error";
import useWeatherApi from "./apiHook/useWeatherApi";

const App = () => {
  const { isError, setError, isLoading, currData, submitRequest } =
    useWeatherApi();
  const [cities, setCities] = useState([]);

  const onSubmit = async (location) => {
    try {
      const cityData = await submitRequest(location);
      setCities((oldCities) => [...oldCities, cityData]);
      setError("");
    } catch (error) {
      setError("No city was found");
    }
  };

  const onClose = (cityId) => {
    setCities(cities.filter((c) => c.id !== cityId));
  };

  return (
    <div>
         <div>
            <SearchBar submitRequest={onSubmit} />
            {isError && <Error message={isError} />}
         </div>
      {currData && <Cards cities={cities} onClose={onClose} />}
      {/* <CurrentData/> */}
      {/* <Forecast/> */}
    </div>
  );
};

export default App;
