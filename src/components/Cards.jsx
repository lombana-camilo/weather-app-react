import Card from "./Card";

const Cards = ({ cities }) => {
   return(
      <div>
         { cities.map((c) => <Card city={c} key={c.id} />)}
      </div>
   );
}

export default Cards;
