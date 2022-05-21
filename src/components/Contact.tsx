import React from "react";
import "../index.css";
import TypeAnimation from "react-type-animation";
import SplashButton from "./SplashButton";
import Skills from "./Skills";

function Contact(props) {
  return (
    <div className="ml-1 w-5/6 h-screen px flex flex-col justify-start items-center px-20">
      <label className="text-pink-700 text-6xl font-bold mb-2">Contact</label>
      <div className="w-full h-max-20 flex flex-row h-1/2 justify-start items-center mb-4">
        <label className="text-3xl text-white">{"Under Construction :("}</label>
      </div>
    </div>
  );
}

export default Contact;
