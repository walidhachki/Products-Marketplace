import React from "react";
import ReactDOM from "react-dom";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./Header";
import Category from "./Category";
import SearchBar from "./SearchBar";
import Exclusive from "./Exclusive";
import ClientReaction from "./ClientReaction";
import Populaire from "./Populaire";
import Contact from "./Contact";
import FooterHome from "./FooterHome";

//Calling WOWjs
import WOW from "wowjs";
import { Route } from "react-router-dom";
class index extends React.Component {
    // Defining WOW 
        componentDidMount() {
           
                const wow = new WOW.WOW({
                  live: false,
                })
                wow.init()
              
        }
 
  render() {
    return (
      <div className="main_container">
        <Header/>
        <main>
             <Category/>
             <SearchBar/>
             <Exclusive/>
             <Populaire/>
             <ClientReaction/>
             <Contact/>
        </main>
      </div>
    );
  }
}
export default index;