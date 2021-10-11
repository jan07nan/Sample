import React, { Component } from 'react';
import {auth} from './firebase';
import "./Signup.css";
// import newuser from "./images/newuser.jpg";


class Signup extends Component{
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
            <div className="contant15">
            <div className="form">
            <div className="signu"><label>SIGNUP</label></div>
                   <div> <label>Email:</label></div>
                    <input
                     type="email" 
                     id="email" 
                     name="email"
                     placeholder="Enter email address"
                     onChange={this.handleChange} 
                     value={this.state.email}
                     /><br/>
                    
                    <div><label>Password:</label></div>
                    <input 
                    name="password"
                    type="password" 
                    onChange={this.handleChange}
                    id="password" 
                    placeholder="Enter password"
                    value={this.state.password}/><br/>
                    

                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
            </div>
            {/* <div className="imgg">
             <img src={newuser} alt="" />
             </div> */}
            </div>
             
        )
    }
}

export default Signup;