import React, { Component } from 'react';
import {auth} from '../../firebase/firebase';
import "./Login.css";
import Loginimg from "../../images/logimg.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "../Signup/Signup.js";



class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email: "",
            password: ""
        }
    }

    login(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <Router>
            <Switch>
              <Route path="/signup" exact>
                < Signup/>
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
                     /><br/>
                    
                    <label>Password:</label><input 
                    name="password"
                    className="logininp"
                    type="password" 
                    onChange={this.handleChange}
                    id="password" 
                    placeholder="Enter password"
                    value={this.state.password}/><br/>
                    

                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}><Link to="/Signup" className="bttn1" >
                        Signup
                      </Link></button>
            </div>
            <div className="img">
            <img src={Loginimg} alt="" />
            </div>
            </div>
            </Switch>
    </Router>
        )
    }
}

export default Login;