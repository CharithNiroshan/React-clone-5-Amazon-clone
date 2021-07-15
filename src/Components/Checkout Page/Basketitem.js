import React, { useState } from "react";
import "./Basketitem.css";
import { useDataLayerValue } from "../../Context API/Datalayer";

function Basketitem({
  image,
  title,
  owner,
  price,
  type,
  stock_status,
  index,
  qty,
}) {
  const [{}, dispatch] = useDataLayerValue();

  const [quantity, setQuantity] = useState(qty);

  const hanldeClick = () => {
    dispatch({
      type: "DELETE_ITEM",
      index: index,
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      item: {
        index: index,
        value: e.target.value,
      },
    });
    setQuantity(e.target.value);
  };

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
          <label htmlFor="quantity">Qty</label>
          <select
            aria-label="Qty"
            id="quantity"
            name="quantity"
            onChange={(e) => handleChange(e)}
            value={quantity}
          >
            {Array(10)
              .fill(1, 1)
              .map((_, i) => {
                return <option value={i}>{i}</option>;
              })}
          </select>
        </div>
        <h3 className="delete_item" onClick={() => hanldeClick()}>
          Delete
        </h3>
      </div>
    </div>
  );
}

export default Basketitem;
