import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing my Component from js file //
import SayHello from "./SayHello";
import SayHowdy from "./SayHowdy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SayHello/>
          <SayHowdy/>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            <h2>bwahahahahahahahaha</h2>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
