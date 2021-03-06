import React,{useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages/index'
import SignInPage from './pages/signin';
import Navbar from './components/Navbar/index';
import SideBar from './components/Sidebar';

function App() {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => {
     setIsOpen(!isOpen);
   };
  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Switch>
        {/* <Home/> */}
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
