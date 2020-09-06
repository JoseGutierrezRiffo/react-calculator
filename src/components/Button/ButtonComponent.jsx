import React from "react";

export const ButtonComponent = ({ title, onClick, value, type }) => {
  const buttonStyle = type => {
    switch (type) {
      case "light":
        return "btn btn btn-light btn-block";
      case "primary":
        return "btn btn btn-primary btn-block";
      case "danger":
        return "btn btn btn-danger btn-block";
      default:
        return "btn btn btn-light btn-block";
    }
  };
  return (
    <>
      <div className="col-sm-3">
        <button
          className={buttonStyle(type)}
          value={value}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    </>
  );
};
