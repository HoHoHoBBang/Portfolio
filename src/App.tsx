import React from "react";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

interface Props {
  children: React.ReactNode;
}

const App = () => {
  const Nav = ({ children }: Props) => {
    return (
      <>
        <div className="flex bg-gray-900 max-lg:flex-col">
          <div className="flex-1">
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
          <div className="pointer-events-none fixed flex h-[600px] w-[600px] items-center justify-center rounded-full bg-blue-900/10 blur-3xl" />
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
