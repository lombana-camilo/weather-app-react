import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Forecast from "./components/Forecast";
import Cards from "./components/Cards";
import Error from "./components/Error";
import Footer from "./components/Footer";
import useWeatherApi from "./apiHook/useWeatherApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { isError, setError, isLoading, submitRequest, currData } =
    useWeatherApi();
  const [cities, setCities] = useState([]);
  const [currCity, setCurrCity] = useState([]);

  const onSubmit = async (location) => {
    try {
      const cityData = await submitRequest(location);
      //avoid duplicates
      if (cities.some((c) => c.id === cityData.id)) return;
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
    <BrowserRouter>
      <NavBar submitRequest={onSubmit} />
      {isError && <Error message={isError} />}
      <Routes>
        {/* {currData && <Cards cities={cities} onClose={onClose} />} */}
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/city/:id" element={<Forecast cities={cities} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
