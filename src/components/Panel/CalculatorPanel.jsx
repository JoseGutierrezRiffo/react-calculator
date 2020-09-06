import React from "react";
import ButtonComponent from "../Button";

const CalculatorPanel = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12">
            <input
                type="text"
                className="form-control text-right"
                disabled
            />
          </div>
        </div>
        <div className="row mt-2">
          <ButtonComponent title={"+"} type={"light"} value={"+"} />
          <ButtonComponent title={"-"} type={"light"} value={"-"} />
          <ButtonComponent title={"x"} type={"light"} value={"x"} />
          <ButtonComponent title={"/"} type={"light"} value={"/"} />
        </div>

        <div className="row mt-2">
          <ButtonComponent title={"7"} type={"light"} value={"7"} />
          <ButtonComponent title={"8"} type={"light"} value={"8"} />
          <ButtonComponent title={"9"} type={"light"} value={"9"} />
          <ButtonComponent title={"="} type={"primary"} />
        </div>

        <div className="row mt-2">
          <ButtonComponent title={"4"} type={"light"} value={"4"} />
          <ButtonComponent title={"5"} type={"light"} value={"5"} />
          <ButtonComponent title={"6"} type={"light"} value={"6"} />
        </div>

        <div className="row mt-2">
          <ButtonComponent title={"1"} type={"light"} value={"1"} />
          <ButtonComponent title={"2"} type={"light"} value={"2"} />
          <ButtonComponent title={"3"} type={"light"} value={"3"} />
        </div>

        <div className="row mt-2">
          <ButtonComponent title={"0"} type={"light"} value={"0"} />
          <ButtonComponent title={"."} type={"light"} value={"."} />
          <ButtonComponent title={"AC"} type={"danger"} />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPanel;
