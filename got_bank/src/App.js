import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import component with javascript file //
import BankAccount from "./BankAccount";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <BankAccount customerName = "Melaati" balance="$0 "/>
          <p>
            <h1>#BrokeLife</h1>
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
