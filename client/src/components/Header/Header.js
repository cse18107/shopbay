import React from "react";
import "./Header.css";
import SearchLogo from "../../img/loupe.png";
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-body">
      <div className="header-container">
        <div className="header-container_logo">
          <Link className="link" to={'/'}><h1>SHOPBAY</h1></Link>
        </div>
        <div className="header-container_searchbar">
          <div className="search-component">
            <div className="search_image">
              <div className="img">
                <img src={SearchLogo} alt="search" />
              </div>
            </div>
            <input />
          </div>
        </div>
        <div className="header-container_links">
          <div className="header-container_links--link">
            <NavLink className="link" activeClassName="active" to={'/'}><h4>Home</h4></NavLink>
          </div>
          <div className="header-container_links--link">
            <NavLink className="link" activeClassName="active" to={'/products'}><h4>Products</h4></NavLink>
          </div>
          <div className="header-container_links--link">
            <NavLink className="link" activeClassName="active" to={'/cart'}><h4>Cart</h4></NavLink>
          </div>
          <div className="header-container_links--link">
            <NavLink className="link" activeClassName="active" to={'/orders'}><h4>Orders</h4></NavLink>
          </div>
          <div className="header-container_links--link">
            <h4>Login/SignIn</h4>
          </div>
        </div>
      </div>
      <div className="quick-links">
        <div className="quick-links__container">
          <div className="quick-link">TV</div>
          <div className="quick-link">Phone</div>
          <div className="quick-link">Mouse</div>
          <div className="quick-link">Keyboard</div>
          <div className="quick-link">Washing Machine</div>
          <div className="quick-link">Kitchen</div>
          <div className="quick-link">Book</div>
          <div className="quick-link">Sport</div>
          <div className="quick-link">Men</div>
          <div className="quick-link">Women</div>
          <div className="quick-link">Kid</div>
          <div className="quick-link">Laptops</div>
          <div className="quick-link">Fridge</div>
          <div className="quick-link">Headphone</div>
          <div className="quick-link">Fitness</div>
          <Link className="link" to={'/products'}>More</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
