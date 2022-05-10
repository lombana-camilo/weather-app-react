import s from "./../styles/Card.module.scss";
import bg from "./../styles/backgrounds.module.scss";
import { NavLink } from "react-router-dom";

const Card = ({ city, onClose, id }) => {
  const sky = {
    clear: bg.clearDay,
    cloud: bg.cloudyDay,
    thund: bg.rainyDay,
    rain: bg.rainyDay,
    snow: bg.snowyDay,
  };
  let background = "";
  for (let i in sky) {
    if (city.description.includes(i)) {
      background = sky[i];
    }
  }

  return (
    <div className={`${s.card} ${background}`}>
      <button onClick={() => onClose(city.id)}>x</button>
      <div className={s.temp}>
        <h1>{city.temp}°C</h1>
        <p>
          Min: {city.min}° Max: {city.max}°
        </p>
        <p>Feels like: {city.feelsLike}°</p>
      </div>
      <hr />
      <div className={s.description}>
        <div>
          <h3>{city.name}</h3>
          <h4>{city.description}</h4>
        </div>
        <img src={city.icon} alt="" />
      </div>
      <NavLink to={`/city/${id}`}>
        <span>See Hourly Forecast</span>
      </NavLink>
    </div>
  );
};

export default Card;
