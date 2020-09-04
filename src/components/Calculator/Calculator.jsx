import React from "react";

const Calculator = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12"><input type="number" className="form-control"/></div>

      </div>
      <div className="row mt-2">
        <div className="col-sm-3"><button className="btn btn-light btn-block">+</button></div>
        <div className="col-sm-3"><button className="btn btn-light btn-block">-</button></div>
        <div className="col-sm-3"><button className="btn btn-light btn-block">x</button></div>
        <div className="col-sm-3"><button className="btn btn-light btn-block">/</button></div>
      </div>

        <div className="row mt-2">
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">7</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">8</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">9</button></div>
            <div className="col-sm-3"><button className="btn btn-primary btn-block">=</button></div>
        </div>

        <div className="row mt-2">
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">4</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">5</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">6</button></div>

        </div>

        <div className="row mt-2">
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">1</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">2</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">3</button></div>
        </div>

        <div className="row mt-2">
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">0</button></div>
            <div className="col-sm-3"><button className="btn btn btn-light btn-block">.</button></div>
            <div className="col-sm-3"><button className="btn btn-danger btn-block">AC</button></div>
        </div>
    </div>
  );
};

export default Calculator;
