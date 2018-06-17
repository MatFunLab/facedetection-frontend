

import React from "react";
import "./Dashboard.css";



class Dashboard extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        visible: "visible"

      }
    }

onConfirm = () => {
  this.setState({visible: "not"});

}

  render() {
    return(

      <div>
        { (this.state.visible === "visible") ?
          (<div>
              <div className="ml6"><h1>{this.props.name}'s</h1>
                                  <h1> dashboard</h1>
              </div>
              <nav className="nav-dashboard">
                <p className="f3 link dim black fw6 pa3 pointer w-20">Option 1</p>
                <p className="f3 link dim black fw6 pa3 pointer w-20">Option 2</p>
                <p className="f3 link dim black fw6 pa3 pointer w-20">Option 3</p>
                <p className="f3 link dim black fw6 pa3 pointer w-20" onClick={() => this.onConfirm()}>Delete account</p>
              </nav>
        </div>)  :
        (<div>
          <div className="alert-container center">
            <div className="">
              <h2>Do You really want</h2>
              <h2>to delete your account?</h2>
            </div>
          </div>
          <div>
            <div className="buttons alert-container center">
              <button className="yes" onClick={() => this.props.deleteUser()} >YES</button>
              <button className="no" onClick={() => this.props.onRouteChange("signin")} >NO</button>
            </div>
          </div>
        </div>)
        }
      </div>

    );
  }
}

export default Dashboard;
