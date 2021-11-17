import React, { Component } from "react";
import { auth } from "../../firebase/firebase";
import "./Login.css";
import Loginimg from "../../images/logimg.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "../Signup/Signup.js";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.props.history.push({
          pathname: "/dashboard",
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error.message });
      });
  };
  signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.props.history.push({
          pathname: "/dashboard",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <div className="contant">
            <div className="form">
              <div className="log">LOGIN</div>
              <label>Email:</label>
              <input
                type="email"
                className="logininp"
                id="email"
                name="email"
                placeholder="Enter email address"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <br />

              <label>Password:</label>
              <input
                name="password"
                className="logininp"
                type="password"
                onChange={this.handleChange}
                id="password"
                placeholder="Enter password"
                value={this.state.password}
              />
              <br />
                {this.state.error && <p className="errormsg">{this.state.error}</p>}
              <button onClick={this.login}>Login</button>
              <button onClick={this.signup}>
                <Link to="/Signup" className="bttn1">
                  Signup
                </Link>
              </button>
            </div>
            <div className="img">
              <img src={Loginimg} alt="" />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(Login);
