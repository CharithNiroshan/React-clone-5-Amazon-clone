import React, { useState, useEffect } from "react";
import "./Payment.css";
import BasketItem from "../Checkout Page/Basketitem";
import { useDataLayerValue } from "../../Context API/Datalayer";
import Subtotal from "../Checkout Page/Subtotal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Paymentform from "./Paymentform";

function Payment() {
  const [{ user, cart }, dispatch] = useDataLayerValue();
  const promise = loadStripe(
    "pk_test_51JE1FVGZKYFXwhWb6cAvc94V73nBrwYvv0u80btdxHMyW3Oakjb2wYeCjWiMngTorCQrqt9gQlKz916CpCcnbgIi00fVz1xlT2"
  );

  return (
    <div className="payment">
      <div className="payment_container">
        <h1 className="payment_title"> Checkout ( {cart?.length} Items ) </h1>
        <div className="payment_section">
          <div className="payment_section_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address payment_section_content">
            <p>{user?.email}</p>
            <p>No 16/2 , Pathum Villa</p>
            <p>Oruthota, Gomagoda</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_section_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_item_container payment_section_content">
            {cart.map((item, index) => {
              return <BasketItem key={item?.id} {...item} index={index} />;
            })}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_section_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details payment_section_content">
            <Subtotal cart={cart} />
            <Elements stripe={promise}>
              <Paymentform />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
