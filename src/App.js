import React from 'react';
import './App.css';
import TTCboard from './components/tictactoeboard';
//import PlayerSelection from './components/playerselection';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container" id="baseT">
          <div className="row">
            <div className="col">
              <h1>HOLA MUNDO</h1>
            </div>
              <TTCboard />
          </div>
        </div>
      </>
    );
  }
}

export default App;
