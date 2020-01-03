import React from 'react';
import './App.css';
import PlayerSelection from './components/playerselection';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container" id="baseT">
          <div className="row">
            <div className="col">
              <h1>HOLA MUNDO</h1>
              <h2>HOLA MUNDO</h2>
              <PlayerSelection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
