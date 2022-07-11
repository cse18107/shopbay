import React from "react";
import "./Header.css";
import SearchLogo from "../../img/loupe.png";

const Header = () => {
  return (
    <div className="header-body">
      <div className="header-container">
        <div className="header-container_logo">
          <h1>SHOPBAY</h1>
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
        <div className="header-container_links"></div>
      </div>
    </div>
  );
};

export default Header;
