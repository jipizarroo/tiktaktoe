import React from 'react';


function PlayerSelection(props){
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>HOLA MUNDO</h3>
                        </div>
                    </div>
                </div>

                <div className="container" id="playerselectionbody">
                    <div className="row">
                        <div className="col">
                            <h3>HOLA MUNDO</h3>
                            <input type="text" id="player1" placeholder="Player1 username" onChange={(e)=>props.input(e)}></input>
                            <input type="text" id="player2" placeholder="Player 2 username"onChange={(e)=>props.input(e)}></input>
                            <div className="col">
                                <a href="/" className="text-center display-1 font-weight-bold text-decoration-none" onClick={(e)=>props.btnBoard(e)}>X</a>
                                <a href="/" className="text-center display-1 font-weight-bold text-decoration-none" onClick={(e)=>props.btnBoard(e)}>O</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }


export default PlayerSelection;