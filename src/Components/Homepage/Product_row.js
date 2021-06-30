import React from "react";
import "./Product_row.css";
import Carousel from "react-elastic-carousel";

function Product_row({ title, images }) {
  const breakpoints = [
    {
      width: 500,
      itemsToShow: 5,
    },
    {
      width: 768,
      itemsToShow: 6,
    },
    {
      width: 1200,
      itemsToShow: 7,
    },
    {
      width: 1500,
      itemsToShow: 8,
    },
  ];

  return (
    <div className="product_row">
      <div className="product_row_details">
        <h1>{title}</h1>
        <a href="sdasd"> Shop Now</a>
      </div>
      <div className="product_row_container">
        <Carousel breakPoints={breakpoints}>
          {images.map((image) => {
            return (
              <a href="sdsd">
                <img src={image} />
              </a>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Product_row;
