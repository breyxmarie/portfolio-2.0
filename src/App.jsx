import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AboutMe1 from "./components/AboutMe1";
import AboutMe2 from "./components/AboutMe2";
import Project1 from "./components/Project1";
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
        <ContactMe />
      </ColorProvider>
    </Box>
  );
}

export default App;
