import React from "react";

export const ButtonComponent = ({
  title,
  onClick,
  value,
  styleButton,
  type = "button"
}) => {
  const buttonStyle = styleButton => {
    switch (styleButton) {
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
          type={type}
          className={buttonStyle(styleButton)}
          value={value}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    </>
  );
};
