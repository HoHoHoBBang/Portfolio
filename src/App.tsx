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
        <div className="flex bg-gray-900">
          <div className="flex-1">
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
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
