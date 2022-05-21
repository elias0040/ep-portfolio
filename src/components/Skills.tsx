import { useState, useEffect } from "react";
import { animated, useSpring, config } from "react-spring";

function Skill(props) {
  const [hover, setHover] = useState(false);
  const rotation = 10;

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: hover ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: config.wobbly,
  });

  const style2 = useSpring({
    display: "inline-block",

    from: {
      width: hover ? 0 : 80,
      backgroundColor: hover ? "transparent" : props.bg,
      padding: hover ? 0 : 5,
      overflow: "hidden",
      textAlign: "center",
      borderRadius: hover ? 120 : 60,
    },
    to: {
      width: hover ? 80 : 0,
      backgroundColor: hover ? props.bg : "transparent",
      padding: hover ? 5 : 0,
      overflow: "hidden",
      textAlign: "center",
      borderRadius: hover ? 60 : 120,
    },
    config: config.gentle,
  });

  useEffect(() => {
    // Unchanged
  }, [hover]);

  return (
    <div
      className="w-1/6 h-30 flex flex-col justify-start items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <div className="flex flex-col h-full mb-20">
        <animated.img
          src={require("../assets/thumbnails/" + props.img)}
          //@ts-ignore
          style={style}
        />
      </div>
      <div className="flex flex-col h-full w-full justify-end items-center">
        <animated.div
          //@ts-ignore
          style={style2}
        >
          <label className="text-white font-bold">
            {props.label}
          </label>
        </animated.div>
      </div>

    </div>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-row flex-wrap w-full">
      <Skill img="javascript.png" bg="orange" label="Javascript" />
      <Skill img="react.png" bg="cyan" label="React" />
      <Skill img="csharp.png" bg="purple" label="C#" />
      <Skill img="aspnet.png" bg="blue" label="ASP.NET" />
      <Skill img="unity.png" bg="gray" label="Unity" />
      <Skill img="java.png" bg="teal" label="Java" />
    </div>
  );
}
