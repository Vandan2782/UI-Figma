import React from "react";
import "./style.css";
import Image from "next/image";

import contactNew from "../../../assets/images/contactNew.png";

const LowerCarousal = () => {
  const cards = [
    { id: 1, img: contactNew, text: "Access to", span: "700M+ Contacts" },
    { id: 2, img: contactNew, text: "LinkedIn", span: "CRM Integration" },
    { id: 3, img: contactNew, text: "Auto", span: "Data Enrichment" },
    { id: 4, img: contactNew, text: "Real-time", span: "Data Sync" },
  ];

  return (
    <div className="lowerCarousal ptb-40 mt-2">
      <div className="scroll-container">
        <div className="scroll-content">
          {cards.concat(cards).map((card, index) => (
            <div
              key={card.id + "-" + index}
              className="card d-flex align-items-center p-3 shadow-sm mx-3"
            >
              <Image
                src={card.img}
                alt="Icon"
                className="featureIcon me-2"
                width={32}
                height={32}
              />
              <p className="featureText mb-0">
                {card.text}&nbsp;<span>{card.span}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowerCarousal;
