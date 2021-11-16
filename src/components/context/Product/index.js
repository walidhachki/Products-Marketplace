import React from 'react';
import {FaBars, FaCalendarAlt, FaMapMarkerAlt} from 'react-icons/fa'


function Product() {
  return (
    <div className="App">
      <section class="section-content padding-y bg">
        <div class="container">
    
        <article class="card">
            <div class="card-body">
                    <div class="row">
                        <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="card img-big-wrap">
                                        <a href="#"> <img src="assets/images/items/product1.jpg" /></a>
                                    </div> 
                                </article>
                        </aside>
                        <main class="col-md-6">
                            <article>
                                <h3 class="title">ASUS FX571</h3>
        
                                <hr />
                    
                                <div class="mb-3">
                                    <h6>Short description</h6>
                                    <ul class="list-dots mb-0">
                                        <li>Serie : C8621</li>
                                        <li>Marque : Azuz</li>
                                        <li>Usage: professionel,Personnel</li>
                                        <li>color : Dark blue color</li>
                                    </ul>
                                </div>
                                
                                <div class="form-group">
                                    <h6 class="text">Owner Name: Daoudi Abderrazak</h6>
                                    <div>
                                        <label class="js-check btn btn-check active mr-1">
                                            <input type="radio" name="option_size" value="option1" checked="" />
                                            <span>+2126000000</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Owner@ownername.com</span>
                                        </label>
                                    </div>            
                                </div>
        
                                <div class="mb-3">
                                    <var class="price h4">10000MAD</var> <br />
                                </div> 
        
                                <div class="mb-4">
                                    <a href="#" class="btn btn-primary mr-1">Buy now</a>
                                    <a href="#" class="btn btn-light">Add to card</a>
                                </div>
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        <article class="card mt-5">
            <div class="card-body">
                <div class="row">
                    <aside class="col-md-6">
                        <h5>Parameters</h5>
                        <dl class="row">
                              <dt class="col-sm-3">Display</dt>
                              <dd class="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
        
                              <dt class="col-sm-3">Processor</dt>
                              <dd class="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
        
                              <dt class="col-sm-3">Camera</dt>
                              <dd class="col-sm-9">720p FaceTime HD camera</dd>
        
                              <dt class="col-sm-3">Memory</dt>
                              <dd class="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                              
                              <dt class="col-sm-3">Graphics</dt>
                              <dd class="col-sm-9">Intel Iris Plus Graphics 640</dd>
                        </dl>
                    </aside>
                    <aside class="col-md-6">
                        <h5>Features</h5>
                        <ul class="list-check">
                            <li>Best performance of battery</li>
                            <li>5 years warranty for this product</li>
                            <li>Amazing features and high quality</li>
                            <li>Best performance of battery</li>
                            <li>5 years warranty for this product</li>
                        </ul>
                    </aside>
                </div> 
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> 
        </article>
        </div>
        
    
    </section>
   
    <footer class="section-footer border-top padding-y">
        <div class="container">
            <p class="float-md-right"> 
                &copy; Copyright 2021 All rights reserved
            </p>
            <p>
                <a href="#">Terms and conditions</a>
            </p>
        </div>
    </footer>
    
       
     
    </div>
  );
}

export default Product;