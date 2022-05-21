import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";

function Box2() {
  const myMesh = React.useRef();

  /*useFrame((state) => {
    myMesh.current.rotation.x =
      state.mouse.y * 0.4 + 1 + state.mouse.x * 0.4 + 1;
    myMesh.current.rotation.y = state.mouse.x * 0.4 + 1;
  });*/

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    //myMesh.current.rotation.x = -0.5 * a;
    //myMesh.current.rotation.y = -0.5 * a;
  });

  return (
    <mesh ref={myMesh}>
      <octahedronBufferGeometry attach="geometry" args={[2, 0, 1]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Box2;
