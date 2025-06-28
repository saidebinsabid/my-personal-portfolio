import React from "react";
import logo from "../assets/logo.png";
const MyLogo = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <img className="h-10 w-8 object-contain" src={logo} alt="Logo" />
        <span className="text-2xl font-bold text-white font-rajdhani">
          Saide
        </span>
      </div>
    </>
  );
};

export default MyLogo;
