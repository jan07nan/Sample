import React from "react";
import "./DashBoard.css";
import { auth, db} from "../../firebase/firebase";
import RecentChat from "./Components/Recent/RecentChat";
import Secondcolm from "./Components/Secondcolm/Secondcolm";
import Thirdcolm from "./Components/Thirdcolm/Thirdcolm";
import { withRouter } from "react-router";


class DashBoard extends React.Component {
  state = {
    user : {},
    data : {},
    selectedUser : {}
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
        db.ref('users/' + user.uid).on('value', (snapshot) => {
          const data = snapshot.val();
          this.setState({data});
        })
      } else {
        this.props.history.push({
          pathname : "/"
        });
      }
    });
  }
  handleUser = (e) => {
    console.log(e);
  }
  render() {
    return (
      <div>
        <div className=" row m-0  wholepage">
          <RecentChat user={this.state.user} handleUser={(e) => this.setState({selectedUser : e})}/>

          <div className="col-6 p-3 secondpanel">
            <Secondcolm user={this.state.user} selectedUser={this.state.selectedUser} />
          </div>
          <div className="profile col-3 p-2">
            <Thirdcolm user={this.state.user} data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DashBoard);
