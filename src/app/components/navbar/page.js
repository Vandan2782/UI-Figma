"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../../../assets/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbarTop ${scrolled ? "scrolled" : ""}`}>
    
      <div className="leftLogoSec">
        <Image src={logo} alt="logo" className="logoImg" priority />
      </div>

     
      <div className="toggleMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

    
      <div className={`menuContainer ${menuOpen ? "active" : ""}`}>
        <div className="middleLinkSec">
          <p className="liColor">
            Product <i className="fa-solid fa-chevron-down"></i>
          </p>
          <p className="liColor">Pricing</p>
          <p className="liColor">
            Resources <i className="fa-solid fa-chevron-down"></i>
          </p>
          <p className="liColor">
            Company <i className="fa-solid fa-chevron-down"></i>
          </p>
        </div>

        <div className="btnSection">
          <button className="getAccBtn">Get Your Free Account</button>
          <button className="loginBtn">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
