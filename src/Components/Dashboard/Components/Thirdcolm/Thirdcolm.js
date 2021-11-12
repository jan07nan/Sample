import React from "react";
import "./Thirdcolm.css";
import limg4 from "../../../../images/limg1.jpg";
import { BiPencil } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";

let users = [
    {
      country: "New York",
    }
  ];
  let users1 = [
    {
      phone:"0986543221",
    }
  ];
  let users2 = [
    {
      email:"jananikclj@gmail.com",
    }
  ];

  class Thirdcolm extends React.Component {
    render() {
      return (
  <div>
  <div>
<div>   < BiPencil className="penciledit"/> <img className="img1" src={limg4} /> </div>   
<div>
  <p className="name1">Janani</p>
</div> 
<div>
  <p className="name2">College Student</p>
</div>  
</div>
<div className="personalinfo">
<div className="Colm1">
    <p className="row11">Personal Information</p>
  </div>
<div className="box1">  
<div className="ro1"> 
{users.map((e, index) => (
  <div key={index} className="country">
    <p>Country</p><p className="ins1">{e.country}</p> </div>
))}
</div> 
<VscGlobe className="row2"/>
</div>
<div className="box1">  
<div className="ro2">
 {users1.map((e, index) => (
  <div key={index} className="phone">
    <p>Phone number</p><p className="ins1">{e.phone}</p> </div>
))}
</div>
<BiPhone className="row2"/> 
</div>
<div className="box1"> 
<div className="r03">
 {users2.map((e, index) => (
  <div key={index} className="email">
    <p>Email</p><p className="ins1">{e.email}</p> </div>
))}
</div>
<GoMail className="row2"/>
</div>
</div>
</div>

      );
 }
}
 export default Thirdcolm;