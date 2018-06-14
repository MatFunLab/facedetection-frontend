import React from "react";

class Register extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        name: ""
      }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onSubmitRegister = () => {
    if(this.state.email === "" || this.state.password === "" || this.state.name === "") {
      return console.log("fields NAME, PASSWORD and EMAIL are mandatory");
    }
    fetch("https://fathomless-sierra-77807.herokuapp.com/register", {  // http://localhost:3000
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    }).then(res => res.json()).then(user => {
      if(user.email) {
        this.props.loadUser(user);
        this.props.onRouteChange("home");
      }else {
        alert("email already taken");
      }
    }).catch((err) => {
      console.log(err);
    });

}

  render() {
    return (
    <article className="br3 shadow-5 ba b--black-10 mv6 w-100 w-50-m w-25-l mw5  center">
        <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                   <div className="center">
                     <legend className="f2 fw6 ph0 mh0 tc">Register</legend>
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6 tc"
                              htmlFor="name">Name</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={this.onNameChange}
                        type="text"
                        name="name"
                        id="name"/>
                    </div>

                    <div className="mt3 mv3">
                      <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">Email</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={this.onEmailChange}
                        type="email"
                        name="email-address"
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6 tc" htmlFor="password">Password</label>
                      <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={this.onPasswordChange}
                        type="password"
                        name="password"
                        id="password"/>
                    </div>
              </fieldset>
                  <div className="center mb4">
                    <input className="b pa2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="register"
                      onClick={this.onSubmitRegister}
                    />
                  </div>

        </div>
      </article>
    );
  }

}

export default Register;
