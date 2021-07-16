import React from "react";
import "./Sametype_product.css";
import Rating from "../Rating";
import { useDataLayerValue } from "../../Context API/Datalayer";

function Sametype_product({ product }) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM",
      item: product,
    });
  };

  return (
    <div className="same_type_product">
      <img src={product?.image} className="same_type_product_image" />
      <div className="same_type_product_details">
        <h1 className="same_type_product_title">{product?.title}</h1>
        <div className="same_type_product_rating">
          <Rating rating={product.rating} />
          <span className="same_type_product_no_of_reviews">
            {product?.no_of_reviews}
          </span>
        </div>
        <h3 className="same_type_product_type">{product?.type}</h3>
        <h4 className="same_type_product_price"> ${product?.price}</h4>
        <button
          className="same_type_product_button"
          onClick={() => handleClick()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Sametype_product;
