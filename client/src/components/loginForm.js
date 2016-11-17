import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange(field, event){
    const object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render() {
    return (
      <form>
        <div>
          <input id="username" type="text" placeholder="username" onChange={this.handleChange.bind(this, 'username')}></input>
        </div>
        <div>
          <input id="password" type="text" placeholder="password" onChange={this.handleChange.bind(this, 'password')}></input>
        </div>
        <input type="submit" value="Login"></input>
      </form>
    );
  }
}

export default LoginForm;
