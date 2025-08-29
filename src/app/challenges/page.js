import React from 'react';
import Image from 'next/image';
import './style.css';
import crm from '../../assets/crm.webp';
import crmRight from "../../assets/images/crmRight.webp";
import ai from "../../assets/images/ai.jpg"
import books from "../../assets/images/books.png"
import contact from "../../assets/images/contact.png"
import refresh from "../../assets/images/refresh.jpg"
import TryButton from '../components/button/tryButton';
import arrow from "../../assets/images/arrow.png"

const Challenges = () => {
  return (
    <>
      <div className="comparisonSection ptb-80 ">
        <p className="comparisonHeading text-center">
          Every LinkedIn Prospector faces these daily challenges
        </p>

        <div className="comparisonWrapper">
          {/* Left Side */}
          <div className="comparisonCard leftCard">
            <div className="cardImg">
              <Image src={crm} alt="Without LeadCRM" className="img-fluid" />
            </div>
            <div className="cardHeader">Without LeadCRM</div>
            <ul className="cardList">
              <li>
                <span className="red"><i className="fa-solid fa-xmark"></i></span>
                <b> Manual Data Entry </b>
                <span className="highlight">3+ Hours wasted daily</span>
                <p className='leftMargin'>
                  Copying LinkedIn contacts to CRM manually plus losing
                  conversation history.
                </p>
              </li>
              <li>
                <span className="red"><i className="fa-solid fa-xmark"></i></span>
                <b> Incomplete Data </b>
                <span className="highlight">60% Data Incomplete</span>
                <p className='leftMargin'>
                  LinkedIn profiles missing Email and Phones from 700M+ Database.
                </p>
              </li>
              <li>
                <span className="red"><i className="fa-solid fa-xmark"></i></span>
                <b> No CRM Visibility </b>
                <span className="highlight">Zero context available</span>
                <p className='leftMargin'>
                  Can’t see existing CRM contacts when browsing LinkedIn profiles.
                </p>
              </li>
              <li>
                <span className="red"><i className="fa-solid fa-xmark"></i></span>
                <b> Limited Productivity </b>
                <span className="highlight">No smart assistance</span>
                <p className='leftMargin'>
                  Writing messages manually plus no AI assistant for reply, Invite
                  or comments.
                </p>
              </li>
            </ul>
          </div>

          {/* VS */}
          <div className="vsWrapper">
            <div className="vsLine"></div>
            <div className="vsText">VS</div>
          </div>

          {/* Right Side */}
          <div className="comparisonCard rightCard">
            <div className="cardImg">
              <Image src={crmRight} alt="With LeadCRM" className="img-fluid" />
            </div>
            <div className="cardHeader green">With LeadCRM{" "}<span><div className="savedTime">+4 Hours/day Saved</div></span></div>
            
            <ul className="cardList">
              <li>
                <span className="green"><Image src={refresh} alt='ai'/></span>
                <b> Complete Bi-Directional Sync </b>
                <p className='leftMarginRight'>
                  Automatically sync contacts, messages, and notes between LinkedIn
                  and your CRM in real time.
                </p>
              </li>
              <li>
                <span className="green"><Image src={contact} alt='ai'/></span>
                <b> 700M+ Contacts + Enrichment </b>
                <p className='leftMarginRight'>
                  Get verified emails and phone numbers from a vast global database.
                </p>
              </li>
              <li>
                <span className="green"><Image src={books} alt='ai'/></span>
                <b> CRM Overlay on LinkedIn </b>
                <p className='leftMarginRight'>
                  See full CRM insights directly on LinkedIn profiles without
                  switching tabs.
                </p>
              </li>
              <li>
                <span className="green"><Image src={ai} alt='ai'/></span>
                <b> AI Response + Templates + Bulk Exports </b>
                <p className='leftMarginRight'>
                  Save time with AI-crafted replies, pre-built templates, and
                  one-click data exports.
                </p>
              </li>
            </ul>
          </div>
        </div>
         <div className="lowerBtnTxt text-center ptb-40">
        <TryButton text="Get a Free Account Now"/>
        <Image src={arrow} alt='arrow' className='arrowbtn'/>
        <p className='textArrow'>Save 40+ hours <br/> every Month</p>
      </div>
      </div>
    </>
  );
};

export default Challenges;
