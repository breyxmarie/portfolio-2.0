import React, { createContext, useState, useEffect } from "react";

const ColorContext = createContext({
  backgroundColor: "#FAF6ED",
  color1: "#6C3B47",
  color2: "#D5C4A1",
  color3: "#D58E7F",
  color4: "#FFFFFF",
  color5: "#EBD5D5",
  color6: "#2C2C2C",

  font1: "Lobster Two",
  font2: "Caladea",
  setBackgroundColor: () => {},
  setColor1: () => {},
  setColor2: () => {},
  setColor3: () => {},
  setColor4: () => {},
  setColor5: () => {},
  setColor6: () => {},
  setFont1: () => {},
  setFont2: () => {},
});

const ColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#FAF6ED");
  const [color1, setColor1] = useState("#6C3B47");
  const [color2, setColor2] = useState("#D5C4A1");
  const [color3, setColor3] = useState("#D58E7F");
  const [color4, setColor4] = useState("#FFFFFF");
  const [color5, setColor5] = useState("#EBD5D5");
  const [color6, setColor6] = useState("#2C2C2C");
  const [font1, setFont1] = useState("Lobster Two");
  const [font2, setFont2] = useState("Caladea");

  const value = {
    backgroundColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,

    font1,
    font2,

    setBackgroundColor,
    setColor1,
    setColor2,
    setColor3,
    setColor4,
    setColor5,
    setColor6,
    setFont1,
    setFont2,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorContext;
export { ColorProvider };
