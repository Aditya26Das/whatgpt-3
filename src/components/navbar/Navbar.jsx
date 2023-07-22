import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="">
      <div className="gpt3__navbar-links gpt3__navbar">
        <div className="gpt3__navbar-links_logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a  href="#">Home</a></p>
          <p><a  href="#wgpt3">What is GPT ?</a></p>
          <p><a  href="#possibility">Open AI</a></p>
          <p><a  href="#features">Case Studies</a></p>
          <p><a  href="#blog">Library</a></p>
        </div>
        <div className="gpt3__navbar-links-signin">
          <button
            onClick={() => {
              document.location = "#signin";
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              document.location = "#signup";
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-centre">
              <div className="gpt3__navbar-menu_container-links">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#wgpt3">What is GPT ?</a></li>
                  <li><a href="#possibility">Open AI</a></li>
                  <li><a href="#blog">Library</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
