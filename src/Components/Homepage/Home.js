import React from "react";
import "./Home.css";
import Product from "./Product";
import top_product_details from "../../Assets/Data/top_product_details";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt="image1"
          className="home_image"
        />
        <div className="home_row">
          {top_product_details.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                products={product.items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
