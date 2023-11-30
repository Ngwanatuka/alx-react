import React, { Component } from "react";
import logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils.js";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <div className="App-login">
            Email:
            <input type="email" name="email" id="email" />
            Password:
            <input type="password" name="password" id="password" />
            <button>OK</button>
            </div>
        </div>
        <div className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
