import { useState } from "react";
import s from "./../styles/SearchBar.module.scss"

const SearchBar = ({ submitRequest }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    submitRequest(location);
  };

  const onChange = (e) => setLocation(e.target.value);

  return (
      <div className={s.searchBar}>
         <form onSubmit={onSubmit}>
            <input type="text" placeholder="Type Location..." onChange={onChange} />
            <button>Search</button>
         </form>
      </div>
  );
};

export default SearchBar;
