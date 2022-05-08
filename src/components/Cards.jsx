import Card from "./Card";
import s from "./../styles/Cards.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


const Cards = ({ cities, onClose}) => {
  return (
    <div className={s.cards}>
         <Splide options={{
            autoWidth: true,
            width: "88vw"
         }}>
            {cities.map((c) => (
               <SplideSlide key={c.id}>
                  <Card city={c} onClose={onClose} id={c.id}/>
               </SplideSlide>
            ))}
         </Splide>
    </div>
  );
};

export default Cards;
