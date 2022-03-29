import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {

  const listToList = listings.map(l =>
    <ListingCard listing={l} key={l.id} />)

  return (
    <main>
      <ul className="cards">
        {listToList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
