import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AboutMe1 from "./components/AboutMe1";
import AboutMe2 from "./components/AboutMe2";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";
import Project7 from "./components/Project7";

import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import { ColorProvider } from "./components/ColorContext";

import ColorContext from "./components/ColorContext"; // Import the context
import Box from "@mui/material/Box";

function App() {
  const [count, setCount] = useState(0);
  const {
    backgroundColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,

    font1,
    setBackgroundColor,
    setColor1,
    setColor2,
    setColor3,
    setColor4,
    setColor5,
    setColor6,

    setFont1,
  } = useContext(ColorContext);
  return (
    <Box sx={{ background: backgroundColor, width: "100vw" }}>
      <ColorProvider>
        <Home />
        <NavBar />
        <AboutMe1 />
        <AboutMe2 />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />

        <ContactMe />
      </ColorProvider>
    </Box>
  );
}

export default App;
