import React, { Component } from 'react';

const Category = () => {
    return (
    <section class="overview-wrap" id="overview">
                <div class="container">
                    <div class="contenedor">
                        <h2 class="title-overview wow fadeInUp">Choose a Category</h2>
                        <div class="hr"></div>
                    <p class="subtitle-overview wow fadeInUp">Most Commun Category</p>
                    <div class="row">
                       <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s" >
                            <div class="overview-box mx-auto" >
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-laptop fa-5x laptop m-auto"></i>
                                </div>
                                <a href="/Pro" ><h5>Laptop</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                           
                        </div>
                        
                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="overview-box mx-auto">
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-desktop fa-5x desktop m-auto"></i>
                                </div>
                                <a href="/Products" ><h5>Pc gamer</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="overview-box mx-auto">
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-keyboard fa-5x keyboard m-auto"></i>
                                </div>
                                <a href="/Products" ><h5>keyboards</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="overview-box mx-auto">
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-headphones fa-5x others m-auto"></i>
                                </div>
                                <a href="/Products" ><h5>Headphones</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="overview-box mx-auto">
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-cubes fa-5x others m-auto"></i>
                                </div>
                                <a href="/Products" ><h5>Equipements</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="overview-box mx-auto">
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-gamepad fa-5x others m-auto"></i>
                                </div>
                                <a href="/Products" ><h5>Controllers</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="overview-box mx-auto">
                                <div class="features-icons-icon d-flex">
                                <i class="fas fa-search-plus fa-5x others m-auto"></i>
                                </div>
                                <a href="/Products" ><h5>Others</h5></a>
                                <p class=" mb-0"></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Category