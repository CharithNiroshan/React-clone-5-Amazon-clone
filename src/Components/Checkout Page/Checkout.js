import React, { useState } from "react";
import "./Checkout.css";
import BasketItem from "./Basketitem";
import Sametypeproduct from "./Sametype_product";
import Emptycart from "./Emptycart";
import { useDataLayerValue } from "../../Context API/Datalayer";

function Checkout() {
  const [{ cart }, dispatch] = useDataLayerValue();
  const [currentcart, setCurrentcart] = useState(cart);

  return (
    <div className="checkout">
      <div className="checkout_left">
        {cart?.no_of_items == 0 ? (
          <Emptycart />
        ) : (
          <>
            <h1 className="checkout_title">Shopping Cart</h1>
            <div className="basket_item_container">
              {cart.items.map((item) => {
                return (
                  <BasketItem
                    image={item.image}
                    title={item.title}
                    owner={item.owner}
                    price={item.price}
                    type={item.type}
                    stock_status={item.stock_status}
                  />
                );
              })}
            </div>
            <h2 className="subtotal">
              Subtotal (3 Items):
              <span className="subtotal_price"> ${cart.subtotal}</span>
            </h2>
          </>
        )}
      </div>
      <div className="checkout_right">
        <div className="subtotal_box">
          <h2 className="subtotal">
            Subtotal (3 Items):
            <span className="subtotal_price"> ${cart.subtotal}</span>
          </h2>
          <button className="checkout_button"> Proceed to Checkout </button>
        </div>
        <div className="sametype_products_box">
          <h1 className="sametype_products_box_title">
            Customers who shopped for {cart.last_added.title}
            also shopped for:
          </h1>
          <div className="sametype_products_container">
            {cart.last_added_type_products.map((product) => {
              return (
                <Sametypeproduct
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  no_of_reviews={product.no_of_reviews}
                  type={product.type}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
