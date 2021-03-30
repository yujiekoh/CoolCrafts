import React, { useState } from 'react';
import { useStateValue } from "./StateProvider";

const CheckoutItem = (props) => {
    const [{ basket }, dispatch] = useStateValue();

    const [quantity, setQuantity] = useState(1);

    const removeFromBasket = () => {
        console.log("clicked remove from basket");
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id
        })
    }

    const handleChange = (e) => {
      console.log("quantity changed");
      console.log(parseInt(e.target.value));
      setQuantity(e.target.value);
      dispatch({
        type: "CHANGE_ITEM_QUANTITY",
        id: props.id,
        newQuantity: parseInt(e.target.value),
        newTotalPrice: parseInt(e.target.value) * props.price
      });
      

      // setTotalPrice({
      //   quantity: parseInt(e.target.value),
      //   price: parseInt(e.target.value) * props.price
      // });
    };

    return (
      <div>
        <div className="checkout-item">
          <img className="checkout-item-img" src={props.image} alt="" />

          <div className="checkout-item-info">
            <h4>{props.title}</h4>
            <h5>{props.shopName}</h5>
            <p>Views: {props.views}</p>
          </div>

          <div className="checkout-item-total">
            <h4>Quantity:</h4>
            <form action="" onChange={handleChange}>
              <label for="quantity"></label>
              <select name="quantity" className="quantity" value={quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
          </div>

          <div className="checkout-item-total">
            <h3>${(props.totalPrice) / 100}</h3>
          </div>
        </div>

        <button className="add-remove" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    );
}

export default CheckoutItem;
