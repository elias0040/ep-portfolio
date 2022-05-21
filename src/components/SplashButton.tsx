import React from "react";
import "../index.css";
import { ReactSVG } from "react-svg";

function SplashButton(props) {
  return (
    <div onClick={props.onClick}
      className="w-60 mt-10 outline outline-1 outline-pink-600 rounded-full h-20 bg-transparent flex flex-row justify-start items-center p-6 hover:bg-indigo-900">
      <div className="w-full">
        <label className="text-pink-100 text-2xl font-light flex justify-center">
          About me
        </label>
      </div>
    </div>
  );
}

export default SplashButton;
