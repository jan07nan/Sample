import React,{Component} from 'react';
import {auth} from '../firebase/firebase';


class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }        
    }

    logout(){
        auth.signOut();
    }
    render()
    {
        return(
            <div>
              <h1>You are logged in !!!</h1>
              <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;