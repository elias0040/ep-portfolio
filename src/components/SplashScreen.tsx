import React from "react";
import "../index.css";
import TypeAnimation from "react-type-animation";
import SplashButton from "./SplashButton";
import { useContext } from "react";
import { PageContext } from "../pages/Home";

function SplashScreen(props) {
  const { setPage } = useContext(PageContext);

  return (
    <div className="ml-1 w-full h-screen py-10 px-20 h-16 flex flex-col justify-center items-start">
      <label className="text-pink-700 text-7xl font-bold mb-2">Hello.</label>
      <label className="text-pink-600 text-6xl font-bold mb-3">
        My name is Elias.
      </label>
      <label className="text-pink-500 text-6xl font-bold mb-4">
        I'm a web developer.
      </label>


      <label className="text-gray-400 text-large font-mono">
        Javascript / React / C# / ASP.NET / SQL / Strapi / Python / Unity / And more!
      </label>
      <SplashButton onClick={() => {
        props.about.current.scrollIntoView({ behavior: "smooth" });
      }} />
    </div>
  );
}

export default SplashScreen;
