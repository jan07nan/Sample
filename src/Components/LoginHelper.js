import React, {Component} from 'react';
import {auth} from "../firebase/firebase";
import Login from './Login/Login';
import Home from './Home';
import { withRouter } from 'react-router';

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
                this.props.history.push('/dashboard')
            }
            else{
                this.setState({user : null})
            }
        })
    }
    render() { 
        return ( 
            <>
                 <Login/>
            </>
         );
    }
}
 
export default withRouter(App1);