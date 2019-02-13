import React from "react";

import "./SearchBar.css";

const SearchBar = props => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search Posts..."
        value={props.search}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchBar;
