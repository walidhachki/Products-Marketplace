import React, {Component} from 'react'
import {FaUser,FaLock,FaFacebook, FaTwitter,FaGoogle, FaLinkedin} from 'react-icons/fa'
import './Layout.css';



export default class SignIn extends Component {
  render() {
      return (
        <div class="container1">
      <div class="forms-container1">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i><FaUser/></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i><FaLock/></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btnregister solid" />
            <p class="social-text">Or Sign in with social platforms</p>
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
            <h3>New here ?</h3>
            <p>
            Créez votre compte client X-MATOS en quelques clics ! Vous pouvez vous inscrire soit en utilisant votre adresse e-mail, soit via vos réseaux sociaux.
            </p>
            <a href="/sign-up"><button class="btn transparent" id="sign-up-btn">
              Sign up
            </button></a>
          </div>
          <img src="images/register.png" class="image" alt="" />
        </div>
      </div>
    </div>
    );
  }
}
        