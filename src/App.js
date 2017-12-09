import React, { Component } from 'react';
import SearchPhrase from './SearchPhrase.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voicepart: 'all',
      currentOrAll: 'current',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {}
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }
  render() {
    let { voicepart, currentOrAll } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Choir Roster</h1>
        </header>
        <SearchPhrase
          handleChange={this.handleChange}
          voicepart={voicepart}
          currentOrAll={currentOrAll}
          />
      </div>
    );
  }
}

export default App;
