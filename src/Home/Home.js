import { useState } from "react";
import React from "react";
import data from "../data.json";
import Products from "./Products";
import Filter from "./Filter";
import Cart from "./Cart";
import Navbar from "../components/Layout/Navbar/Index"
import Footer from "../components/Layout/Footer/index"
import "../index.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from "../components/Layout/SideBar";
import { FaHandHoldingHeart } from "react-icons/fa";



class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      city: "",
      sort: "",
    };
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  sortProducts = (event) => {
    // impl
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (event) => {
    // impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ city: event.target.value, products: data.products });
    } else {
      this.setState({
        city: event.target.value,
        products: data.products.filter(
          (product) => product.availableCity.indexOf(event.target.value) >= 0
        ),
      }); 
    }
  };

  
  render() {
    return (
      <div className="grid-container">
        
        <main>
          <div className="content1">
            <div className="main1">
              <Filter
                count={this.state.products.length}
                city={this.state.city}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <div className="searchBar"> Search Result</div>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar1">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
