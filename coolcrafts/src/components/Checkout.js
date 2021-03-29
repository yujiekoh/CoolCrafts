import React from 'react'
import CheckoutItem from './CheckoutItem';
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
      <div className="checkout">
        <img src="" alt="" />
        <h1>Checkout</h1>
        {basket.length === 0 ? (
          <div>
            <h3>Your Shopping Basket is empty</h3>
            <p>
              You have no items in your basket. Click "Add to Basket" under the
              item to buy an item.
            </p>
          </div>
        ) : (
          <div className="checkout-final">
            <div className="checkout-basket">
              <h3>Your Shopping Basket</h3>
              {/* list all basket items here */}
              {basket.map((item) => {
                return (
                  <CheckoutItem
                    image={item.image}
                    id={item.id}
                    title={item.title}
                    shopName={item.shopName}
                    views={item.views}
                    price={item.price}
                    quantity={item.quantity}
                    totalPrice={item.price * item.quantity}
                  />
                );
              })}
            </div>
            <div className="proceed-to-checkout">
              <h4>
                <strong>How you'll pay</strong>
              </h4>
              <br />
              <input type="radio" name="payment" value="credit-card" />
              <label for="credit-card"> Credit Card</label>
              <br />
              <br />
              <input type="radio" name="payment" value="paypal" />
              <label for="paypal"> PayPal</label>

              <table>
                <tr>
                  <td>Item(s) total</td>
                  <td>
                    {basket.reduce((total, item) => total.totalPrice + item.totalPrice)}
                  </td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th>109</th>
                </tr>
              </table>

              {/* <div className="checkout-total">
                <div className="checkout-subtotal">
                  <h4>Item(s) total:</h4>
                  <h4>Delivery</h4>
                  <h3>Total</h3>
                </div>

                <div className="checkout-subtotal">
                  <h4>99</h4>
                  <h4>99</h4>
                  <h3>99</h3>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    );
}

export default Checkout
