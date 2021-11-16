import React, {useState} from 'react';


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Login from "./components/Layout/Sign/SignIn";
import SignUp from "./components/Layout/Sign/signup";
import Acceuil from "./components/Home/index";
import Pro from "./Home/Home";
import Sidebar from "./components/Layout/SideBar";
import Navbar from "./components/Layout/Navbar/Index";
import Footer from "./components/Layout/Footer/index";
import  Product from "./components/context/Product/index";
import Home from './Home/Home';
import  Products from "./components/context/Products/index";
import Exclusive from "./components/Home/Exclusive";
import Contact from "./components/Home/Contact";
import  { productData} from "./components/context/Product/data";
import  { productsData} from "./components/context/Products/data";
import { connect } from 'react-redux';



function App() {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (<Router>
    <div className="App">
     
    <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Acceuil} />
            <Route path="/Accueil" component={Acceuil} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Product" component={Pro} />
            <Route path="/Footer"  component={Footer} />
            <Route path="/Product-Page" component={Pro} />
            <Route path="/Exclusive" component={Exclusive} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Pro" component={Pro} />
            <Pro/>
          </Switch>
        </div>
        
        <Footer/>
    </div></Router>
  );
}


export default  App;
