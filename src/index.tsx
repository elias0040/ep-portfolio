import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MousePosContext from './components/MousePosContext';


function Index() {

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: (event.screenX - (window.screen.width * 2)) * 0.0001,
        y: (event.screenY - (window.screen.height * 2)) * 0.0001,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };

  });

  const getMousePos = useMemo(() => ({ globalCoords, setGlobalCoords })
    , [globalCoords, setGlobalCoords]);

  return (
    <MousePosContext.Provider value={getMousePos}>
      <App />
    </MousePosContext.Provider>

  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);


