import React from "react";
import "./DashBoard.css";

import RecentChat from "./Components/Recent/RecentChat";
import Secondcolm from "./Components/Secondcolm/Secondcolm";
import Thirdcolm from "./Components/Thirdcolm/Thirdcolm";



class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <div className=" row m-0 wholepage">
          <RecentChat />

          <div className="col-6 p-3 secondpanel">
           <Secondcolm />
          </div>
          <div className="profile col-3 p-2">
           <Thirdcolm />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;


