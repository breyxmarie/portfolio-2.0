import React, { createContext, useState, useEffect } from "react";

const ColorContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  backgroundColor: "#FAF6ED",
  color1: "#6C3B47",
  color2: "#D5C4A1",
  color3: "#D58E7F",
  color4: "#FFFFFF",
  color5: "#EBD5D5",
  color6: "#2C2C2C",
  color7: "#D5C4A1",

  font1: "Lobster Two",
  font2: "Caladea",
  setBackgroundColor: () => {},
  setColor1: () => {},
  setColor2: () => {},
  setColor3: () => {},
  setColor4: () => {},
  setColor5: () => {},
  setColor6: () => {},
  setColor7: () => {},
  setDarkMode: () => {},
  setLightMode: () => {},

  setFont1: () => {},
  setFont2: () => {},
});

const ColorProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#FAF6ED");
  const [color1, setColor1] = useState("#6C3B47");
  const [color2, setColor2] = useState("#D5C4A1");
  const [color3, setColor3] = useState("#D58E7F");
  const [color4, setColor4] = useState("#FFFFFF");
  const [color5, setColor5] = useState("#EBD5D5");
  const [color6, setColor6] = useState("#2C2C2C");
  const [color7, setColor7] = useState("#FDFDFD");

  const [font1, setFont1] = useState("Lobster Two");
  const [font2, setFont2] = useState("Caladea");

  const setDarkMode = () => {
    setBackgroundColor("#484844"), setColor1("#000000");
    setColor2("#000000");
    setColor3("#000000");
    setColor4("#000000");
    setColor5("#000000");
    setColor6("#000000");
  };

  const setLightMode = () => {
    setBackgroundColor("#FAF6ED"), setColor1("#6C3B47");
    setColor2("#D5C4A1");
    setColor3("#D58E7F");
    setColor4("#FFFFFF");
    setColor5("#EBD5D5");
    setColor6("#2C2C2C");
    setColor7("#FDFDFD");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    backgroundColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    isDarkMode,
    toggleDarkMode,
    font1,
    font2,

    setBackgroundColor,
    setColor1,
    setColor2,
    setColor3,
    setColor4,
    setColor5,
    setColor6,
    setColor7,
    setDarkMode,
    setLightMode,

    setFont1,
    setFont2,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorContext;
export { ColorProvider };
