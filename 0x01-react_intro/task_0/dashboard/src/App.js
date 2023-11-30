import React, { Component } from "react";
import logo from './holberton-logo.jpg';

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
        </div>
        <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
        </div>
    );
  }
}

export default App;
