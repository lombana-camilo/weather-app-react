import { useState } from "react";

const SearchBar = ({ submitRequest }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    submitRequest(location);
  };

  const onChange = (e) => setLocation(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Enter City..." onChange={onChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
