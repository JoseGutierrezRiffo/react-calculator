import React from "react";

export const ButtonComponentLight = ({ title }) => {
  return (
    <>
      <div className="col-sm-3">
        <button className="btn btn btn-light btn-block">{title}</button>
      </div>
    </>
  );
};

export const ButtonComponentDanger = ({ title }) => {
  return (
    <>
      <div className="col-sm-3">
        <button className="btn btn btn-danger btn-block">{title}</button>
      </div>
    </>
  );
};

export const ButtonComponentPrimary = ({ title }) => {
  return (
    <>
      <div className="col-sm-3">
        <button className="btn btn btn-primary btn-block">{title}</button>
      </div>
    </>
  );
};

