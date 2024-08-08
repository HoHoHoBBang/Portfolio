import React, { useEffect, useState } from "react";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

interface Props {
  children: React.ReactNode;
}

const App = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const Nav = ({ children }: Props) => {
    return (
      <>
        <div className="flex bg-gray-900">
          <div className="flex-1">
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
          <div
            className="pointer-events-none fixed flex h-[600px] w-[600px] items-center justify-center rounded-full bg-blue-900/10 blur-3xl"
            style={{ left: cursorX - 300 + "px", top: cursorY - 300 + "px" }}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <Nav>
        <About />
        <Project />
        <Experience />
        <Contact />
      </Nav>
    </>
  );
};

export default App;
