import React from "react";
import "./style.css";
import Image from "next/image";

// Numbers
import One from "../../assets/images/one.png";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.png";
import Four from "../../assets/images/4.png";

// Card Images
import cardOneImg from "../../assets/images/cardOneImg.png";
import cardTwoImg from "../../assets/images/CardTwo.png";
import cardThreeImg from "../../assets/images/CardThree.png";
import cardFourImg from "../../assets/images/CardFour.png";
import { Bungee_Outline } from "next/font/google";
import Balls from "../../assets/images/Ball.png"

const Work = () => {
  const steps = [
    {
      num: One,
      title: "Install the Extension",
      desc: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      img: cardOneImg,
    },
    {
      num: Two,
      title: "Browse LinkedIn",
      desc: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      img: cardTwoImg,
    },
    {
      num: Three,
      title: "Get Enriched Data",
      desc: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      img: cardThreeImg,
    },
    {
      num: Four,
      title: "Sync to CRM Instantly",
      desc: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
      img: cardFourImg,
    },
  ];

  return (
    <div className="workSection ptb-40">
      <p className="mainTxt">How it Works</p>
      <p className="lowerTxt">
        From setup to success in{" "}
        <span className="lowerBold">4 simple steps</span>
      </p>

      <div className="row cardSection">
        {steps.map((step, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="cardOne h-100">
              <div className="middleSec">
                <Image src={step.num} alt={`step-${index + 1}`} />
                <p className="installTxt mt-3">{step.title}</p>
                <p className="lowerTxt">{step.desc}</p>
              </div>
              <div className="lowerImg">
                <Image src={step.img} alt={`img-${index + 1}`} className="img-fluid" />
              </div>
            </div>
          </div>
        ))}
      </div>
            <div className="lowerBtnTxt text-center">
            <button className="tryBtn">Try LeadCRM Now{" "}<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <Image src={Balls} alt="ball" className="img-fluid ball"/>
    </div>
  );
};

export default Work;
