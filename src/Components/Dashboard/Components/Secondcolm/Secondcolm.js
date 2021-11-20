import React from "react";
import "./Secondcolm.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import Simplebar from "simplebar-react";
import moment from "moment";
import { db } from "../../../../firebase/firebase";

export default function Secondcolm({user, selectedUser}) {
      const[chats, setChats] = React.useState({loading : { textmessage : "loading ..."}});
      const[id, setid] = React.useState(null);
      const[message, setMessage] = React.useState('');

      function sentMessage() {

        db.ref(`message/${id}/${Object.keys(chats)[Object.keys(chats).length - 1] + 1}`).set({
          textmessage: message,
          time: new Date().toString(),
          people : user.uid
        })
      }
      React.useEffect(() => {
        if(selectedUser !== {} && user!== {}){
       db.ref('message/' + selectedUser.uid + user.uid).on('value', (snapshot) => {
          if(snapshot.val() === null) {
            db.ref('message/' + user.uid + selectedUser.uid).on('value', (snapshot) => {
              if(snapshot.val() === null) {
                  db.ref('message/' +user.uid + selectedUser.uid + '/0').set({
                  textmessage: `Start you chat with ${selectedUser.displayname}`,
                  time: new Date().toString(),
                  people : 'Admin'
                });
                setid(user.uid + selectedUser.uid)
              }
              else{
                 setChats(snapshot.val());
                 setid(user.uid + selectedUser.uid)
                }
            })
          }
          else {
             setChats(snapshot.val());
             setid(selectedUser.uid + user.uid)
            }
        })
      }
      },[selectedUser, user])
   
  return (
    <div>
      <div className="titlechat">
        <div className="d-flex">
          <img className="im1" src={selectedUser.profileImage} alt="" />
          <div className="d-flex flex-column justify-content-center">
            <p>{selectedUser.displayname}</p>
            <p>last seen {moment(selectedUser.lastseen).format('LT')}</p>
          </div>
        </div>

        <div>
          <AiOutlineCamera className="icon" />

          <FaMicrophone className="icon" />
        </div>
      </div>
      <Simplebar style={{ height: '80vh' }}>
          {Object.keys(chats).map(e => <div className={`d-flex `}>
             
            {chats[e].textmessage}
          </div>)}
      </Simplebar>
      <div className="bottomtext">
        <IoMdAdd className="Add" />
        <input className="bottomtxt1" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" />
        <FiSmile className="emoji" />
        <div className="sendWrap" onClick={sentMessage}>
          <FiSend className="send" />
        </div>
      </div>
    </div>
  );
}
