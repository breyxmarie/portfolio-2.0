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

  linkImage: "/images/link.png",
  githubImage: "/images/github.png",
  barImage: "images/bar.png",
  searchImage: "images/search.png",

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
  setLinkImage: () => {},
  setGithubImage: () => {},
  setBarImage: () => {},
  setSearchImage: () => {},
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

  const [linkImage, setLinkImage] = useState("/images/link.png");
  const [githubImage, setGithubImage] = useState("/images/github.png");
  const [barImage, setBarImage] = useState("images/bar.png");
  const [searchImage, setSearchImage] = useState("images/search.png");

  const setDarkMode = () => {
    setBackgroundColor("#484844"), setColor1("#93C4B8");
    setColor2("#D3D3D3");
    setColor3("#2A7180");
    setColor4("#000000");
    setColor5("#D3D3D3");
    setColor6("#D3D3D3");
    setColor7("#D3D3D3");

    setLinkImage("/images/link.png");
    setGithubImage("/images/github.png");
    setBarImage("images/nutrifyme.png");
    setSearchImage("images/nutrifyme.png");
  };

  const setLightMode = () => {
    setBackgroundColor("#FAF6ED"), setColor1("#6C3B47");
    setColor2("#D5C4A1");
    setColor3("#D58E7F");
    setColor4("#FFFFFF");
    setColor5("#EBD5D5");
    setColor6("#2C2C2C");
    setColor7("#FDFDFD");

    setLinkImage("/images/link.png");
    setGithubImage("/images/github.png");
    setBarImage("images/bar.png");
    setSearchImage("images/search.png");
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
    linkImage,
    githubImage,
    barImage,
    searchImage,

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

    setLinkImage,
    setGithubImage,
    setBarImage,
    setSearchImage,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorContext;
export { ColorProvider };
