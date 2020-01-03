import React from 'react';


class PlayerSelection extends React.Component {
    render() {
        return (
            <div className="container" id="playerselectionbody">
                <div className="row">
                    <div className="col">
                        <h3>HOLA MUNDO</h3>
                        <input type="text" id="playerinputbox" placeholder="Player1 username"></input>
                        <input type="text" id="playerinputbox" placeholder="Player 2 username"></input>
                        <div className="col">
                            <div id="playersignX">X</div>
                            <div id="playersignO">O</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PlayerSelection;