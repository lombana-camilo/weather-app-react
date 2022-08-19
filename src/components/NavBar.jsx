import SearchBar from "./SearchBar";
import s from "./../styles/NavBar.module.scss"
import { Link, Route, Routes } from "react-router-dom";

const NavBar = ({submitRequest}) => {
  return (
    <div className={s.navBar}>
         <Link to="/">
            <h1>Weather Cards</h1>
         </Link>
         <Routes>
            <Route path="/" element={ <SearchBar submitRequest={submitRequest}/> }/>
            <Route path="*" element={ <h2> Hourly Forecast</h2> }/>
         </Routes>
    </div>
  );
};

export default NavBar;
