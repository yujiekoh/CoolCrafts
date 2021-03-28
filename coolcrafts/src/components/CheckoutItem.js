import React from 'react';
import { useStateValue } from "./StateProvider";

const CheckoutItem = (props) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        console.log("clicked remove from basket");
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id
        })
    }

    return (
      <div className="checkout-item">
        <img src={props.image} alt="" />

        <div className="checkout-info">
          <h4>{props.title}</h4>
          <h5>{props.shopName}</h5>
          <p>Views: {props.views}</p>
          <p>${props.price}</p>
        </div>

        <button className="add-remove" onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    );
}

export default CheckoutItem;
