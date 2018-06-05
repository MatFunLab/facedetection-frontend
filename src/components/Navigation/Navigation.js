import React from "react";
import "./Navigation.css"

const Navigation = ({onRouteChange, onGoToDashboard, name}) => {
  return (
    <nav className="nav shadow-5 mb4"> {/*adding className to override tachyons default nav style*/}
      <div className="nav-name-dash">
        <p className="f2 black fw6 pa3">Welcome {name}</p>
        <p className="f3 link dim black fw6 pa3 pointer" onClick={() => onGoToDashboard()}>Your dashboard</p>
      </div>
      <p className="h-25 f3 link dim white pa3 pointer" onClick={() => onRouteChange("signin")}>Sign Out</p>
    </nav>
  );
}

export default Navigation;
