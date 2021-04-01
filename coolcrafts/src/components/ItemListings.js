import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

const ItemListings = (props) => {
    const itemListings = [];
    for (let i = 0; i < props.listings.length; i++) {
        itemListings.push(
          <ItemCard
            key={props.listings[i].listing_id}
            card={props.listings[i]}
            listingID={props.listings[i].listing_id}
          />
        );
    }
    console.log(itemListings);
    return (
        <div className="item-listings">
            {itemListings}
        </div>
    )
};

export default ItemListings;
