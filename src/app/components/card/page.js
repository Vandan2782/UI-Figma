"use client";
import React from "react";
import Image from "next/image";

const CardLink = ({ title, linkText, imageSrc, onClick }) => {
  return (
    <div className="cardLink">
      <p className="innerCarddText">{title}</p>
      <p className="lowerGreeenTxt" onClick={onClick}>
        {linkText} <i className="fa-solid fa-chevron-right"></i>
      </p>
      {imageSrc && (
        <Image src={imageSrc} alt="cardImg" className="cardImage" />
      )}
    </div>
  );
};

export default CardLink;
