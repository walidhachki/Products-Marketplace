import React, { Component } from 'react';


const Header = () => {
    return (
        <header>
        <div class="overlay"></div>
        <div class="tophead" >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7 ">
                        <img src="images/logo3.png" alt="X-Matos" />
                        <h3 class="subtitle-main wow fadeInUp" data-wow-duration="1.1s">THE MARKET OF GAMING</h3>
            <div class="top-btn-block wow fadeInUp" data-wow-duration="2.5s">
                <a href="/sign-in"  class="btn-explore ">Sign in</a>
                <a href="/sign-up" class="btn-account ">Sign up</a>
                <p id="or"></p>
                <a href="Exclusive">Start navigating now!</a>
            </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
            )
}

export default Header