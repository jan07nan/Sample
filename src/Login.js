import React, { Component } from 'react';
import {auth} from './firebase';
import "./App1.css";

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
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
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
            <div>
                <form>
                    <label>Email:
                    <input
                     type="email" 
                     id="email" 
                     name="email"
                     placeholder="Enter email address"
                     onChange={this.handleChange} 
                     value={this.state.email}
                     /></label>
                    
                    <label>Password:</label><input 
                    name="password"
                    type="password" 
                    onChange={this.handleChange}
                    id="password" 
                    placeholder="Enter password"
                    value={this.state.password}/>
                    

                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }
}

export default Login;