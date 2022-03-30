import React from "react";

function Search({ searchTerms, onSearchSubmit, onSearchEntry }) {

  function handleSearchSubmit(e) {
    e.preventDefault();
    onSearchSubmit();
  }

  function handleSearchEntry(e) {
    onSearchEntry(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerms}
        onChange={handleSearchEntry}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
