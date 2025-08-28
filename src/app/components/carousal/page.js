"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import Image from "next/image";
import star from "../../../assets/images/star.png";
import starRight from "../../../assets/images/starRight.png";
import { cardData } from "@/app/json/data";

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Adjust number of cards based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 480) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow(); // run on load
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    if (currentIndex < cardData.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="carousalSec ptb-40">
      {/* Header */}
      <div className="textBtnSec mlr-20">
        <p className="peopleTxt">What people are saying about LeadCRM</p>
        <div className="btn d-flex gap-3">
          <button
            className={`btnLeft ${currentIndex === 0 ? "disabled" : ""}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className={`btnRight ${
              currentIndex >= cardData.length - cardsToShow ? "disabled" : ""
            }`}
            onClick={nextSlide}
            disabled={currentIndex >= cardData.length - cardsToShow}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="carouselWrapper mlr-20 ptb-40">
        <div
          className="carouselInner"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {cardData.map((item) => (
            <div
              className="card1"
              key={item.id}
              style={{ flex: `0 0 calc(100% / ${cardsToShow})` }}
            >
              {/* Upper Text */}
              <p className="upperTxtSection">“{item.text}“</p>

              {/* Stars */}
              <div className="starSec">
                <div className="leftSideStar">
                  <Image src={star} alt="star" className="starImage" />
                </div>
                <div className="rightSideStar">
                  {[...Array(item.stars)].map((_, i) => (
                    <Image
                      key={i}
                      src={starRight}
                      alt="star"
                      className="starImage"
                    />
                  ))}
                </div>
              </div>

              {/* Profile Section */}
              <div className="profileSec">
                <div className="leftSecImage">
                  <Image
                    src={item.avatar}
                    alt="userImage"
                    className="img-fluid"
                  />
                </div>
                <div className="rightSideUserName">
                  <p className="userName">{item.name}</p>
                  <p className="userRole">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
