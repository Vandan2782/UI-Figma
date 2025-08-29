"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";

// images
import robot from "../../assets/images/robot.jpg";
import crm from "../../assets/images/crm.jpg";
import ai from "../../assets/images/al.jpg";
import bulk from "../../assets/images/bulk.jpg";
import refresh from "../../assets/images/refresh.jpg";
import card from "../../assets/images/cardImg.jpg";
// import card2 from "../../assets/images/cardTwo.jpg";
// import card3 from "../../assets/images/cardThree.jpg";
// import card4 from "../../assets/images/cardFour.jpg";

import CardLink from "../components/card/page";

const Sales = () => {
  // active tab state
  const [activeTab, setActiveTab] = useState("crm");

  // tab data
  const tabs = [
    {
      key: "crm",
      label: "CRM Data Enrichment",
      icon: crm,
      cards: [
        {
          title: "Here is how LeadCRM tackles data enrichment.",
          linkText: "Try LeadCRM Data Enrichment",
          imageSrc: card,
        },
        {
          title: "Not enough? Try Advanced Waterfall Enrichment.",
          linkText: "Learn More",
          imageSrc: card,
        },
      ],
    },
    {
      key: "sync",
      label: "CRM Data Sync",
      icon: refresh,
      cards: [
        {
          title: "Keep your CRM data always fresh and synced.",
          linkText: "Enable Data Sync",
          imageSrc: card,
        },
        {
          title: "Prevent data duplication and errors automatically.",
          linkText: "See How",
          imageSrc: card,
        },
      ],
    },
    {
      key: "bulk",
      label: "Bulk Export & Enrichment",
      icon: bulk,
      cards: [
        {
          title: "Export leads in bulk & enrich with accurate data.",
          linkText: "Bulk Export Now",
          imageSrc: card,
        },
        {
          title: "Save time with automation at scale.",
          linkText: "Get Started",
          imageSrc: card,
        },
      ],
    },
    {
      key: "ai",
      label: "AI Productivity",
      icon: ai,
      cards: [
        {
          title: "Boost your workflow with AI-driven insights.",
          linkText: "Try AI Tools",
          imageSrc: card,
        },
        {
          title: "Automate repetitive tasks using AI.",
          linkText: "Explore AI",
          imageSrc: card,
        },
      ],
    },
  ];


  const currentTab = tabs.find((t) => t.key === activeTab);

  return (
    <div className="linkdinSalesSec">
     
      <div className="headingSection">
        <Image src={robot} alt="robotImg" className="robotImg" />
        <p className="text-center headingTxt">
          Complete LinkedIn Sales Solutions
        </p>
        <p className="text-center headingTxtLower">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>

    
      <div className="linkSection mlr-20 d-flex">
        {tabs.map((tab) => (
          <p
            key={tab.key}
            className={`linkSecLink ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>
              <Image src={tab.icon} alt={`${tab.label}-icon`} />
            </span>
            {tab.label}
          </p>
        ))}
      </div>

      <div className="lowerLinkSec mlr-20 ptb-40">
        <p className="lowerContent">
          It’s hard to find the accurate contact data for every prospect with{" "}
          <span className="redBadge">Incomplete Data</span>
        </p>

        <div className="row">
          {currentTab.cards.map((card, idx) => (
            <div key={idx} className="col-md-6 col-12 mt-3">
              <CardLink
                title={card.title}
                linkText={card.linkText}
                imageSrc={card.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
