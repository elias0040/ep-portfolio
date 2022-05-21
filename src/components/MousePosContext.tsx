import { createContext } from "react";

const MousePosContext = createContext({
  globalCoords: { x: 1, y: 1 },
  setGlobalCoords: {},
});

export default MousePosContext;
