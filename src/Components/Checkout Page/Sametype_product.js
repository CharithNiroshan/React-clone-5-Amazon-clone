import React from "react";
import "./Sametype_product.css";
import Rating from "./Rating";

function Sametype_product({
  image,
  title,
  rating,
  no_of_reviews,
  type,
  price,
}) {
  return (
    <div className="same_type_product">
      <img src={image} className="same_type_product_image" />
      <div className="same_type_product_details">
        <h1 className="same_type_product_title">{title}</h1>
        <div className="same_type_product_rating">
          <Rating rating={rating} />
          <span className="same_type_product_no_of_reviews">
            {no_of_reviews}
          </span>
        </div>
        <h3 className="same_type_product_type">{type}</h3>
        <h4 className="same_type_product_price"> ${price}</h4>
        <button className="same_type_product_button"> Add to Cart</button>
      </div>
    </div>
  );
}

export default Sametype_product;
