import React from "react";

class Signin extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        signInEmail: "",
        signInPassword: ""
      }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSubmitSignIn = () => {
    if(this.state.signInEmail === "" || this.state.signInPassword === "") {
      return console.log("fields PASSWORD and EMAIL are mandatory");
    }
    fetch("https://fathomless-sierra-77807.herokuapp.com/signin", { // http://localhost:3000
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    }).then(res => res.json()).then(user => {
      if(user.email) {
        this.props.loadUser(user);
        this.props.onRouteChange("home");
      }
    }).catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
    <article className="br3 shadow-5 ba  b--black-10 mv6 w-100 w-50-m w-25-l mw5 center">
        <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                   <div className="center">
                     <legend className="f2 fw6 ph0 mh0 tc">Sign In</legend>
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">Email</label>
                      <input onChange={this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6 tc" htmlFor="password">Password</label>
                      <input
                        onChange={this.onPasswordChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                         name="password"
                         id="password"/>
                    </div>
              </fieldset>
                  <div className="center">
                    <input className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Sign in"
                      onClick={this.onSubmitSignIn}
                    />
                  </div>
                  <div className="lh-copy mt3">
                    <p className="f4 fw5 link dim white db tc pointer"
                      onClick={() => this.props.onRouteChange("register")}>Register</p>
                  </div>
        </div>
      </article>
    );
  }
}

export default Signin;
