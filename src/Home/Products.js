import React, { Component } from "react";
import formatCurrency from "./util";
import Fade from "react-reveal/Fade";
import {FaBars, FaEnvelope, FaCalendarAlt,FaPhoneSquareAlt, FaMapMarkerAlt} from 'react-icons/fa'
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products1">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product1">
                  <a
                    href={"#" + product._id}
                    onClick={() => this.openModal(product)}
                  >
                    <img src={product.image} alt={product.title}></img>
                
                  </a>
                  <p>{product.title}</p>
                  <div className="product-date">
                    <div>{product.availableCity} <FaMapMarkerAlt/></div>
                    <div>{product.date} <FaCalendarAlt/></div>
                  </div>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button1 primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Owner Informations: 
                    <div  style ={{margin : "10px"}}>{product.Owner}</div>
                    <div className="ownerInfo">
                       <div><FaEnvelope/>  {product.email}</div>
                       <div><FaPhoneSquareAlt/>  {product.phone}</div>
                    </div>
                  </p>
                  <p>
                    Avaiable Cities:{" "}
                    {product.availableCity.map((x) => (
                      <span>
                        {" "}
                        <button className="button1">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button1 primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
