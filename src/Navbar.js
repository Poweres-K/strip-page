import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const {
    sublinks,
    handleChageSubMenu,
    setSubMenu,
    setshowSideBar,
    showSideBar,
  } = useGlobalContext();

  return (
    <div className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" />
          <button
            className="btn toggle-btn"
            onClick={() => {
              setshowSideBar(!showSideBar);
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            return (
              <li
                className="link-btn"
                key={index}
                onMouseEnter={(e) => {
                  handleChageSubMenu({ e, index });
                }}
                onMouseLeave={() => {
                  setSubMenu(false);
                }}
              >
                {link.page}
              </li>
            );
          })}
        </ul>

        <button className="btn signin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
