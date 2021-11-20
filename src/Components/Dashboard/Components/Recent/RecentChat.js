import React from "react";
import styles from "./RecentChat.module.css";
import { FaSearch } from "react-icons/fa";
import { db } from "../../../../firebase/firebase";

class RecentChat extends React.Component {
  state = {
    data : []
  };
  componentDidMount() {
    db.ref('users').on('value', (snapshot) => {
      const data = snapshot.val();
      delete data[this.props.user.uid];
      this.setState({data: Object.values(data)});
    })
  }
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
          {this.state.data.map((e, index) => (
            <div key={index} className={styles.onlineusercontainer}>
              <img className={styles.im1} src={e?.profileImage} alt="" />
              <p>{e.displayname}</p>
            </div>
          ))}
        </div>
        <div className={styles.recentname}>
          <p>Recent Chats</p>
        </div>
        <div className={styles.recentlist}>
          {this.state.data.map((e) => (
            <div className={styles.rl}>
              <img className={styles.im1} src={e.profileImage} alt="" />
              <div className="d-flex flex-column justify-content-center">
                <p className={styles.p}>{e.displayname}</p>
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
