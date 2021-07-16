import React from "react";
import "./Product_card.css";
import Rating from "../Rating";
import { useDataLayerValue } from "../../Context API/Datalayer";

function Product_slider({ product, cardwidth }) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM",
      item: product,
    });
  };

  return (
    <div className="product_card" style={{ width: `${cardwidth}%` }}>
      <img src={product?.image} className="product_card_image" />
      <div className="product_card_details">
        <h1 className="product_card_title">{product?.title}</h1>
        <div className="product_card_rating">
          <Rating rating={product?.rating} />
          <span className="product_card_no_of_reviews">
            {product?.no_of_reviews}
          </span>
        </div>
        <h3 className="product_card_type">{product?.type}</h3>
        <h4 className="product_card_price"> ${product?.price}</h4>
        <button className="product_card_button" onClick={() => handleClick()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product_slider;
