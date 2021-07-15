import React, { useState } from "react";
import "./Subtotal.css";

function Subtotal({ cart }) {
  var _subtotal = 0;

  cart?.map((item) => {
    _subtotal += item?.price * item.qty;
  });

  return (
    <h2 className="subtotal">
      Subtotal ( {cart?.length} items ):
      <span className="subtotal_price"> $ {_subtotal.toFixed(2)}</span>
    </h2>
  );
}

export default Subtotal;
