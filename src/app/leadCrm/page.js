import React from "react";
import "./style.css";
import Image from "next/image";
import banner from "../../assets/images/banner.jpg";
import TryButton from "../components/button/tryButton";
import Collabration from "../../assets/images/Collabration.png"

const LeadCRM = () => {
  return (
    <>
  <div className="ptb-80">
        <div className="ptb-40 leadCRM">
        <p className="crmTxt">Join Thousands of Professionals Using LeadCRM</p>
        <Image src={Collabration} alt="coll" className="collbration"/>
        <div className="bannerWrapper">
          <Image src={banner} alt="bannerImg" className="bannerImg" />
        </div>

        <div className="lowerBtnTxt text-center ptb-40">
          <TryButton text="Get Started Today" />
        </div>
      </div>
  </div>
    </>
  );
};

export default LeadCRM;
