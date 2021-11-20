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
      error: null,
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
            <div className="formLogin">
              <div className="log pb-4">LOGIN</div>
              <div className="d-flex align-items-center justify-content-between">
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
              </div>
              <br />
              <div className="d-flex align-items-center justify-content-between">
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
              </div>
              <br />
              {this.state.error && (
                <p className="errormsg">{this.state.error}</p>
              )}
              <button onClick={this.login}>Login</button>
              <Link to="/Signup" className="bttn1">
                <button>Signup</button>
              </Link>
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
