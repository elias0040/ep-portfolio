import { createContext, useEffect, useState, useMemo, useContext } from "react";
import "./App.css";

import Home from "./pages/Home";

import MousePosContext from "./components/MousePosContext";

function App() {

  /*const [globalCoords, setGlobalCoords] = useState({ x: 2, y: 1 });
  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX - window.screen.width / 2,
        y: event.screenY - window.screen.height / 2,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };

  });

  const getMousePos = useMemo(() => ({ globalCoords, setGlobalCoords })
    , [globalCoords, setGlobalCoords]);*/

  const { globalCoords } = useContext(MousePosContext);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
