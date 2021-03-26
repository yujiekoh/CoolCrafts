import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ItemImage = (props) => {
  const [img, setImg] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const imageURL = `https://openapi.etsy.com/v2/listings/${props.listingID}/images?api_key=${API_KEY}`;
    axios.get(imageURL).then(res => {
        console.log("imageURL axios call made");
        console.log(res.data.results[0]["url_170x135"]);
        setImg(res.data.results[0]["url_170x135"]);
    })
}, [])

  return (
    <div>
      <img src={img} alt="image failed to load" />
      
    </div>
  );
}

export default ItemImage;