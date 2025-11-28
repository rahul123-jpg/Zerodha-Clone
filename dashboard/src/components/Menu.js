import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); // close menu after clicking
  };

  const toggleProfile = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="menu-container">

      {/* Logo Left */}
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />

      {/* Hamburger (Mobile Only) */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className={isMobileMenuOpen ? "bar change1" : "bar"}></div>
        <div className={isMobileMenuOpen ? "bar change2" : "bar"}></div>
        <div className={isMobileMenuOpen ? "bar change3" : "bar"}></div>
      </div>

      {/* Menus */}
      <div className={`menus ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* Profile */}
        <div className="profile" onClick={toggleProfile}>
          <div className="avatar"></div>
          <p className="username">USERID</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
          
             <a className="text" href="https://zeodha-landing-pagef2.netlify.app/">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
