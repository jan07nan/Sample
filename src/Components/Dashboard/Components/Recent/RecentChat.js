import React from "react";
import styles from "./RecentChat.module.css";
import limg4 from "../../../../images/limg1.jpg";
import limg1 from "../../../../images/limg2.jpeg";
import limg2 from "../../../../images/limg3.jfif";
import limg3 from "../../../../images/limg4.webp";
import { FaSearch } from "react-icons/fa";
import ChatMock from "./Chatmock.json";
let users = [
  {
    name: "Janani",
    img: limg4,
  },
  {
    name: "Nandhu",
    img: limg1,
  },
  {
    name: "JananiNandhu",
    img: limg2,
  },
  {
    name: "Vikash",
    img: limg3,
  },
];
class RecentChat extends React.Component {
  render() {
    return (
      <div className={`col-3 p-3 ${styles.Firstrow}`}>
        <div className={styles.chat}>
          <p>Chats</p>
        </div>
        <div className={styles.searchbox}>
          <input
            type="text"
            className={styles.txtbox}
            placeholder="Search for messages or users.."
          />
          <p className={styles.faw1}>
            <FaSearch />
          </p>
        </div>
        <div className={styles.onlineUsers}>
          {users.map((e, index) => (
            <div key={index} className={styles.onlineusercontainer}>
              <img className={styles.im1} src={e.img} alt="" />
              <p>{e.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.recentname}>
          <p>Recent Chats</p>
        </div>
        <div className={styles.recentlist}>
          {ChatMock.map((e) => (
            <div className={styles.rl}>
              <img className={styles.im1} src={e.img} alt="" />
              <div className="d-flex flex-column justify-content-center">
                <p className={styles.p}>{e.name}</p>
                <p className={styles.about}>{e.Chat}</p>
              </div>
              <p className={styles.time}>04.15 PM</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RecentChat;
