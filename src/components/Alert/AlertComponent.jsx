import React from "react";

const AlertComponent = ({ title, styleAlert }) => {
  const AlertStyle = styleAlert => {
    switch (styleAlert) {
      case "primary":
        return "alert alert-primary text-center";
      case "secondary":
        return "alert alert-secondary text-center";
      case "success":
        return "alert alert-success text-center";
      case "danger":
        return "alert alert-danger text-center";
      case "warning":
        return "alert alert-warning text-center";
      case "info":
        return "alert alert-info text-center";
      case "dark":
        return "alert alert-dark text-center";
      default:
        return "alert alert-light text-center";
    }
  };

  return (
    <div className={AlertStyle(styleAlert)} role="alert">
      {title}
    </div>
  );
};

export default AlertComponent;
