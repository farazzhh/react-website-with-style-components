import React,{useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import InfoSection from '../components/infoSection/index.js'
import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
} from "../components/infoSection/Data.js";
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> {
      setIsOpen(!isOpen)
      console.log('clicked');
    }
    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        {/* <Navbar toggle={toggle} /> */}
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjFour} />
       <Footer/>
      </>
    );
}

export default Home
