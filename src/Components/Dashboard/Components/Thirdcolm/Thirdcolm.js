import React from "react";
import "./Thirdcolm.css";
import { BiPencil } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { auth } from "../../../../firebase/firebase";

class Thirdcolm extends React.Component {
  signOut = () => {
    auth
      .signOut()
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div>
          <div>
            {" "}
            <BiPencil className="penciledit" />{" "}
            <img className="img1" alt="sample" src={this.props.data.profileImage} />{" "}
          </div>
          <div>
            <p className="name1">{this.props.data.displayname}</p>
          </div>
          <div>
            <p className="name2">{this.props.data.About}</p>
          </div>
          <button onClick={this.signOut}>signout</button>
        </div>
        <div className="personalinfo">
          <div className="Colm1">
            <p className="row11">Personal Information</p>
          </div>
          <div className="box1">
            <div className="ro1">
              <div className="country">
                <p>Country</p>
                <p className="ins1">{this.props.data.Country}</p>{" "}
              </div>
            </div>
            <VscGlobe className="row2" />
          </div>
          <div className="box1">
            <div className="ro2">
              <div className="phone">
                <p>Phone number</p>
                <p className="ins1">{this.props.data.phonenumber}</p>{" "}
              </div>
            </div>
            <BiPhone className="row2" />
          </div>
          <div className="box1">
            <div className="r03">
              <div className="email">
                <p>Email</p>
                <p className="ins1">{this.props.user.email}</p>{" "}
              </div>
            </div>
            <GoMail className="row2" />
          </div>
        </div>
      </div>
    );
  }
}
export default Thirdcolm;
