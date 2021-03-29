import "./App.css";
import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
import ItemListings from "./components/ItemListings";
import Header from "./components/Header";
import Checkout from "./components/Checkout";


function App() {
  const [listings, setListings] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const numListings = 4;

  useEffect(() => {
    const testUrl = `https://openapi.etsy.com/v2/listings/967023146?api_key=${API_KEY}`;

    const url = `https://openapi.etsy.com/v2/listings/active?api_key=${API_KEY}&limit=${numListings}`;

    axios.get(url).then((res) => {
      console.log("App.js axios call made");
      console.log(res.data.results);
      setListings(res.data.results);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/favourites">
            <Header />
            <h1>Favourites page</h1>
          </Route>
          <Route path="/profile">
            <Header />
            <h1>Profile page</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <ItemListings key="listings" listings={listings} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
