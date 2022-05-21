import React from "react";
import "../index.css";
import TypeAnimation from "react-type-animation";
import SplashButton from "./SplashButton";
import ToolbarButton from "./ToolbarButton";

import { useContext } from "react";
import { PageContext } from "../pages/Home";

function Sidebar(props) {
  const { page } = useContext(PageContext);

  return (
    <div className="p-4 flex flex-col justify-center h-screen fixed z-10 w-500px
      bg-transparent">
      <div className={`hidden w-25 h-3 py-3 px-3 mb-6 h-16 bg-white rounded-full absolute`}>

      </div>
      <ToolbarButton label="About me" icon="icon_face.png" selected={(page === 1)} />
      <ToolbarButton label="Projects" icon="icon_project.png" selected={(page === 2)} />
      <ToolbarButton label="Education" icon="icon_education.png" selected={(page === 3)} />
      <ToolbarButton label="Contact" icon="icon_contact.png" selected={(page === 4)} />
    </div>
  );
}

export default Sidebar;
