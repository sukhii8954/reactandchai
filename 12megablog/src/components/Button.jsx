/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({
  children,
  type,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "", // wherever we use this button so whatever tailwind is passed it will get into it
  ...props // any other props that user is passing
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg  ${textColor} ${bgColor} ${className}`}
      {...props}
    >
      {/* others parameters that user will pass in btn will spread in props */}
      {children}
    </button>
  );

//    same we do in our input button with using new hook 
};

export default Button;
