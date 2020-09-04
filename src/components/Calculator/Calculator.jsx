import React from "react";
import {
  ButtonComponentDanger,
  ButtonComponentLight,
  ButtonComponentPrimary
} from "../Button";

const Calculator = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <input type="number" className="form-control" />
        </div>
      </div>
      <div className="row mt-2">
        <ButtonComponentLight title={"+"} />
        <ButtonComponentLight title={"-"} />
        <ButtonComponentLight title={"x"} />
        <ButtonComponentLight title={"/"} />
      </div>

      <div className="row mt-2">
        <ButtonComponentLight title={"7"} />
        <ButtonComponentLight title={"8"} />
        <ButtonComponentLight title={"9"} />
        <ButtonComponentPrimary title={"="} />
      </div>

      <div className="row mt-2">
        <ButtonComponentLight title={"4"} />
        <ButtonComponentLight title={"5"} />
        <ButtonComponentLight title={"6"} />
      </div>

      <div className="row mt-2">
        <ButtonComponentLight title={"1"} />
        <ButtonComponentLight title={"2"} />
        <ButtonComponentLight title={"3"} />
      </div>

      <div className="row mt-2">
        <ButtonComponentLight title={"0"} />
        <ButtonComponentLight title={"."} />
        <ButtonComponentDanger title={"AC"} />
      </div>
    </div>
  );
};

export default Calculator;
