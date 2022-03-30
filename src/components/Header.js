import React from "react";
import Search from "./Search";

function Header({ searchTerms, onSearchSubmit, onSearchEntry }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        searchTerms={searchTerms}
        onSearchEntry={onSearchEntry}
        onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
