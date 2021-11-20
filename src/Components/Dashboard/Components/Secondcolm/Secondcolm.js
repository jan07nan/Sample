import React from "react";
import "./Secondcolm.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import limg4 from "../../../../images/limg1.jpg";
import Simplebar from "simplebar-react";
// import { db } from "../../../../firebase/firebase";

export default function Secondcolm() {
  React.useEffect(() => {
      
    
  }, [])
  return (
    <div>
      <div className="titlechat">
        <div className="d-flex">
          <img className="im1" src={limg4} alt="" />
          <div className="d-flex flex-column justify-content-center">
            <p>Janani chinnaraj</p>
            <p>Online</p>
          </div>
        </div>

        <div>
          <AiOutlineCamera className="icon" />

          <FaMicrophone className="icon" />
        </div>
      </div>
      <Simplebar style={{ height: 480 }}></Simplebar>
      <div className="bottomtext">
        <IoMdAdd className="Add" />
        <input className="bottomtxt1" placeholder="Type your message" />
        <FiSmile className="emoji" />
        <div className="sendWrap">
          <FiSend className="send" />
        </div>
      </div>
    </div>
  );
}
