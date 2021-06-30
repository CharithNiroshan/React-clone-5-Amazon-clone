import React from "react";
import "./Product.css";
import Sub_product from "./Sub_product";

function Product({ title, products }) {
  return (
    <div className="product">
      <h1 className="product_title">{title}</h1>
      {products.length === 1 ? (
        <img
          src={products[0].image}
          alt="sub_product_image"
          className="product_image"
        />
      ) : (
        <div className="sub_product_container">
          {products.map((product) => {
            return <Sub_product image={product.image} title={product.title} />;
          })}
        </div>
      )}
      <a href="sdsad" className="product_more_button">
        See more
      </a>
    </div>
  );
}

export default Product;
