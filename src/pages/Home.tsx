import "../App.css";
import SplashScreen from "../components/SplashScreen";
import { Canvas } from "@react-three/fiber";
import AboutMe from "../components/AboutMe";
import Sidebar from "../components/Sidebar";
//@ts-ignore
import Computer from "../components/Computer";
import Projects from "../components/Projects";
import MousePosContext from "../components/MousePosContext";
import Earth from "../components/Earth";
import { useContext, useRef, createContext, useState, useEffect } from "react";
import Contact from "../components/Contact";



function Home() {
  const value = useContext(MousePosContext);
  const about = useRef(null);
  const projects = useRef(null);

  const [page, setPage] = useState(1);

  const handleScroll = () => {
    const position = window.pageYOffset + (window.innerHeight / 2);
    const p = Math.ceil(position / window.innerHeight);

    setPage((p > 0) ? p : 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row ">
      <PageContext.Provider value={{ page, setPage }}>
        <Sidebar />
      </PageContext.Provider>
      <div className="mainContainer">
        <div className="flex relative flex-row justify-start items-center w-full h-screen">
          <SplashScreen about={about} />
          <div className="w-1/2 absolute right-0 flex justify-end items-end h-screen">
            <MousePosContext.Consumer>
              {value => (
                <Canvas orthographic camera={{ zoom: 40, position: [10, 10, 10] }} className="threeCanvas">
                  <ambientLight intensity={2} />
                  <MousePosContext.Provider value={value}>
                    <Computer />
                  </MousePosContext.Provider>

                </Canvas>
              )}
            </MousePosContext.Consumer>
          </div>

        </div>
        <div ref={about} className="flex relative flex-row w-full h-screen justify-end items-end">
          <div className="absolute left-0 w-1/2 inline-block flex justify-end items-end h-screen">
            <MousePosContext.Consumer>
              {value => (
                <Canvas orthographic camera={{ zoom: 40, position: [10, 0, 0] }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[180, 0, 180]} intensity={0} />
                  <MousePosContext.Provider value={value}>
                    <Earth />
                  </MousePosContext.Provider>

                </Canvas>
              )}
            </MousePosContext.Consumer>

          </div>
          <div className="w-2/3">
            <AboutMe className="overflow-hidden" />
          </div>

        </div>
        <div className="flex flex-row w-full h-screen overflow-hidden">
          <Projects />
        </div>
        <div className="flex flex-row w-full h-screen overflow-hidden">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export const PageContext = createContext({
  page: 1,
  setPage: (number) => { },
})

export default Home;

