"use client";
import React from "react";
import './style.css'

const TryButton = ({ text, onClick }) => {
  return (
    <button className="tryBtn" onClick={onClick}>
      {text} <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
};

export default TryButton;
