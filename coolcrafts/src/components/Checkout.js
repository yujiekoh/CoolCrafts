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
          <div>
            <h3>Your Shopping Basket</h3>
            {/* list all basket items here */}
            {basket.map(item => {
                return (
                    <CheckoutItem 
                        image={item.image} 
                        id={item.id} 
                        title={item.title} 
                        shopName={item.shopName} 
                        views={item.views} 
                        price={item.price}
                    />
                )
            })}
          </div>
        )}
      </div>
    );
}

export default Checkout
