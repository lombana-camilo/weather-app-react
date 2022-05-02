import s from "./../styles/Card.module.scss"

const Card = ({city}) => {
  return (
    <div className={s.card}>
      <div>
        <h1>{city.temp}</h1>
        <p>
          Min: {city.min} Max: {city.max}
        </p>
        <p>Feels like: {city.feelsLike}</p>
      </div>
      <div>
        <img src="" alt="" />
        <h3>{city.name}</h3>
        <h4>{city.description}</h4>
      </div>
    </div>
  );
};

export default Card;
