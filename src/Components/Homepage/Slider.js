import React, { useRef, useState } from "react";
import "./Slider.css";
import Product_card from "./Product_card";
import { ArrowBackIos } from "@material-ui/icons";
import { ArrowForwardIos } from "@material-ui/icons";

function Slider({ items }) {
  const slider = useRef(null);
  const singleslidewidth = 100 / items.length;
  var currentposition = 0;
  var count = 0;

  const handleClick = (side) => {
    if (side === "right" && count < items.length - 1) {
      slider.current.style.transform = `translateX(${
        currentposition - singleslidewidth
      }%)`;
      currentposition -= singleslidewidth;
      count++;
    } else if (side === "left" && count > 0) {
      slider.current.style.transform = `translateX(${
        currentposition + singleslidewidth
      }%)`;
      currentposition += singleslidewidth;
      count--;
    }
  };

  return (
    <div className="product_container">
      <div className="arrow arrow_left">
        <div
          className={
            count === 0
              ? "arrow_div left_arrow_div disable"
              : "arrow_div left_arrow_div enable"
          }
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowBackIos className="arrow_icon" />
        </div>
      </div>
      <div
        className="product_slider"
        ref={slider}
        style={{ width: `${items.length * 100}%` }}
      >
        {items.map((product) => {
          return (
            <Product_card
              product={product}
              key={product.id}
              cardwidth={singleslidewidth}
            />
          );
        })}
      </div>
      <div className="arrow arrow_right">
        <div
          className={
            count === items.length - 2
              ? "arrow_div right_arrow_div disable"
              : "arrow_div right_arrow_div enable"
          }
          onClick={() => {
            handleClick("right");
          }}
        >
          <ArrowForwardIos className="arrow_icon" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
