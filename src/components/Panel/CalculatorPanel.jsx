import React, { useState } from "react";
import ButtonComponent from "../Button";

const CalculatorPanel = ({ initialValue }) => {
  const [total, setTotal] = useState(initialValue || "");

  const addValue = e => {
    setTotal(total + e.target.value);
  };

  const totalValue = () => {
    setTotal(eval(total));
  };

  const clearDisplay = () => {
    setTotal("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12">
            <input type="text" className="form-control text-right" value={total} disabled />
          </div>
        </div>
        <div className="row mt-2">
          <ButtonComponent
            title={"+"}
            type={"light"}
            value={"+"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"-"}
            type={"light"}
            value={"-"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"x"}
            type={"light"}
            value={"x"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"/"}
            type={"light"}
            value={"/"}
            onClick={addValue}
          />
        </div>

        <div className="row mt-2">
          <ButtonComponent
            title={"7"}
            type={"light"}
            value={"7"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"8"}
            type={"light"}
            value={"8"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"9"}
            type={"light"}
            value={"9"}
            onClick={addValue}
          />
          <ButtonComponent title={"="} type={"primary"} onClick={totalValue} />
        </div>

        <div className="row mt-2">
          <ButtonComponent
            title={"4"}
            type={"light"}
            value={"4"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"5"}
            type={"light"}
            value={"5"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"6"}
            type={"light"}
            value={"6"}
            onClick={addValue}
          />
        </div>

        <div className="row mt-2">
          <ButtonComponent
            title={"1"}
            type={"light"}
            value={"1"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"2"}
            type={"light"}
            value={"2"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"3"}
            type={"light"}
            value={"3"}
            onClick={addValue}
          />
        </div>

        <div className="row mt-2">
          <ButtonComponent
            title={"0"}
            type={"light"}
            value={"0"}
            onClick={addValue}
          />
          <ButtonComponent
            title={"."}
            type={"light"}
            value={"."}
            onClick={addValue}
          />
          <ButtonComponent
            title={"AC"}
            type={"danger"}
            onClick={clearDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPanel;
