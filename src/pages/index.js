import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/infoSection/index.js";
import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
} from "../components/infoSection/Data.js";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
