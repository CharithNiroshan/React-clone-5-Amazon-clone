import React, { useState, useEffect } from "react";
import "./Payment.css";
import BasketItem from "../Checkout Page/Basketitem";
import { useDataLayerValue } from "../../Context API/Datalayer";
import Subtotal from "../Checkout Page/Subtotal";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

function Payment() {
  const [{ user, cart }, dispatch] = useDataLayerValue();
  var carttotal = 0;

  cart?.map((item) => {
    carttotal += item?.price * item.qty;
  });

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succedded, setSuccedded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSeceret] = useState(true);

  useEffect(() => {
    const getClientSeceret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${carttotal * 100}`,
      });
      setClientSeceret(response.data.clientSeceret);
    };
    getClientSeceret();
  }, [cart]);

  const handleSumbit = async (event) => {
    event.preventDetault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSuccedded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
            <form onSubmit={handleSumbit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price_container">
                <Subtotal cart={cart} />
                <button disabled={processing || disabled || succedded}>
                  <span>{processing ? <p>Processing</p> : <p>Buy Now</p>}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
