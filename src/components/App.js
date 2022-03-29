import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listReturn => setListings(listReturn))
  }, [])

  function handleDeleteListing(deletedListingID) {
    fetch(`http://localhost:6001/listings/${deletedListingID}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(d => setListings(listings => listings.filter(l => l.id !== deletedListingID)))
  }

  const filteredList = listings

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={filteredList} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
