import React from 'react';


class PlayerSelection extends React.Component {
    render() {
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
                            <input type="text" id="playerinputbox" placeholder="Player1 username"></input>
                            <input type="text" id="playerinputbox" placeholder="Player 2 username"></input>
                            <div className="col">
                                <a href="http://" className="text-center display-1 font-weight-bold text-decoration-none">X</a>
                                <a href="http://" className="text-center display-1 font-weight-bold text-decoration-none">O</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default PlayerSelection;