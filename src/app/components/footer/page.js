import React from "react";
import "./style.css";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import chrome from "../../../assets/images/chrome.png";

const Footer = () => {
  return (
    <>
      <div className="footerSec">
        <div className="row col-12 ">
          <div className="col-md-2">
            <Image src={logo} alt="logoFooter" />
            <p className="footerTxt mt-3">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>

            <div className="socialIconSec mt-3">
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="rightSection mlr-20">
              <div className="innerLinksFooter">
                <div className="integration">
                  <p className="headTxt">Integrations</p>
                  <p className="belowTxtFooter">Hubspot</p>
                  <p className="belowTxtFooter">Salesforce</p>
                  <p className="belowTxtFooter">Pipedrive</p>
                  <p className="belowTxtFooter">
                    Close.io <span className="csTxt">Coming Soon</span>
                  </p>
                  <p className="belowTxtFooter">
                    Insightly <span className="csTxt">Coming Soon</span>
                  </p>
                </div>
                <div className="alternative">
                  <p className="headTxt">Alternative</p>
                  <p className="belowTxtFooter">Surfe VS LeadCRM</p>
                  <p className="belowTxtFooter">Linkmatch Alternative</p>
                </div>
                <div className="legal">
                  <p className="headTxt">Legal</p>
                  <p className="belowTxtFooter">Privacy Policy</p>
                  <p className="belowTxtFooter">Terms of Use</p>
                </div>
                <div className="contactus">
                  <p className="headTxt">Contact Us</p>
                  <p className="belowTxtFooter">
                    <span>
                      <i className="fa-solid fa-envelope-open-text email"></i>
                    </span>{" "}
                    support@leadcrm.io
                  </p>
                  <p className="belowTxtFooter">
                    <span>
                      <i className="fa-solid fa-phone-volume email"></i>
                    </span>{" "}
                    +1 231-538-7466
                  </p>
                  <p className="belowTxtFooter">
                    <span>
                      <i className="fa-solid fa-circle-question email"></i>
                    </span>{" "}
                    Help Center
                  </p>
                  <div className="chrome mt-3">
                    <span className="textChrome">Available in Chrome</span>
                    <span className="imgChrome">
                      <Image src={chrome} alt="chromeImg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerLowerTxt mt-3">
          <p className="text-center lower">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
            LinkedIn(tm) logos and trademarks displayed on this tool are
            property of LinkedIn. LeadCRM is distributed AS IS. Your use of
            LeadCRM is at your own risk.
          </p>
        </div>

        <div className="copyRightTxt">
            <p className="text-center copyTxt">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
