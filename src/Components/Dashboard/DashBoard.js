import React from "react";
import "./DashBoard.css";
import { auth, db} from "../../firebase/firebase";
import RecentChat from "./Components/Recent/RecentChat";
import Secondcolm from "./Components/Secondcolm/Secondcolm";
import Thirdcolm from "./Components/Thirdcolm/Thirdcolm";
import { withRouter } from "react-router";


class DashBoard extends React.Component {
  state = {
    user : {}
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      } else {
        this.props.history.push({
          pathname : "/"
        });
      }
    });
  }
  render() {
    return (
      <div>
        <div className=" row m-0 wholepage">
          <RecentChat />

          <div className="col-6 p-3 secondpanel">
            <Secondcolm />
          </div>
          <div className="profile col-3 p-2">
            <Thirdcolm user={this.state.user}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DashBoard);
