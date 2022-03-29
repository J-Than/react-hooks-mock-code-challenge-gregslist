import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {

  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite)
  }

  function handleDelete() {
    onDeleteListing(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
          onClick={handleDelete}
          >🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
