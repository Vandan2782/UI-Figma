import React from "react";
import Navbar from "./components/navbar/page";
import Dashboard from "./dashboard/page";
import Footer from "./components/footer/page";
import Carousal from "./components/carousal/page";
import Work from "./work/page";

const page = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Work/>
      <Carousal />
      <Footer />
    </>
  );
};

export default page;
