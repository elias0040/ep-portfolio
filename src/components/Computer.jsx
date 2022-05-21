/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import MousePosContext from "./MousePosContext";
import { cosineInterpolate } from "../utils/InteractivityUtils";

export default function Computer({ ...props }) {
  const myObj = useRef();
  const { globalCoords } = useContext(MousePosContext);

  useFrame(() => {
    myObj.current.rotation.y = cosineInterpolate(
      myObj.current.rotation.y,
      globalCoords.x * 2 + 1,
      0.12
    );
    //myObj.current.position.y = state.mouse.y * -0.1;
    myObj.current.rotation.x = cosineInterpolate(
      myObj.current.rotation.x,
      globalCoords.y,
      0.1
    );
    //myObj.current.position.x = state.mouse.x * -0.1;
  });

  /*useFrame(({ clock }) => {
    if (myObj.current.position.x > 14) {
      myObj.current.position.x = -14;
    } else {
      myObj.current.position.x += 0.02;
    }
  });*/

  const group = useRef();
  const { nodes, materials } = useGLTF("/computer.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <mesh
        geometry={nodes.Node.geometry}
        ref={myObj}
        material={materials.palette}
      />
    </group>
  );
}

useGLTF.preload("/computer.gltf");