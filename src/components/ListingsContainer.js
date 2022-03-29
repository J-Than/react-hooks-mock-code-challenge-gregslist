import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {

  const listToList = listings.map(l =>
    <ListingCard key={l.id} listing={l} onDeleteListing={onDeleteListing} />)

  return (
    <main>
      <ul className="cards">
        {listToList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
