import React from 'react';



class TTCboard extends React.Component{
    render(){
        
        return(
            <>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>hola mundo </h1>
                        <input className="btn btn btn-outline-dark" type="button" value="Input"></input>
                    </div>
            <div className="container" id="board">
                <div className="row mt-1">
                    <div className="col-4 border-bottom text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                    <div className="col-4 border-right border-left border-bottom text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                    <div className="col-4 border-bottom text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                </div>
                <div className="row">
                <div className="col-4 border-bottom text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                <div className="col-4 border-bottom border-right border-left text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                <div className="col-4 border-bottom text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                </div>
                <div className="row">
                <div className="col-4 text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                <div className="col-4 border-left border-right text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                <div className="col-4 text-center display-1 font-weight-bold text-decoration-none" id="spotTTC">X</div>
                </div>
            </div>
                </div>
            </div>

            </>
        )
    }
}

export default TTCboard;