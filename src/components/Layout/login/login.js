import React, { Component } from "react";
import {BrowserRouter as Link} from "react-router-dom"
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
    console.log(response);
}

export default class Login extends Component {
    
    render() {
        return (
            <div className="login">
            <div className="inner2">
                <h2>THE MARKETPLACE OF GAMING</h2>
                <p>You Dont Have An Account!</p>
                <a href="/sign-up" target="_blank">Sign-Up</a>
                <image src="../assets/logo.png" alt="photo" width="500" height="600"></image>
            </div>   
            <div className = "Register">
            <form>

                <h2>Login</h2>

                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Entrer email" />

                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Entrer mot de passe" />

                    <input type="checkbox" className="custom-control" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Rester connecter</label>


                <div>
                    <GoogleLogin className="GoogleLogin"
                       clientId = "664735023745-f8vqglm2o7gjkthc0on9ii2sq7t26ti4.apps.googleusercontent.com"
                       buttonText = "Login with Google"
                       onSuccess = {responseGoogle}
                       onFailure = {responseGoogle}
                       cookiePolicy = {'single_host_origin'}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">Se connecter</button>
                <p className="forgot-password text-right">
                    <a href="#">Mot de passe</a> oublié
                </p>
            </form>
            </div>
            </div>
           
            
        
        );
    }
}
