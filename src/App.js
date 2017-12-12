import React, { Component } from 'react';
import SearchPhrase from './SearchPhrase.js';
import Singer from './Singer.js';
import logo from './logo.svg';
import singers from './mockDB.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voicepart: 'all',
      currentOrAll: 'current',
      singers: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterSinger = this.filterSinger.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {}
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  componentDidMount(){
    this.setState({singers: singers})
  }

  filterSinger(singer){
    if (this.state.voicepart !== 'all'){
      if (singer.voicepart !== this.state.voicepart){
        return false;
      }
    }

    if (this.state.currentOrAll !== 'all'){
      return singer.is_current
    }

    return true;
  }

  returnMappedVoices(filteredSingers){
    let sopranos = filteredSingers.filter(singer=>singer.voicepart === 'soprano');
    let altos = filteredSingers.filter(singer=>singer.voicepart === 'alto');
    let tenors = filteredSingers.filter(singer=>singer.voicepart === 'tenor');
    let bases = filteredSingers.filter(singer=>singer.voicepart === 'bass');

    let sopranoMap = sopranos.map(singer=><Singer singer={singer}/>)
    let altoMap = altos.map(singer=><Singer singer={singer}/>)
    let tenorMap = tenors.map(singer=><Singer singer={singer}/>)
    let basesMap = bases.map(singer=><Singer singer={singer}/>)

    return {
      sopranoMap,
      altoMap,
      tenorMap,
      basesMap
    }
  }


  render() {
    let { voicepart, currentOrAll, singers } = this.state;

    let filteredSingers = singers.filter((singer)=> this.filterSinger(singer))
    let { sopranoMap, altoMap, tenorMap, basesMap } = this.returnMappedVoices(filteredSingers);


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
          <section id="singers">
            <div id="sopranos">
              <h3>Sopranos</h3>
              {sopranoMap}
            </div>
            <div id="altos">
              <h3>Altos</h3>
              {altoMap}
            </div>
            <div id="tenors">
              <h3>Tenors</h3>
              {tenorMap}
            </div>
            <div id="bases">
              <h3>Bases</h3>
              {basesMap}
            </div>
          </section>
      </div>
    );
  }
}

export default App;
