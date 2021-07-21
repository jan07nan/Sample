import React, {Component} from 'react';
import {auth} from "./firebase";
import Login from './Login'
import Home from './Home'

class App1 extends Component{
        state={
            user : {}
        }
    
    
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        auth.onAuthStateChanged((user) =>{
            if(user)
            {
                this.setState({user})
            }
            else{
                this.setState({user : null})
            }
        })
    }
    render() { 
        return ( 
            <>
                 {this.state.user ? (<Home/>) : (<Login/>)}
            </>
         );
    }
}
 
export default App1;