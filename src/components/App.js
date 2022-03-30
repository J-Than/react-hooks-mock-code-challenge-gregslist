import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchTerms, setSearchTerms] = useState("")
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listReturn => {
      setListings(listReturn)
      setFilteredList(listReturn)
    })
  }, [])

  function handleDeleteListing(deletedListingID) {
    fetch(`http://localhost:6001/listings/${deletedListingID}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(d => setListings(listings => listings.filter(l => l.id !== deletedListingID)))
  }

  function handleSearchEntry(entry) {
    setSearchTerms(searchTerms => searchTerms = entry)
  }

  function handleSearch() {
    setFilteredList(filteredList => searchTerms!=="" ?
      filteredList = listings.filter(l => l.description.includes(searchTerms)) : listings)
  }

  return (
    <div className="app">
      <Header searchTerms={searchTerms} onSearchEntry={handleSearchEntry} onSearchSubmit={handleSearch} />
      <ListingsContainer listings={filteredList} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
