import React, { useState, useEffect, useRef } from "react";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Checkout() {
  const [{ basket }] = useStateValue();
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "VISA", value: "1" },
    { name: "Mastercard", value: "2" },
    { name: "AMEX", value: "3" },
    { name: "PayPal", value: "4" },
  ];

  // if (basket.length > 0) {
  //   const x = basket.reduce((total, item) => total.totalPrice + item.totalPrice);

  //   console.log(x);
  // }

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
                  totalPrice={item.price * 100 * item.quantity}
                  key={item.id}
                />
              );
            })}
          </div>

          <Card border="secondary" className="checkout-card">
            <Card.Body className="checkout-card-body">
              <Card.Title>How you'll pay</Card.Title>
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-primary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <Table size="sm" borderless="true" className="checkout-table">
                <tbody>
                  <tr>
                    <td colSpan="4">Item(s) total</td>
                    <td>
                      $
                      {basket.reduce(
                        (total, item) =>
                          total + Math.round(item.totalPrice * 100),
                        0
                      ) / 100}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">Delivery</td>
                    <td>
                      $
                      {(0.05 *
                        basket.reduce(
                          (total, item) =>
                            total + Math.round(item.totalPrice * 100),
                          0
                        )) /
                        100}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <strong>Grand total</strong>
                    </td>
                    <td>
                      <strong>
                        $
                        {(1.05 *
                          basket.reduce(
                            (total, item) =>
                              total + Math.round(item.totalPrice * 100),
                            0
                          )) /
                          100}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="outline-primary">Proceed to Checkout</Button>
            </Card.Body>
          </Card>
          {/* <div className="proceed-to-checkout">
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
                    {basket.reduce((total, item) => (total + item.totalPrice), 0)}
                  </td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>109</td>
                </tr>
              </table>
            </div> */}
        </div>
      )}
    </div>
  );
}

export default Checkout;
