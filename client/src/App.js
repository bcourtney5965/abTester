import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import {Link} from 'react-router';

class App extends Component {

  // return (
  //   <div className="App">
  //     <div className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h2>Welcome to React</h2>
  //     </div>
  //     <p className="App-intro">
  //       To get started, edit <code>src/App.js</code> and save to reload.
  //     </p>
  //   </div>

  render() {
    return (
      <div className="App">
        <header id="nav">
          <Link to="/login"><button type="button">Login</button></Link>      
          <Link to="/dashboard"><button id="test" type="button">dashboard</button></Link>      
          <Link to="/view2"><button id="test" type="button">view2</button></Link>      
          <Link to="/view1"><button type="button">view1</button></Link>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
