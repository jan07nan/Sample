import React from "react";
import "./DashBoard.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import limg4 from "../../images/limg1.jpg";
import RecentChat from "./Components/Recent/RecentChat";
import recentChatStyle from "./Components/Recent/RecentChat.module.css";
class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <div className=" row m-0 wholepage">
          <RecentChat />


          <div className="col-6 p-0">
              <div className="titlechat">
              <img className={recentChatStyle.im1} src={limg4} alt="" />
                  <p className="p1">Janani chinnaraj</p>
                  <p className="abt1">Online</p>
                  <p className="fa1"><AiOutlineCamera/></p>
                  <p className="fa2"><FaMicrophone/></p>
              </div>
              <div className="bottomtext">
                <input className="bottomtxt1" placeholder="Type your message"/>
                <p className="fa3"><IoMdAdd/></p>
                <p className="fa4"><FiSmile/></p>
              </div>
              <div className="send">
              <p className="fa5">< FiSend/></p>
              </div>
          </div>
            <div className="profile col-3 p-0">

           
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
