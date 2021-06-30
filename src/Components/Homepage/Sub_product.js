import React from "react";
import "./Sub_product.css";

function Sub_product({ image, title }) {
  return (
    <div className="sub_product">
      <img src={image} alt="sub_product_image" className="sub_product_image" />
      {title || <h1 className="sub_product_title">{title}</h1>}
    </div>
  );
}

export default Sub_product;
