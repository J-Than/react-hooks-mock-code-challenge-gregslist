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

  const filteredList = listings

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={filteredList} />
    </div>
  );
}

export default App;
