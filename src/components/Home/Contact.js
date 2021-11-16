import React, { Component } from 'react';


const Contact = () => {
    return (
        <section class="cta contact-wrap" id="contact">
                    <h2 class="title-testimonials1 wow fadeInUp">Contact Us </h2>
                    <div class="hr11"></div>
                    <h3 class="subtitle-testimonials1 wow fadeInUp">Get on touch with us</h3>
        <div class="container-contact">
            <div class="content">
                <div class="left-side">
                <div class="address details">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="topic">Address</div>
                    <div class="text-one">15 Avenue Al Abtal</div>
                    <div class="text-two">Agdal 10090 Rabat</div>
                </div>
                <div class="phone details">
                     <i class="fas fa-phone"></i>
                     <div class="topic">Phone</div>
                     <div class="text-one">+212 664 791 989</div>
                </div>
                <div class="email details">
                     <i class="fas fa-envelope"></i>
                     <div class="topic">Email</div>
                     <div class="text-one">x-matos@gmail.com</div>
                </div>
                </div>
                <div class="right-side">
                     <div class="topic-text">Send us a message</div>
                     <form action="#">
                         <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <input type="text" placeholder="Enter your message"/>
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
                    </form>
    </div>
    </div>
            </div>

    </section>

    )
}

export default Contact