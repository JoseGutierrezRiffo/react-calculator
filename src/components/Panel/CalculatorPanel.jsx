import React, { useState } from "react";
import ButtonComponent from "../Button";
import AlertComponent from "../Alert";

const CalculatorPanel = ({ initialValue }) => {
  const [total, setTotal] = useState(initialValue || "");
  const [error, setError] = useState(false);

  const clearDisplay = () => {
    setTotal("");
  };

  const addValue = e => {
    let valor = e.target.value;
    if ((!total && valor === "*") || (!total && valor === "/")) {
      valor = "";
      console.log(valor);
    }

    setTotal(total + valor);
  };

  const totalValue = e => {
    e.preventDefault();

    setError(false);
    try {
      if (total.length > 0) {
        return setTotal(eval(total));
      }
    } catch (error) {
      setTotal("");
      setError(true);
    }
  };

  return (
    <form onSubmit={totalValue}>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12">
              {error ? (
                <AlertComponent title={"Error"} styleAlert={"danger"} />
              ) : false}
              <input
                type="text"
                className="form-control text-right"
                value={total}
                disabled
              />
            </div>
          </div>
          <div className="row mt-2">
            <ButtonComponent
              title={"+"}
              styleButton={"light"}
              value={"+"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"-"}
              styleButton={"light"}
              value={"-"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"*"}
              styleButton={"light"}
              value={"*"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"/"}
              styleButton={"light"}
              value={"/"}
              onClick={addValue}
            />
          </div>

          <div className="row mt-2">
            <ButtonComponent
              title={"7"}
              styleButton={"light"}
              value={"7"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"8"}
              styleButton={"light"}
              value={"8"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"9"}
              styleButton={"light"}
              value={"9"}
              onClick={addValue}
            />
            <ButtonComponent
              type={"submit"}
              title={"="}
              styleButton={"primary"}
              /*onClick={totalValue}*/
            />
          </div>

          <div className="row mt-2">
            <ButtonComponent
              title={"4"}
              styleButton={"light"}
              value={"4"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"5"}
              styleButton={"light"}
              value={"5"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"6"}
              styleButton={"light"}
              value={"6"}
              onClick={addValue}
            />
          </div>

          <div className="row mt-2">
            <ButtonComponent
              title={"1"}
              styleButton={"light"}
              value={"1"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"2"}
              styleButton={"light"}
              value={"2"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"3"}
              styleButton={"light"}
              value={"3"}
              onClick={addValue}
            />
          </div>

          <div className="row mt-2">
            <ButtonComponent
              title={"0"}
              styleButton={"light"}
              value={"0"}
              onClick={addValue}
            />
            <ButtonComponent
              title={"."}
              styleButton={"light"}
              value={"."}
              onClick={addValue}
            />
            <ButtonComponent
              title={"AC"}
              styleButton={"danger"}
              onClick={clearDisplay}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CalculatorPanel;
