import React from "react";
import "./Basketitem.css";

function Basketitem({ image, title, owner, price, type, stock_status }) {
  const handleChange = (e) => {
    console.log(e);
  };

  const handleClick = () => {};

  return (
    <div className="basketitem">
      <img src={image} className="basketitem_image" />
      <div className="basketitem_details">
        <h1 className="basketitem_title">{title}</h1>
        <h2 className="basketitem_owner">{owner}</h2>
        <h3 className="basketitem_price">${price}</h3>
        <h4 className="basketitem_type">{type}</h4>
        <h4 className="basketitem_stock_status">
          {stock_status ? "In Stock" : "Out of Stock"}
        </h4>
        <div className="basketitem_quantity">
          <label for="quantity">Qty</label>
          <select
            aria-label="Qty"
            id="quantity"
            name="quantity"
            onChange={(e) => handleChange(e)}
          >
            {Array(10)
              .fill(1, 1)
              .map((_, i) => {
                return <option value={i}>{i}</option>;
              })}
          </select>
        </div>
        <h3 className="delete_item" onClick={handleClick()}>
          Delete
        </h3>
      </div>
    </div>
  );
}

export default Basketitem;
