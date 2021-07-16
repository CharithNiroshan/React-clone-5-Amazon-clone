import React from "react";
import "./Product.css";
import Slider from "./Slider";

function Product({ title, products }) {
  return (
    <div className="product">
      <h1 className="product_title">{title}</h1>
      {products.length === 1 ? (
        <>
          <img
            src={products[0].image}
            alt="sub_product_image"
            className="product_image"
          />
          <a href="sdsad" className="product_more_button">
            See more
          </a>
        </>
      ) : (
        <Slider items={products} />
      )}
    </div>
  );
}

export default Product;
