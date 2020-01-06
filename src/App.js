import React from 'react';
import './App.css';
import TTCboard from './components/tictactoeboard';
import PlayerSelection from './components/playerselection';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mostrar: "",
      esconder: "d-none",
      estado: 1,
      player1: "",
      player2: "",
    }
    this.showBoard = this.showBoard.bind(this);
  }


  players (e){
    e.target.id === "player1" ? this.setState({player1: e.target.value}) : this.setState({player2: e.target.value})
  }

  // Funcion que lleva al board
  showBoard(e) {
    e.preventDefault();
    if(this.state.player1 === "" || this.state.player2 === "") {alert("No user registered.")}
    else if (this.state.player1 === this.state.player2) {alert("Same names registered for both users.")}
    else{
      this.setState({ estado: 2})
    }
  }
  render() {
    return (
      <>
        <div className="container" id="baseT">
          <div className="row">
            <div className="col">
              <h1>HOLA MUNDO1</h1>
            </div>
          </div>
          <div className={`row ${this.state.estado === 1 ? this.state.mostrar : this.state.esconder}`}>
              <PlayerSelection btnBoard={this.showBoard} input={this.players}/>
          </div>
          <div className={`row ${this.state.estado === 2 ? this.state.mostrar : this.state.esconder}`}>
              <TTCboard />
          </div>
          
        </div>
      </>
    );
  }
}


export default App;
