import React from "react";
import Navbar from "./components/navbar/page";
import Dashboard from "./dashboard/page";
import Footer from "./components/footer/page";
import Carousal from "./components/carousal/page";
import Work from "./work/page";
import Sales from "./sales/page";
import LeadCRM from "./leadCrm/page";
import SupportedCrm from "./crmSupport/page";
import Challenges from "./challenges/page";

const page = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Challenges/>
      <Work/>
      <Carousal />
      <Sales/>
      <SupportedCrm/>
      <LeadCRM/>
      <Footer />
    </>
  );
};

export default page;
