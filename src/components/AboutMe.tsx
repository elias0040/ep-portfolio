import React from "react";
import "../index.css";
import TypeAnimation from "react-type-animation";
import SplashButton from "./SplashButton";
import Skills from "./Skills";

function AboutMe(props) {
  return (
    <div className="ml-1 w-5/6 h-screen px flex flex-col justify-start items-center px-20">
      <label className="text-pink-700 text-6xl font-bold mb-2">About me</label>
      <div className="w-full h-max-20 flex flex-row h-1/2 justify-start items-center mb-4">
        <div className="w-full">
          <div className="w-full min-w-fit outline outline-1 h-100 rounded-lg outline-pink-700">
            <p className="w-full text-xl font-light text-pink-500 p-10 ">
              My name is Elias Persson, and I'm an Interaction Design Student working as a Web Developer, currently residing in Umeå, Sweden.
              I've had a passion for software development since I was 10 year old, an interest which originally originated
              from my obsession with video games, and wanting to create one myself.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full items-center justify-start">
        <label className="text-pink-700 text-4xl font-bold mb-5">Skills</label>
        <Skills />
      </div>

    </div>
  );
}

export default AboutMe;
