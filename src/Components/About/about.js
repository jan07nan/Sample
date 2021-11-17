import React, { Component } from 'react';
import "./about.css";


class about extends Component {
    render() { 
        return <div class="about-section">

        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text1">
              We are commited to building the tools that helps organisation, teams and individuals stay productive and 
              connected even when they need to work apart...

              Live chat is the quickest and the most efficient method of customer engagement if used right.

              Form better relationships with your prospects and customers throughout the entire customer lifecycle from 
              the time they land on your website to the customer support phase.
            </p>
            <div class="skills">
                <span>CHAT</span>
                <span>CONNECT</span>
                <span>RELATE</span>
            </div>
        </div>
    </div>;
    }
}
 
export default about;