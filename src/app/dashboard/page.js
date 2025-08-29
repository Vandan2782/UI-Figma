import React from "react";
import "./style.css";
import Image from "next/image";
import rocket from "../../assets/images/rocket.png";
import line from "../../assets/images/line.png";
import work from "../../assets/images/work.jpg";
import chromLogo from "../../assets/images/chrome.png";
import starBrown from "../../assets/images/starBrown.png"
import newRocket from "../../assets/images/newRocket.png"
import LowerCarousal from "../components/lowerCrousal/page";

const Dashboard = () => {
  return (
   <>
    <div className="dashboardSec ptb-40">
      {/* Top Section */}
      <div className="topSec">
        <Image src={rocket} alt="rocket" className="rocketImg" />
        <p>Thousands of Professionals using LeadCRM</p>
      </div>

      {/* Middle Section */}
      <div className="middleTxt text-center">
        <h2 className="textMiddle">
          LinkedIn CRM Integration <br />
          Capture, Sync and Enrich in{" "}
          <span className="blueTxt">
            Both Ways
            <Image src={line} alt="line" className="lineImg" />
          </span>
        </h2>

        <p className="lowerTxtDash m-3">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>
      </div>

  
      <Image src={work} alt="work" className="workImg" />
<div className="ratingSection">
    
      <div className="ratingsWrapper">
        <div className="ratingCard">
          <Image src={chromLogo} alt="Chrome" className="ratingIcon" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <span className="ratingText">5/5</span>
        </div>
        <div className="ratingCard">
          <Image src={newRocket} alt="App" className="ratingIcon" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />
          <Image src={starBrown} alt="stars" className="starsImg" />

          <span className="ratingText">5/5</span>
        </div>
      </div>

    
      <div className="btnWrapper">
        <button className="chromeBtn">
          <span>Available in</span>
          <strong> Chrome Web Store</strong>
          <Image src={chromLogo} alt="Chrome" className="chromeIcon" />
        </button>

        <button className="trialBtn">Get a Free Trial Now!</button>
      </div>
    </div>
    </div>
    <LowerCarousal/>
   </>
    
  );
};

export default Dashboard;
