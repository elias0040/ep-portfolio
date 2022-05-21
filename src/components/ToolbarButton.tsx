import React from "react";
import "../index.css";

function ToolbarButton(props) {
  return (
    <div className={`w-25 h-3 py-3 px-3 mb-6 h-16 outline outline-1 outline-gray rounded-full opacity-60
       flex flex-col justify-center items-center ${(props.selected ? "bg-white" : "")} hover:bg-indigo-900`}>

    </div>
  );
}

export default ToolbarButton;
