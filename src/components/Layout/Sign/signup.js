import React, {Component} from 'react'
import {FaUser,FaLock,FaEnvelope,FaPhone,FaFacebook, FaTwitter,FaGoogle, FaLinkedin} from 'react-icons/fa'


export default class SignUp extends Component {
  render() {
      return (
        <div class="container1">
        <div class="forms-container1">
          <div class="signin-signup">
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i><FaUser/></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i><FaEnvelope/></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
              <i><FaPhone/></i>
              <input type="number" placeholder="Phone Number" />
            </div>
              <div class="input-field">
                <i><FaLock/></i>
                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field">
              <i><FaLock/></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
              <input type="submit" class="btnregister" value="Sign up" />
              <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
              <a href="#" class="social-icon">
                <i><FaFacebook/></i>
              </a>
              <a href="#" class="social-icon">
                <i><FaTwitter/></i>
              </a>
              <a href="#" class="social-icon">
                <i><FaGoogle/></i>
              </a>
              <a href="#" class="social-icon">
                <i><FaLinkedin/></i>
              </a>
            </div>
            </form>
          </div>
        </div>

        <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
            Créez votre compte client X-MATOS en quelques clics ! Vous pouvez vous inscrire soit en utilisant votre adresse e-mail, soit via vos réseaux sociaux.
            </p>
            <a href="/sign-in"><button class="btn transparent" id="sign-up-btn">
              Sign In
            </button></a>
          </div>
          <img src="images/register.png" class="image" alt="" />
        </div>
      </div>
  
        
      
      </div>
      );
  }
}

