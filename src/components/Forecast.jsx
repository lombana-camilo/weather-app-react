import s from "./../styles/Forecast.module.scss";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Forecast = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find((c) => c["id"] == id);
  const hourlyForecast = city.hourly.map((d) => {
    const hour = new Date(d.dt * 1000).getHours();
    const icon = `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
    return (
      <SplideSlide key={d.dt}>
        <div className={s.hourly}>
          <span> {hour}:00</span>
          <h1>{Math.floor(d.temp - 273.15)}°C</h1>
          <img src={icon} alt="" />
          <h4>{d.weather[0].description}</h4>
          <div className={s.details}>
            <span>Feels like: {Math.floor(d.feels_like - 273.15)}°</span>
            <span>Humidity: {d.humidity}%</span>
          </div>
        </div>
      </SplideSlide>
    );
  });

  return (
    <div className={s.forecast}>
      <div className={s.current}>
        <h2>Currently in {city.name}:</h2>
        <h1>{city.temp}°C</h1>
        <hr />
      </div>
      <Splide
        options={{
          autoWidth: true,
          gap: "80px",
          pagination: false,
        }}
      >
        {hourlyForecast}
      </Splide>
    </div>
  );
};
export default Forecast;
