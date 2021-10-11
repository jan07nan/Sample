import React from "react";
import "./App.css";
import img from "./images/logo.svg";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App1 from "./App1";
import About from "./about";
export default function App() {
  // function signup() {
  //   auth.signInWithPopup(provider).then((result) => {
  //     console.log(result.user);
  //   });
  // }
  var element = document.body;
  function darkMode() {
    element.className = "dark-mode";
    
  }
  function lightMode() {
    element.className = "light-mode";
    
  }
  function hamberger(event) {
    $(".navigation-bar").slideToggle("200");
    console.log("hi");
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <App1 />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/" exact>
          <header>
            <div className="container">
              <nav className="nav d-flex">
                <a href className="logo">
                  Chit-Chat
                </a>
                <div className="burger" onClick={hamberger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="navigation-bar">
                  <ul>
            
                    <li>
                      <Link to="/about" >About</Link>
                    </li>
                  
                    <li>
                      <Link to="/login" className="btn">
                        Login
                      </Link>
                    </li>
                    <button onClick={darkMode}>Darkmode</button>
    <button onClick={lightMode}>LightMode</button>
                  </ul>
                  
                </div>
              </nav>
            </div>
          </header>

          <section class="home">
            <div class="container">
              <div class="home-wrapper d-flex">
                <div class="contant1">
                  <div class="col-left">
                    <h1> Keeping your most sensitive communication safe.</h1>
                    <p>
                      We are providing you with an Safe and Secure chatting
                      application.
                    </p>
                  </div>
                  <div class="home-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Route>
      </Switch>
    </Router>
  );
}
