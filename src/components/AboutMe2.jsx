import { useState, useEffect, useContext, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ColorContext from "./ColorContext"; // Import the context
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import { motion, useInView } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

function AboutMe2() {
  //? animation
  const ref = useRef(null);
  const isInView = useInView(ref);

  const topVariants = {
    hidden: {
      opacity: 0,
      y: "-100%", // Start off-screen
      transition: {
        duration: 3,
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
      },
    },
    visible: {
      opacity: 1,
      y: 0, // End position
      transition: {
        duration: 3, // Slower animation
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
        delay: 0, // Delay before animation starts
      },
    },
  };

  const bottomVariants = {
    hidden: {
      opacity: 0,
      y: "30%", // Start off-screen
      transition: {
        duration: 3,
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
      },
    },
    visible: {
      opacity: 1,
      y: 0, // End position
      transition: {
        duration: 3, // Slower animation
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
        delay: 0, // Delay before animation starts
      },
    },
  };
  const leftVariants = {
    hidden: {
      opacity: 0,
      // x: -80, // Start off-screen
      x: "-20vw", // Move fully off-screen based on viewport width

      transition: {
        duration: 3,
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
      },
    },
    visible: {
      opacity: 1,
      x: 0, // End position
      transition: {
        duration: 1.5, // Slower animation
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
        delay: 0, // Delay before animation starts
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      //    x: 500, // Start off-screen
      x: "30vw", // Move fully off-screen based on viewport width

      transition: {
        duration: 5.5,
        //  ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
      },
    },
    visible: {
      opacity: 1,
      x: 0, // End position
      transition: {
        duration: 1.5, // Slower animation
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
        delay: 0, // Delay before animation starts
      },
    },
  };
  //?
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    backgroundColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    linkImage,
    githubImage,
    barImage,
    searchImage,
    font1,
    setBackgroundColor,
    setColor1,
    setColor2,
    setColor3,
    setColor4,
    setColor5,
    setColor6,

    setFont1,
    font2,
    setFont2,
  } = useContext(ColorContext);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };
  //? Sliders
  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Enable infinite looping
    slidesToShow: 1, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per click
    // You can define the custom arrow components directly here:
  };
  const sliderRefs = useRef([]);
  const sliderRefC = useRef(null);
  const handleNextC = () => {
    sliderRefC.current.slickNext(); // Trigger next slide transition
    //console.log("handleNextC called with index:", index);
    // if (sliderRefs.current[index]) {
    //   console.log("Calling slickNext for slider:", sliderRefs.current[index]);
    //   sliderRefs.current[index].slickNext();
    // } else {
    //   //  console.error("Slider reference not found for index:", index);
    // }
  };

  const handlePrevC = () => {
    sliderRefC.current.slickPrev(); // Trigger previous slide transition
    // console.log("handlePrevC called with index:", index);
    // if (sliderRefs.current[index]) {
    //   // console.log("Calling slickPrev for slider:", sliderRefs.current[index]);
    //   sliderRefs.current[index].slickPrev();
    // } else {
    //   // console.error("Slider reference not found for index:", index);
    // }
  };

  const certs = [
    <Box sx={{ mt: "7%", ml: "0%", mr: 0, color: color6 }}>
      <Grid container spacing={2} sx={{ ml: "0%" }}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert1.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "4%" }}
            onClick={() => handleImageClick("images/cert1.png")}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            User Exprience: Research & Prototyping
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          <img
            src="images/cert4.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "6%" }}
            onClick={() => handleImageClick("images/cert4.png")}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Data Warehouse Concepts, Design and Data Integration
          </Typography>{" "}
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert3.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
            onClick={() => handleImageClick("images/cert3.png")}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Software Architecture
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert2.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
            onClick={() => handleImageClick("images/cert2.png")}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Essentials of Entrepreneurship: Thinking & Action
          </Typography>
        </Grid>
      </Grid>
    </Box>,
    <Box sx={{ mt: "7%", ml: 1, mr: 3, color: color6 }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert5.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Service-Oriented Architecture
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          <img
            src="images/cert7.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            AR 7 Video Streaming Services Emerging Technologies
          </Typography>{" "}
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert6.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Data Warehouse Fundamentals
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert8.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: font2,
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Enterprise Systems
          </Typography>
        </Grid>
      </Grid>
    </Box>,
    <Box sx={{ mt: "7%", ml: 1, mr: 3, color: color6 }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert9.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Human-Centered Design: an Introduction
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert10.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Information Security: Context and Introduction
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert11.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Introduction to Data Science in Python
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert12.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Deep Learning for Business
          </Typography>
        </Grid>
      </Grid>
    </Box>,
    <Box sx={{ mt: "7%", ml: 1, mr: 3, color: color6 }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert13.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Object Oriented Design
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert14.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Introduction to Artificial Intelligence (AI)
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert15.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Machine Learning for All
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert16.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Database Management Essentials
          </Typography>
        </Grid>
      </Grid>
    </Box>,
    <Box sx={{ mt: "7%", ml: 1, mr: 3, color: color6 }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert17.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Crash Course on Python
          </Typography>
        </Grid>
        <Grid xs={6} sm={6}>
          {" "}
          <img
            src="images/cert18.png"
            height="90%"
            width="80%"
            style={{ marginLeft: "10%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5em",
                sm: "0.5em",
                md: "1em",
                lg: "1em",
              },
            }}
          >
            Programming for Everybody (Getting Started with Python)
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid sm={6}></Grid>
        <Grid sm={6}></Grid>
      </Grid>
    </Box>,
  ];
  //?
  return (
    <div
      className="content"
      id="about2"
      style={{
        // display: "flex",
        // flexDirection: "column",
        width: "100vw",
        // height: "100vh",
        backgroundColor: backgroundColor, // Replace with the color you need
        paddingBottom: "0%",
        display: "flex", // Flex to center content (optional)
        justifyContent: "center",
        // alignItems: "center",
        // overflow: "hidden", // Prevent overflow, useful for full-screen layouts
        // display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        color: color6,
      }}
    >
      {/* <animated.div style={props}>hellooo</animated.div> */}
      <br />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Selected Image"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            top: "10%",
            left: "20%",
            // right: "auto",
            // bottom: "auto",
            // marginRight: "50%",
            // transform: "translate(-50%,   -50%)",
          },
        }}
      >
        <img src={selectedImage} alt="Selected Image" />
      </Modal>

      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
          >
            <Box
              sx={{
                background: color2,
                borderRadius: 5,

                ml: { xs: "9%", sm: "9%" },

                mt: { xs: 3, sm: 0 },

                mr: { xs: "8%", sm: 0 },
                pb: "10%",
              }}
            >
              <Grid container spacing={2} sx={{ pt: 1 }}>
                <Grid xs={8}></Grid>
                <Grid xs={4}>
                  <img
                    src={barImage}
                    height="90%"
                    width="50%"
                    style={{ marginLeft: "40%" }}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  background: color3,
                  borderRadius: 5,
                  ml: "3%",
                  mr: "3%",
                  mt: "4%",
                }}
              >
                <Grid container spacing={2} sx={{ pt: 0.5 }}>
                  <Grid
                    xs={9}
                    sx={{
                      ml: "5%",
                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{ color: color6, ml: 1, fontFamily: font2 }}
                    >
                      education.site
                    </Typography>
                  </Grid>
                  <Grid xs={2}>
                    <img
                      src={searchImage}
                      height="90%"
                      width="30%"
                      style={{ marginLeft: "65%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={0} sx={{ mt: 1 }}>
                <Grid
                  xs={2}
                  sx={{
                    marginLeft: "0%",
                    display: "flex",
                    justifyContent: "flex-end", // Aligns content horizontally to the start
                    alignItems: "flex-end",
                  }}
                >
                  {" "}
                  <img
                    src="images/timeline.png"
                    height="100%"
                    width="35%"
                    style={{
                      marginLeft: "0%",

                      display: "flex",
                      justifyContent: "flex-end", // Aligns content horizontally to the start
                      alignItems: "flex-end",
                    }}
                  />
                </Grid>
                <Grid
                  xs={10}
                  // sx={{
                  //   display: "flex",
                  //   justifyContent: "flex-start", // Aligns content horizontally to the start
                  //   alignItems: "flex-start",
                  // }}
                >
                  <Typography
                    sx={{
                      ml: 1,
                      textAlign: "left",
                      fontFamily: font2,
                      fontWeight: "bold",
                      mt: 1,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "1em",
                        lg: "1em",
                      },
                    }}
                  >
                    August 2019 - January 2025 <br />
                  </Typography>
                  <br />

                  <Grid container spacing={2}>
                    <Grid xs={3}>
                      <Box sx={{ width: "100%", maxWidth: "70%", ml: "20%" }}>
                        <img
                          src="images/mapuaLogo.png"
                          width="80%"
                          height="80%"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      xs={9}
                      // sx={{
                      //   display: "flex",
                      //   justifyContent: "flex-start", // Aligns content horizontally to the start
                      //   alignItems: "flex-start",
                      // }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textAlign: "left",
                          fontFamily: font2,
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "0.9em",
                            lg: "0.9em",
                          },
                        }}
                      >
                        {" "}
                        Mapua University - Makati
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.4em",
                            md: "0.8em",
                            lg: "0.8em",
                          },
                          textAlign: "left",
                          fontFamily: font2,
                        }}
                      >
                        Bachelor of Science in Information Technology <br />
                        Specialized in Application Development
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid
                  xs={2}
                  sx={{
                    marginLeft: "0%",
                    display: "flex",
                    justifyContent: "flex-end", // Aligns content horizontally to the start
                    alignItems: "flex-end",
                  }}
                >
                  {" "}
                  <img
                    src="images/timeline.png"
                    height="100%"
                    width="30%"
                    style={{
                      marginLeft: "0%",

                      display: "flex",
                      justifyContent: "flex-end", // Aligns content horizontally to the start
                      alignItems: "flex-end",
                    }}
                  />
                </Grid>
                <Grid
                  xs={10}
                  // sx={{
                  //   display: "flex",
                  //   justifyContent: "flex-start", // Aligns content horizontally to the start
                  //   alignItems: "flex-start",
                  // }}
                >
                  <Typography
                    sx={{
                      ml: 1,
                      textAlign: "left",
                      fontFamily: font2,
                      fontWeight: "bold",
                      mt: 0.5,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "1em",
                        lg: "1em",
                      },
                    }}
                  >
                    2017 - 2019 <br />
                  </Typography>
                  <br />

                  <Grid container spacing={2}>
                    <Grid xs={3}>
                      <Box sx={{ width: "100%", maxWidth: "70%", ml: "25%" }}>
                        <img src="images/sti.png" width="80%" height="80%" />
                      </Box>
                    </Grid>
                    <Grid
                      xs={9}
                      // sx={{
                      //   display: "flex",
                      //   justifyContent: "flex-start", // Aligns content horizontally to the start
                      //   alignItems: "flex-start",
                      // }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textAlign: "left",
                          fontFamily: font2,
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "0.9em",
                            lg: "0.9em",
                          },
                        }}
                      >
                        {" "}
                        STI College Santa Rosa
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.4em",
                            md: "0.8em",
                            lg: "0.8em",
                          },
                          textAlign: "left",
                          fontFamily: font2,
                        }}
                      >
                        Technical Vocational Track
                        <br />
                        Information Communications Technology <br />
                        (Mobile Application and Web Development)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                background: color2,
                borderRadius: 5,
                ml: { xs: "9%", sm: "9%" },
                mb: { xs: 3.5, sm: 0 },
                mr: { xs: "8%", sm: 0 },
                pb: "10%",

                mt: { xs: "6%", sm: "5%" },
              }}
            >
              <Grid container spacing={2} sx={{ pt: 1 }}>
                <Grid xs={8}></Grid>
                <Grid xs={4}>
                  <img
                    src={barImage}
                    height="90%"
                    width="50%"
                    style={{ marginLeft: "40%" }}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  background: color3,
                  borderRadius: 5,
                  ml: "3%",
                  mr: "3%",
                  mt: "4%",
                }}
              >
                <Grid container spacing={2} sx={{ pt: 0.5 }}>
                  <Grid
                    xs={9}
                    sx={{
                      ml: "5%",
                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{ color: color6, ml: 1, fontFamily: font2 }}
                    >
                      experiences.site
                    </Typography>
                  </Grid>
                  <Grid xs={2}>
                    <img
                      src={searchImage}
                      height="90%"
                      width="30%"
                      style={{ marginLeft: "65%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={-1}>
                <Grid
                  xs={2}
                  sx={{
                    marginLeft: "0%",
                    display: "flex",
                    justifyContent: "flex-end", // Aligns content horizontally to the start
                    alignItems: "flex-end",
                  }}
                >
                  {" "}
                  <img
                    src="images/timeline.png"
                    height="100%"
                    width="30%"
                    style={{
                      marginLeft: "0%",

                      display: "flex",
                      justifyContent: "flex-end", // Aligns content horizontally to the start
                      alignItems: "flex-end",
                    }}
                  />
                </Grid>
                <Grid
                  xs={10}
                  // sx={{
                  //   display: "flex",
                  //   justifyContent: "flex-start", // Aligns content horizontally to the start
                  //   alignItems: "flex-start",
                  // }}
                >
                  <Typography
                    sx={{
                      ml: 1,
                      textAlign: "left",
                      fontFamily: font2,
                      fontWeight: "bold",
                      mt: 0.5,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "1em",
                        lg: "1em",
                      },
                    }}
                  >
                    {" "}
                    March 2023 - June 2023
                  </Typography>
                  <br />
                  <Grid container spacing={2}>
                    <Grid xs={3}>
                      <Box sx={{ width: "100%", maxWidth: "70%", ml: "25%" }}>
                        <img
                          src="images/mapuaLogo.png"
                          width="80%"
                          height="80%"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      xs={9}
                      // sx={{
                      //   display: "flex",
                      //   justifyContent: "flex-start", // Aligns content horizontally to the start
                      //   alignItems: "flex-start",
                      // }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textAlign: "left",
                          fontFamily: font2,
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "0.9em",
                            lg: "0.9em",
                          },
                        }}
                      >
                        {" "}
                        Questronix Corporation
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.4em",
                            md: "0.8em",
                            lg: "0.8em",
                          },
                          textAlign: "left",
                          fontFamily: font2,
                        }}
                      >
                        Emerging Technologies Intern
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>
        <Grid xs={12} sm={8}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={rightVariants}
          >
            <Box
              sx={{
                background: color2,
                borderRadius: 5,
                ml: { xs: "9%", sm: 5 },

                mr: { xs: "7.5%", sm: 4 },
                pb: "5%",
              }}
            >
              <Grid container spacing={2} sx={{ pt: 1 }}>
                <Grid xs={8}></Grid>
                <Grid xs={4}>
                  <img
                    src={barImage}
                    height="80%"
                    width="25%"
                    style={{ marginLeft: "50%" }}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  background: color3,
                  borderRadius: 5,
                  ml: "3%",
                  mr: "3%",
                  mt: "3%",
                }}
              >
                <Grid container spacing={2} sx={{ pt: 0.5 }}>
                  <Grid
                    xs={9}
                    sx={{
                      ml: "5%",
                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{ color: color6, ml: 1, mt: 0.2, fontFamily: font2 }}
                    >
                      certifications.site
                    </Typography>
                  </Grid>
                  <Grid xs={2}>
                    <img
                      src={searchImage}
                      height="90%"
                      width="20%"
                      style={{ marginLeft: "65%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={0}
                  sm={0}
                  md={1}
                  lg={1}
                  sx={{
                    display: {
                      xs: "none", // Hide on extra small screens
                      sm: "none",
                      md: "block", // Display on small screens and up
                    },
                  }}
                >
                  {/* <Button
                  onClick={() => handlePrevC}
                  sx={{ mt: "235%", background: "#ffffff" }}
                >
                  <img
                    src="/images/left arrow.png"
                    width="30px"
                    height="30px"
                  />
                </Button> */}
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                  <Slider
                    {...settings}
                    ref={sliderRefC}
                    sx={{
                      color: "#000000",
                      border: 1,
                      borderColor: "#000000",
                      ml: { xs: "15%", sm: "10%" },
                      mr: "30px",
                    }}
                  >
                    {certs.map((item, index) => (
                      <Box key={index} onClick={() => handleSlideClick(item)}>
                        {item}
                      </Box>
                    ))}
                  </Slider>
                  <br />
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      mb: "0%",
                      display: {
                        xs: "block", // Hide on extra small screens
                        sm: "none",
                      },
                    }}
                  >
                    Swipe to See More
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={0}
                  sm={0}
                  md={1}
                  lg={1}
                  sx={{
                    display: {
                      xs: "none", // Hide on extra small screens
                      sm: "none",
                      md: "block", // Display on small screens and up
                    },
                  }}
                >
                  {" "}
                  {/* Button container (adjust width as needed) */}
                  {/* <Button
                  onClick={() => handleNextC}
                  sx={{ mt: "235%", background: "#ffffff" }}
                >
                  <img
                    src="/images/right arrow.png"
                    width="30px"
                    height="30px"
                  />
                </Button> */}
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe2;
