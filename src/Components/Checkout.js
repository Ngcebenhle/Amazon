import React, { useContext } from "react";
import "../Components/Checkout.css";
import shoppingContext from "../Context/shopping/shoppingContext";
import CheckOutProducts from "../Components/checkOut/CheckOutProducts";
import SubTotal from "../Components/SubTotal";

function Checkout() {
  const shop = useContext(shoppingContext);
  const { basket, user } = shop;

  // const print =()=>{
  //   basket.map(item=>{
  //     console.log(item.item.id)

  //   })
  // }

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />

        <div className="checkout">
          {/* <button onClick={print}>Print</button> */}
          <div className="ch_tittle">
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_tittle">Shopping Basket</h2>
          </div>

          <div className="display">
            {basket.map((item) => (
              <CheckOutProducts
                key={item.item.id}
                id={item.item.id}
                tittle={item.item.tittle}
                image={item.item.image}
                price={item.item.price}
                rating={item.item.rating}
              />
            ))}
          </div>
        </div>
        <hr />
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
