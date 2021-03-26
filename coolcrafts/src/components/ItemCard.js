import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';
import Fave from './Fave';

const ItemCard = (props) => {
    // const [listing, setListing] = useState({
    //     image: "",
    //     shopName: "test shop"
    // });
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    // useEffect(() => {
    //     const imageURL = `https://openapi.etsy.com/v2/listings/${props.listingID}/images?api_key=${API_KEY}`;
    //     axios.get(imageURL).then(res => {
    //       console.log("imageURL axios call made");
    //       console.log(res.data.results[0]["url_170x135"]);
    //       setListing({
    //         ...listing,
    //         image: res.data.results[0].url_170x135,
    //       });
    //     })

    //     const shopURL = `https://openapi.etsy.com/v2/shops/listing/${props.listingID}?api_key=${API_KEY}`;
    //     axios.get(shopURL).then((res) => {
    //       console.log("shopURL axios call made");
    //       console.log(res.data.results[0].shop_name);
    //       setListing({
    //         ...listing,
    //         shopName: res.data.results[0].shop_name,
    //       });
    //     });
    // }, [])

    // useEffect(() => {
    //     const shopURL = `https://openapi.etsy.com/v2/shops/listing/${props.listingID}?api_key=${API_KEY}`;
    //     axios.get(shopURL).then(res => {
    //         console.log("shopURL axios call made");
    //         console.log(res.data.results[0].shop_name);
    //         setListing({
    //           ...listing,
    //           shopName: res.data.results[0].shop_name,
    //         });
    //     })
    // }, [])
    
    return (
      <div className="item-card">
        {/* <ItemImage image={listing.image}/> */}
        {/* <ItemInfo info={props.card} shopName={listing.shopName} listingID={props.listingID}/> */}
        <ItemImage listingID={props.listingID} />
        <ItemInfo info={props.card} listingID={props.listingID} />
        <Fave />
      </div>
    );
}

export default ItemCard;