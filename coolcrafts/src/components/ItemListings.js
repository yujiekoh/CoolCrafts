import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

const ItemListings = (props) => {

    // const titles = [];
    // for (let i = 0; i < props.listings.length; i++) {
    //     titles.push(<h4>{props.listings[i].title}</h4>);
    // }
    // console.log(titles);

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
      


  // return (
  //     <div>

  //         <ItemCard />
  //     </div>
  // )
};

export default ItemListings;
