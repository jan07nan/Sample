import React from "react";
import "./DashBoard.css";
import { auth, db } from "../../firebase/firebase";
import RecentChat from "./Components/Recent/RecentChat";
import Secondcolm from "./Components/Secondcolm/Secondcolm";
import Thirdcolm from "./Components/Thirdcolm/Thirdcolm";
import { withRouter } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class DashBoard extends React.Component {
  state = {
    user: {},
    data: {},
    selectedUser: {},
    matches: window.matchMedia("(min-width: 768px)").matches,
  };
  componentDidMount() {
    this.authListener();
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }
  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        db.ref("users/" + user.uid).on("value", (snapshot) => {
          const data = snapshot.val();
          this.setState({ data });
        });
      } else {
        this.props.history.push({
          pathname: "/",
        });
      }
    });
  }
  handleUser = (e) => {
    console.log(e);
  };
  render() {
    return (
      <>
        {this.state.matches && (
          <div className=" row m-0  wholepage">
            <div className={`col-3 p-3 `}>
              <RecentChat
                user={this.state.user}
                handleUser={(e) => this.setState({ selectedUser: e })}
              />
            </div>
            <div className="col-6 p-3 secondpanel">
              <Secondcolm
                user={this.state.user}
                data={this.state.data}
                selectedUser={this.state.selectedUser}
              />
            </div>
            <div className="col-3 p-4">
              <Thirdcolm user={this.state.user} selectedUser={this.state.selectedUser} data={this.state.data} />
            </div>
          </div>
        )}
        {!this.state.matches && (
          <div>
            <Tabs>
              <TabList className="tablistStyle">
                <Tab>Recents</Tab>
                <Tab>Chat</Tab>
                <Tab>Profile</Tab>
              </TabList>
              <TabPanel>
                <div className={`col-12 px-3 `}>
                  <RecentChat
                    screen={this.state.matches}
                    user={this.state.user}
                    handleUser={(e) => this.setState({ selectedUser: e })}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="col-12 px-3 secondpanel">
                  <Secondcolm
                    screen={this.state.matches}
                    user={this.state.user}
                    data={this.state.data}
                    selectedUser={this.state.selectedUser}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="profile col-12 px-2">
                  <Thirdcolm user={this.state.user} selectedUser={this.state.selectedUser} data={this.state.data} />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(DashBoard);
