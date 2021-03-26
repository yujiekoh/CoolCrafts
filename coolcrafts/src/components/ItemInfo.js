import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ItemInfo = (props) => {
  const [shopName, setShopName] = useState("test shop");

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    
    const shopURL = `https://openapi.etsy.com/v2/shops/listing/${props.listingID}?api_key=${API_KEY}`;
    axios.get(shopURL).then((res) => {
        console.log("shopURL axios call made");
        console.log(res.data.results[0].shop_name);
        setShopName(res.data.results[0].shop_name);
    });
  }, [])

  return (
    <div>
      <h4>{props.info.title}</h4>
      <h5>{shopName}</h5>
      <p>Views: {props.info.views}</p>
      <p>
        {props.info.currency_code} {props.info.price}
      </p>
    </div>
  );
};

// const ItemInfo = (props) => {

//     return (
//       <div>
//         <h4>{props.info.title}</h4>
//         <h5>{props.shopName}</h5>
//         <p>Views: {props.info.views}</p>
//         <p>
//           {props.info.currency_code}{" "}
//           {props.info.price}
//         </p>
//       </div>
//     );
// }

export default ItemInfo;