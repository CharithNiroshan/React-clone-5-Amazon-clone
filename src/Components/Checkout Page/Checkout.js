import React, { useState } from "react";
import "./Checkout.css";
import BasketItem from "./Basketitem";
import Sametypeproduct from "./Sametype_product";
import Emptycart from "./Emptycart";
import { useDataLayerValue } from "../../Context API/Datalayer";
import Subtotal from "./Subtotal";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [{ cart, suggested_products }, dispatch] = useDataLayerValue();
  const history = useHistory();

  return (
    <div className="checkout">
      <div className="checkout_left">
        {cart.length == 0 ? (
          <Emptycart />
        ) : (
          <>
            <h1 className="checkout_title">Shopping Cart</h1>
            <div className="basket_item_container">
              {cart.map((item, index) => {
                return <BasketItem key={item?.id} {...item} index={index} />;
              })}
            </div>
            <Subtotal cart={cart} />
          </>
        )}
      </div>
      <div className="checkout_right">
        <div className="subtotal_box">
          <Subtotal cart={cart} />
          <button
            className="checkout_button"
            disabled={cart?.length === 0}
            onClick={() => {
              {
                cart?.length != 0 && history.push("/payment");
              }
            }}
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="suggested_item_box">
          <h1 className="suggested_item_box_title">
            Suggest Products For You :
          </h1>
          <div className="suggested_item_container">
            {suggested_products?.map((product) => {
              return <Sametypeproduct product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
