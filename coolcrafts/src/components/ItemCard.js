import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';
import Fave from './Fave';
import Add from './Add';
import { useStateValue } from './StateProvider';

const ItemCard = (props) => {
    const [listing, setListing] = useState({
      // set height and width of <img> tag to be 170x135
        image: "",
        shopName: "test shop"
    });
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const imageURL = `https://openapi.etsy.com/v2/listings/${props.listingID}/images?api_key=${API_KEY}`;
        const shopURL = `https://openapi.etsy.com/v2/shops/listing/${props.listingID}?api_key=${API_KEY}`;
        Promise.all([axios.get(imageURL), axios.get(shopURL)]).then(res => {
          console.log(res[0].data.results[0]["url_170x135"]);
          console.log(res[1].data.results[0].shop_name);
          setListing({
            image: res[0].data.results[0]["url_170x135"],
            shopName: res[1].data.results[0].shop_name
          });
        })

        // const imageURL = `https://openapi.etsy.com/v2/listings/${props.listingID}/images?api_key=${API_KEY}`;
        // axios.get(imageURL).then(res => {
        //   console.log("imageURL axios call made");
        //   console.log(res.data.results[0]["url_170x135"]);
        //   setListing(prev => ({
        //     ...prev,
        //     image: res.data.results[0]["url_170x135"],
        //   }));
        // })

        // const shopURL = `https://openapi.etsy.com/v2/shops/listing/${props.listingID}?api_key=${API_KEY}`;
        // axios.get(shopURL).then((res) => {
        //   console.log("shopURL axios call made");
        //   console.log(res.data.results[0].shop_name);
        //   setListing(prev => ({
        //     ...prev,
        //     shopName: res.data.results[0].shop_name,
        //   }));
        // });
    }, [])

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
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
      console.log("clicked add to basket")
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          image: listing.image,
          id: props.listingID,
          title: props.card.title,
          shopName: listing.shopName,
          views: props.card.views,
          price: parseFloat(props.card.price),
          quantity: 1,
          totalPrice: parseFloat(props.card.price)
        },
      });
    }

    return (
      <div className="item-card">
        <img src={listing.image} alt="image failed to load" />
        <div className="item-card-info">
          <h4>{props.card.title}</h4>
          <h5>{listing.shopName}</h5>
          <p>Views: {props.card.views}</p>
          <p>
            ${props.card.price}
          </p>
        </div>

        <button className="fave">Add to Favourites</button>
        <button className="add-remove" onClick={addToBasket}>Add to Basket</button>

        {/* <ItemImage image={listing.image}/>
        <ItemInfo info={props.card} shopName={listing.shopName} listingID={props.listingID}/> */}
        {/* <ItemImage listingID={props.listingID} />
        <ItemInfo info={props.card} listingID={props.listingID} /> */}
      </div>
    );
}

export default ItemCard;