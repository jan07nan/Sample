import React from "react";
import "./App.css";
// import { auth, provider } from "./firebase";
import img from "./images/logo.svg";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App1 from "./App1";
export default function App() {
  // function signup() {
  //   auth.signInWithPopup(provider).then((result) => {
  //     console.log(result.user);
  //   });
  // }

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
                      <a href>Home</a>
                    </li>
                    <li>
                      <a href>About</a>
                    </li>
                    <li>
                      <a href>Services</a>
                    </li>
                    <li>
                      <a href>Features</a>
                    </li>
                    <li>
                      <a href>Contact</a>
                    </li>
                    <li>
                      <Link to="/login" className="btn">
                        Login
                      </Link>
                    </li>
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
