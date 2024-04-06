import { React, useContext } from "react";

import "../checkOut/checkoutProducts.css";
import shoppingContext from "../../Context/shopping/shoppingContext";
function CheckOutProducts({ id, image, tittle, rating, price, hideButton }) {
  const shop = useContext(shoppingContext);
  const { removeFromBasket } = shop;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (  
    <div className="checkout-product">
      <img src={image} alt="" className="checkout_product_image" />

      <div className="checkout_product_info">
        <p className="checkout_product_tittle">{tittle}</p>

        <div className="checkout_product_rating">
          <p>{rating}</p>
        </div>

        <p className="checkout_product_price">
          <small>$</small> <strong>{price}</strong>
        </p>

        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove item</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProducts;
