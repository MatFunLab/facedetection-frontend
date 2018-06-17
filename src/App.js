import React, { Component } from 'react';
import Particles from 'react-particles-js';
import "./App.css";
import FaceDetection from "./components/FaceDetection/FaceDetection"
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";


const particlesOptions = {
  particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 500
              }
             }
            }
          };

class App extends Component {
  constructor() {
    super();
    this.state = {
     input: "",
     imageUrl: "",
     box: {},
     route: "signin",
     user: {
       name: "",
       email: "",
       entries: 0,
       joined: ""
     }
   }
  }

  loadUser = (data) => {
    this.setState({user: {
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }});
  }

  deleteUser = () => {

    let email = this.state.user.email;

    fetch(`https://fathomless-sierra-77807.herokuapp.com/profile/${email}`, { // http://localhost:3000
    method: "delete",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
    email: this.state.user.email
    })
  })
  .then(res => res.json()).then((userName) => {
        if(userName) {
            alert(`${userName} you succesfully deleted your account`); //don`t forget to make it nice
            this.onRouteChange("signin");
            }
        }).catch((err) => {
          console.log(err);
        });
}

  calculateFaceLocation = (data) => {
    const faceLocation = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
      return {
        leftCol: faceLocation.left_col * width,
        rightCol: width - (faceLocation.right_col * width),
        topRow: faceLocation.top_row * height,
        bottomRow: height - (faceLocation.bottom_row * height)
      }
  }

  displayBox = (bounds) => {
    this.setState({box: bounds});
  }


onGoToDashboard = ()=> {
  let email = this.state.user.email;

      fetch(`https://fathomless-sierra-77807.herokuapp.com/profile/${email}`) // http://localhost:3000
        .then(res => res.json()).then(user => {
            if(user) {
                this.loadUser(user);
                  this.onRouteChange("dashboard");
                }
            }).catch((err) => {
              console.log(err);
            });
    }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch("https://fathomless-sierra-77807.herokuapp.com/imageurl", { // http://localhost:3000
        method: "post",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
        email: this.state.user.email,
        imageUrl: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response) {
        fetch("https://fathomless-sierra-77807.herokuapp.com/image", { // http://localhost:3000
            method: "put",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
            email: this.state.user.email
        })
      }).then(res => res.json()).then((entries) => {
        this.setState(Object.assign(this.state.user, {
          entries: entries}));
      })
    }
      this.displayBox(this.calculateFaceLocation(response))})
      .catch(err => console.log(err));
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onRouteChange = (route) => {
    if(this.state.route === "signin") {
      this.setState({imageUrl:"", box: {}});
    }
    this.setState({route: route});
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
              params={particlesOptions}
          />


        {
           (this.state.route === "home") ?
               <div>
                 <Navigation onRouteChange={this.onRouteChange} name={this.state.user.name} onGoToDashboard={this.onGoToDashboard} />
                 <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                 <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                 <FaceDetection box={this.state.box} imageUrl={this.state.imageUrl} />
               </div> :
           ((this.state.route === "signin") ?
                     <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> : ((this.state.route === "register") ?
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}  /> :
                           <Dashboard loadUser={this.loadUser} name={this.state.user.name} deleteUser={this.deleteUser} onRouteChange={this.onRouteChange}/>))

        }
      </div>
    );
  }
}

export default App;
