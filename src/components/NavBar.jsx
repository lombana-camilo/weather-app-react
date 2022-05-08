import SearchBar from "./SearchBar";
import s from "./../styles/NavBar.module.scss"
import { Link } from "react-router-dom";

const NavBar = ({submitRequest}) => {
  return (
    <div className={s.navBar}>
         <Link to="/">
            <h1>Weather Cards</h1>
         </Link>
      <SearchBar submitRequest={submitRequest}/>
    </div>
  );
};

export default NavBar;
