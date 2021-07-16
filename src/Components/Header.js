import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../Context API/Datalayer";
import { auth } from "../Firebase/Firebase";

function Header() {
  const [{ cart, user }, dispatch] = useDataLayerValue();
  const linkstyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "1vw",
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="logo"
        />
      </Link>
      <div className="delivery_place">
        <LocationOnIcon className="location_icon" />
        <div className="header_field" style={{ marginLeft: "5px" }}>
          <span className="header_field_line_one">Deliver to</span>
          <span className="header_field_line_two">Sri Lanka</span>
        </div>
      </div>
      <div className="search_bar">
        <input type="text" className="search_input" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_details">
        <div className="header_field">
          <span className="header_field_line_one ">
            Hello, {user ? user.email : "Guest"}
          </span>
          <Link
            to={user || "/login"}
            style={linkstyles}
            onClick={() => handleAuthentication()}
          >
            <span className="header_field_line_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>
        <div className="header_field">
          <span className="header_field_line_one">Returns </span>
          <Link to="/orders" style={linkstyles}>
            <span className="header_field_line_two">& Orders</span>
          </Link>
        </div>
        <Link to="/checkout">
          <div className="cart">
            <AddShoppingCartIcon className="cart_icon" />
            <div className="cart_count">
              <span className="cart_count_value">{cart?.length}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
