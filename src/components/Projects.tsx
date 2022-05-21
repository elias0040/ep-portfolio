import React from "react";
import "../index.css";
import TypeAnimation from "react-type-animation";
import SplashButton from "./SplashButton";
import ProjectSlide from "./ProjectSlide";
import { useState, createContext } from "react";


export const SelectedContext = createContext({ slideSelected: null, setSlideSelected: (number) => { } });

function Projects(props) {
  const [slideSelected, setSlideSelected] = useState(null);

  return (
    <div className="ml-1 w-5/6 h-screen px h-16 flex flex-col justify-start items-start">
      <label className="text-pink-700 text-8xl font-bold mb-9">Projects</label>
      <div className="flex flex-row w-full h-screen">
        <div className="w-1/3">
          <div className="w-full outline outline-1 h-100 rounded-lg outline-pink-700">
            <p className="text-xl font-light text-pink-500 p-10 ">
              Here are some of the projects I've worked on. During the course of my education I've numerous
              opportunities to design and develop systems using a multitude of different stacks and frameworks.
            </p>
          </div>

        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center flex-wrap">
            <SelectedContext.Provider value={{ slideSelected, setSlideSelected }}>
              <ProjectSlide id={1} pic="p2p.png" label="" bg={"#be185d"} content={Place2Place} />
              <ProjectSlide id={2} pic="ledigajobb.png" label="" bg={"#14C38E"} content={Ledigajobb} />
              <ProjectSlide id={3} pic="umubook.png" label="" bg={"orange"} content={Umubook} />
            </SelectedContext.Provider>
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap">
            <SelectedContext.Provider value={{ slideSelected, setSlideSelected }}>
              <ProjectSlide id={4} pic="placeholder.png" label="" bg={"white"} />
              <ProjectSlide id={5} pic="placeholder.png" label="" bg={"white"} />
              <ProjectSlide id={6} pic="placeholder.png" label="" bg={"white"} />
            </SelectedContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

function Place2Place(props) {
  return (
    <div className="w-full h-full flex-col justify-center items-center">
      <div className="w-1/2 h-auto p-2">
        <img src={require("../assets/thumbnails/" + props.pic)} />
      </div>
      <div className="w-full h-4/6 overflow-hidden">
        <img src={require("../assets/thumbnails/p2p.JPG")} />
      </div>
      <div className="w-full h-full p-3 text-lg flex flex-col">
        <p className="w-full h-full text-black">
          Place2Place.se is an e-commerce site dedicated to helping businesses and organizations purchase
          or sell second-hand office furniture and peripherals. I am currently the sole backend-developer for this project.
        </p>
        <div className="h-full flex flex-col items-end justify-start">
          <a href="www.place2place.se">www.place2place.se</a>
        </div>
      </div>
    </div >
  );
}

function Ledigajobb(props) {
  return (
    <div className="w-full h-full flex-col justify-center items-center">
      <div className="w-1/2 h-auto p-2">
        <img src={require("../assets/thumbnails/" + props.pic)} />
      </div>
      <div className="w-full h-4/6 overflow-hidden">
        <img src={require("../assets/thumbnails/ledigajobb.JPG")} />
      </div>
      <div className="w-full h-full p-3 text-lg flex flex-col">
        <p className="w-full h-full text-black">
          Conceptual design project for the addition of several features for the job-posting site Ledigajobb.se.
          These features were mainly focused around an integration of user profile with integrated resumés, and an integrated CV-builder.
        </p>
        <div className="h-full flex flex-col items-end justify-start">
          <a href="www.place2place.se">www.place2place.se</a>
        </div>
      </div>
    </div >
  );
}

function Umubook(props) {
  return (
    <div className="w-full h-full flex-col justify-center items-center">
      <div className="w-1/2 h-auto p-2">
        <img src={require("../assets/thumbnails/" + props.pic)} />
      </div>
      <div className="w-full h-4/6 overflow-hidden">
        <img src={require("../assets/thumbnails/umubook2.jpg")} />
      </div>
      <div className="w-full h-full p-3 text-lg flex flex-col">
        <p className="w-full h-full text-black">
          A basic social media platform developed with three other students for a final course project. The site has basic
          social media features such as creating an account, creating posts, following users, liking and sharing posts, curated use feed, etc.
        </p>
        <div className="h-full flex flex-col items-end justify-start">
          <a href="www.place2place.se">www.place2place.se</a>
        </div>
      </div>
    </div >
  );
}

export default Projects;
