import React from "react";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
          <Link to="navbar" spy={true} smooth={true}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="fixed bottom-10 right-5 hidden cursor-pointer rounded-lg border bg-white/15 p-2 text-white max-sm:flex"
            />
          </Link>
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
