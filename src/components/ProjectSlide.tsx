import React, { useEffect } from "react";
import "../index.css";
import TypeAnimation from "react-type-animation";
import SplashButton from "./SplashButton";
import { animated, useSpring, config } from "react-spring";
import { useState, useContext } from "react";
import { SelectedContext } from "./Projects";
import { isJSDocNullableType } from "typescript";

function ProjectSlide(props) {

  const [hover, setHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const { slideSelected, setSlideSelected } = useContext(SelectedContext);

  const s = 3; //scalar
  const w = 80; //width
  const h = 40; //height
  const m = 1.4; //size multiplier
  const p = 30 //padding;

  const selectedScalar = 11;



  useEffect(() => {
    if (slideSelected != props.id) setIsSelected(false);
  }, [slideSelected]);

  useEffect(() => {
    if (!isSelected) {
      if (slideSelected == props.id) setSlideSelected(null);
      return;
    };
    setHover(false);
    //@ts-ignore
    setSlideSelected(props.id);

  }, [isSelected]);

  const styleSelected = useSpring({
    from: {
      width: (hover ? w : w * m) * (isSelected ? selectedScalar : s),
      height: (hover ? h : h * m) * (isSelected ? selectedScalar * 1.5 : s),
      backgroundColor: props.bg,
      padding: (hover ? 0 : p),
      margin: 10,
      borderRadius: 50,
      overflow: 'hidden',
      alignItems: isSelected ? 'start' : 'center',
      //display: ((slideSelected != null && slideSelected != props.id) ? "inline" : "none"),

    },
    to: {
      width: (hover ? w * m : w) * (isSelected ? selectedScalar : s),
      height: (hover ? h * m : h) * (isSelected ? selectedScalar * 1.5 : s),
      backgroundColor: props.bg,
      padding: (hover ? p : 0),
      borderRadius: 20,
      margin: 10,
      overflow: 'hidden',
      alignItems: isSelected ? 'center' : 'start',
      //display: ((slideSelected != null && slideSelected != props.id) ? "none" : "inline"),
    },
  });

  const imgStyle = useSpring({

    from: {
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
    },
    to: {
      width: "100%",
      height: '100%',
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  return (
    ((!isSelected && slideSelected === null) || (slideSelected === props.id)) ?
      <animated.div
        //@ts-ignore
        style={styleSelected}
        onMouseEnter={() => setHover(isSelected ? false : true)} onMouseLeave={() => setHover(false)} onClick={() => (!isSelected ? setIsSelected((props.content != null)) : null)}>
        {(isSelected && props.content != null) ?
          <div className="relative w-full h-full">
            <img src={require("../assets/icons/icon_close.png")} className="z-20 absolute right-0" onClick={() => setIsSelected(false)} />
            <props.content pic={props.pic} />
          </div>
          :
          <div className={`w-full h-full p-2 flex flex-col justify-center items-center ${props.bg} ${isSelected} rounded-lg`}>
            <img className="w-full" src={require("../assets/thumbnails/" + (props.pic))} />
          </div>
        }
      </animated.div>
      :
      null

  );
}

export default ProjectSlide;
