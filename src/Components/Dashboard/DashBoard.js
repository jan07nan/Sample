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
import Simplebar from "simplebar-react";
class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <div className=" row m-0 wholepage">
          <RecentChat />

          <div className="col-6 p-3 secondpanel">
            <div className="titlechat">
              <div className="d-flex">
                <img className={recentChatStyle.im1} src={limg4} alt="" />
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
            <Simplebar style={{ height: 480 }}>
              
            </Simplebar>
            <div className="bottomtext">
              <IoMdAdd className="Add" />
              <input className="bottomtxt1" placeholder="Type your message" />
              <FiSmile className="emoji" />
              <div className="sendWrap">
              <FiSend className="send" />
              </div>
            </div>
          </div>
          <div className="profile col-3 p-0"></div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
