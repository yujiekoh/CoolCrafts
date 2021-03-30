import "./App.css";
import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import ItemListings from "./components/ItemListings";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [listings, setListings] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleShowMoreClick = () => {
    console.log("show more clicked");
    setOffset(offset + 10);
    console.log(offset);

    // toggle between 2 values in a state
  };

  const API_KEY = process.env.REACT_APP_API_KEY;
  const numListings = 4;

  // useEffect(() => {

  //   const url = `https://openapi.etsy.com/v2/listings/active?api_key=${API_KEY}&limit=${numListings}&offset=${offset}`;

  //   axios.get(url).then((res) => {
  //     console.log("App.js axios call made");
  //     console.log(res.data.results);
  //     setListings(res.data.results);
  //   });
  // }, []);

  useEffect(() => {
    const url = `https://openapi.etsy.com/v2/listings/active?api_key=${API_KEY}&limit=${numListings}&offset=${offset}`;
    axios.get(url).then((res) => {
      console.log("App.js axios call made");
      console.log(res.data.results);
      setListings((prev) => prev.concat(res.data.results));
      // setListings((prev) => [...prev, ...res.data.results]);
      // setListings(listings.concat(res.data.results));
    });
  }, [offset]);

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
            <Button
              variant="outline-primary"
              className="show-more"
              onClick={handleShowMoreClick}
            >
              Show More
            </Button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
