import React from "react";
import "./Home.css";
import Image from "../../Assets/Slider Images/1.jpg";
import Product from "./Product";
import top_product_details from "../Data/top_product_details";
import Product_row from "./Product_row";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={Image} alt="image1" className="home_image" />
        <div className="home_row">
          {top_product_details.map((product) => {
            if (product.row === true) {
              return (
                <Product_row
                  key={product.id}
                  title={product.title}
                  images={product.images}
                />
              );
            } else {
              return (
                <Product
                  key={product.id}
                  title={product.title}
                  products={product.products}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
