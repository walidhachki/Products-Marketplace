import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="container-filter">
        <div className="filter">
        <div className="filter-result">{this.props.count} Products found</div>
        <div className="filter-sort">
          
              <div class="search">
                  <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                  <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
                  </button>
              </div>
        </div>
      </div>
      
      <div className="filter1">
        
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-city">
          City{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Fes">Fes</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Kenitra">Kenitra</option>
            <option value="Tanger">Tanger</option>
          </select>
        </div>
          
        <div className="filter-city">
          Category{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="Casablanca">Computer </option>
            <option value="Rabat">Laptops</option>
            <option value="Fes">cell Phone </option>
            <option value="Marrakech">Headphones</option>
            <option value="Kenitra">Controllers</option>
            <option value="Tanger">Pc Gamer</option>
          </select>
        </div>
      </div>
      </div>
    );
  }
}
