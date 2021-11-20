import React, { Component } from "react";
import { auth, db } from "../../firebase/firebase";
import "./Signup.css";
import { withRouter } from "react-router-dom";
import GetDetailFromUser from "./GetDetailFromUser";

const inputs = [
    {
        label :"User Name",
        name :"displayname",
        placeholder :"Enter name"
    },
    {
        label :"Country",
        name :"Country",
        placeholder :"Enter Country"
    },
    {
        label :"Phone Number",
        name :"phonenumber",
        placeholder :"Enter phone number",
        type:"tel"
    },
    {
        label :"About",
        name :"About",
        placeholder :"About"
    }
]

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: null,
      password: '',
      cpassword: null,
      error: null,
      newUser: {
        displayname : null,
        Country : null,
        phonenumber : null,
        About:null
      }

    };
  }

  signup(e) {
    e.preventDefault();
    if (this.state.password === this.state.cpassword) {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((e) => {
          db.ref('users/' + e.user.uid).set({
            uid: e.user.uid,
            ...this.state.newUser
          }).then(e => console.log(e)).catch(e => console.log(e))
        })
        .catch((err) => {
          console.log(err);
          this.setState({ error: err.message });
        });
    } 
    if (this.state.password === null | this.state.cpassword === null | this.state.email === null) {
        this.setState({ error: "Please fill all Items" });
    }
    else {
      this.setState({ error: "mismathch in password" });
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleChangeExtra = (e, name) => this.setState({newUser : {...this.state.newUser, [name] : e}});
  render() {
    return (
      <div className="contantSignup">
        <div className="form">
          <div className="signu">
            <label>Signup</label>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <label>Email:</label>

            <input
              type="email"
              id="email"
              name="email"
              className="logininp"
              placeholder="Enter email address"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <label>Password:</label>
            <input
              name="password"
              type="password"
              className="logininp"
              onChange={this.handleChange}
              id="password"
              placeholder="Enter password"
              value={this.state.password}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <label>Confirm Password:</label>
            <input
              name="cpassword"
              type="cpassword"
              className="logininp"
              onChange={this.handleChange}
              id="cpassword"
              placeholder="Enter confirm password"
              value={this.state.cpassword}
            />
          </div>
          {inputs.map(e => 
            <div className="d-flex align-items-center justify-content-between">
            <label>{e.label}</label>
            <input
              type={e.type | 'text'}
              className="logininp"
              onChange={(f) => this.handleChangeExtra(f.target.value, e.name)}
              placeholder={e.placeholder}
              value={this.state.newUser[e.name]}
            />
            </div>)}
          <br />
          {this.state.error && <p className='error'>{this.state.error}</p>}
          <button onClick={this.signup} className="bttn">
            Signup
          </button>
        
        </div>
        {/* <div className="imgg">
             <img src={newuser} alt="" />
             </div> */}
      </div>
    );
  }
}

export default withRouter(Signup);
