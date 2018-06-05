import React from "react";
import "./Dashboard.css";

const Dashboard = ({loadUser, name, deleteUser}) => {

    return (
      <div>
        <div className="ml6"><h2>{name}'s</h2>
                            <h1> dashboard</h1>
        </div>
        <nav className="nav-dashboard">
          <p className="f3 link dim black fw6 pa3 pointer w-20">kebvbb</p>
          <p className="f3 link dim black fw6 pa3 pointer w-20">ervrr</p>
          <p className="f3 link dim black fw6 pa3 pointer w-20">fvfe</p>
          <p className="f3 link dim black fw6 pa3 pointer w-20" onClick={() => deleteUser()}>Delete account</p>
        </nav>
      </div>
  );
}

export default Dashboard;
