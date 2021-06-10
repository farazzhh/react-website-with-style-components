import React,{useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> {
      setIsOpen(!isOpen)
      console.log('clicked');
    }
    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
      </>
    );
}

export default Home
