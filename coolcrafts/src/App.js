import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemListings from "./components/ItemListings";
// import ItemData from "./data/ItemData";

function App() {
  const [listings, setListings] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const numListings = 8;

  useEffect(() => {
    const testUrl = `https://openapi.etsy.com/v2/listings/967023146?api_key=${API_KEY}`;

    const url = `https://openapi.etsy.com/v2/listings/active?api_key=${API_KEY}&limit=${numListings}`;

    axios.get(url).then((res) => {
      console.log("App.js axios call made");
      console.log(res.data.results);
      setListings(res.data.results);
    });
  }, []);

  // console.log("api key");

  // const url = `https://openapi.etsy.com/v2/listings/967023146?api_key=${API_KEY}`;

  // fetch(url)
  //   .then(response => response.json())
  //   .then(json => console.log(json));

  // console.log(ItemData.results[0]);

  return (
    <div className="App">
      <h1>CoolCrafts</h1>
      {/* {listings.title} */}
      <ItemListings key="listings" listings={listings} />
    </div>
  );
}

export default App;
