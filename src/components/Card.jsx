import s from "./../styles/Card.module.scss";

const Card = ({ city, onClose}) => {

  return (
    <div className={s.card}>
         <button onClick={(e)=> onClose(city.id)}>x</button>
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
    </div>
  );
};

export default Card;
