import React from "react";
import "./Product.css";

function Product({ title, products }) {
  return (
    <div className="product">
      <h1 className="product_title">{title}</h1>
      <img
        src={products[0].image}
        alt="sub_product_image"
        className="product_image"
      />
      <a href="sdsad" className="product_more_button">
        See more
      </a>
    </div>
  );
}

export default Product;
