import { useState, useEffect, useContext, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ColorContext from "./ColorContext"; // Import the context
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";

function Project5() {
  //? animation
  const [isShown, setIsShown] = useState(false);
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
      x: "100vw", // Move fully off-screen based on viewport width
      transition: {
        duration: 3.5, // Duration for hiding animation
        ease: [0.2, 0.8, 0.2, 1], // Smooth cubic-bezier curve
      },
    },
    visible: {
      opacity: 1,
      x: "0%", // Bring back into view
      transition: {
        duration: 1.5, // Adjust speed of animation
        ease: [0.2, 0.8, 0.2, 1], // Smooth cubic-bezier curve
        delay: 0, // No delay
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw", // Fully off-screen to the right
      transition: {
        duration: 4.5, // Duration for the hidden state
        ease: [0.2, 0.8, 0.2, 1], // Smooth cubic-bezier curve
      },
    },
    visible: {
      opacity: 1,
      x: "0%", // Bring it back to its final position
      transition: {
        duration: 3.5, // Slower animation
        ease: [0.2, 0.8, 0.2, 1],
        delay: 0, // Optional delay before starting
      },
    },
  };

  const cardVariants = {
    hidden: {
      scale: 0,
      opacity: 1,
      // y: "100%",
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 40,
        damping: 15,
        delay: 0.05, // Adjust the delay to control the appearance time
      },
    },
  };

  //?
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

  //?
  return (
    <div
      id="project"
      className="content"
      style={{
        width: "100vw",
        // height: "100vh",
        paddingTop: "2.5%",
        backgroundColor: backgroundColor, // Replace with the color you need
        paddingBottom: "0%",
        // display: "flex", // Flex to center content (optional)
        // justifyContent: "center",
        // alignItems: "center",
        // overflow: "hidden", // Prevent overflow, useful for full-screen layouts
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <button onClick={() => setIsShown(!isShown)}>Toggle</button>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isShown ? "visible" : "hidden"}
      >
        <Box sx={{ color: "#000000" }}>helloooo</Box>
      </motion.div> */}

      {/* <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Box sx={{ color: "#000000" }}>helloooo</Box>
      </motion.div> */}
      <Box
        sx={{
          // width: "100vw",
          // height: "100vh",
          backgroundColor: backgroundColor,
          // display: "flex",
          // flexDirection: "column",
          // mt: "10%",
        }}
      >
        <motion.div
          ref={ref}
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Typography
            sx={{
              color: color6,
              textAlign: "left",
              fontSize: {
                xs: "1.5em",
                sm: "3em",
                md: "3.5em",
                lg: "4em",
                xl: "4em",
              },
              ml: "5%",
              fontFamily: font2,
            }}
          >
            Hospital Management System
          </Typography>
          <Box
            sx={{
              display: {
                xs: "block", // Hide on extra small screens
                sm: "none",
              },
              background: color2,
              mt: 2.5,
              ml: "4%",
              mr: "6%",
              borderRadius: 4,
              pb: "2%",
            }}
          >
            <Grid container spacing={4} sx={{}}>
              <Grid xs={12} sm={4}>
                <img
                  src="images/hospital.png"
                  height="80%"
                  width="45%"
                  style={{ marginLeft: "5%", marginTop: "2%" }}
                />
              </Grid>
              <Grid
                xs={12}
                sm={8}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start", // Aligns content horizontally to the start
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    ml: "10%",
                    mt: { xs: "-5%", sm: "4%", md: "5%", lg: "5%", xl: "8%" },
                  }}
                >
                  <Typography
                    sx={{
                      color: color6,
                      textAlign: "left",
                      fontFamily: font2,
                      fontSize: {
                        xs: "0.4em",
                        sm: "1em",
                        md: "0.8em",
                        lg: "0.8em",
                      },
                      mr: "6%",
                      ml: "6%",
                    }}
                  >
                    A group finals projects that I was a part of for my Object
                    Oriented Programming subject. We are tasked to create a
                    Hospital Management System using the concept of Object
                    Oriented Programming and different design patterns to
                    optimize the codes of the application.I was assigned in the
                    gui and functionality development of the Java desktop
                    application.
                  </Typography>
                  <center>
                    <Box
                      sx={{
                        display: "flex", // Enables flexbox
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        // Optional: full viewport height
                      }}
                    >
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          mt: 0.5,
                        }}
                      >
                        <Grid
                          xs={3.5}
                          // sx={{ alignItems: "right" }}
                          // offset={6}
                        >
                          <Button
                            sx={{
                              // pr: {
                              //   md: "25%",
                              //   lg: "15%",
                              // },
                              // pl: {
                              //   md: "20%",
                              //   lg: "7%",
                              // },
                              ml: "45%",
                              mr: "15%",
                              width: "95%",
                              height: "50%",
                              background: color3,
                              color: color6,
                              borderRadius: 4,
                            }}
                          >
                            <a
                              style={{ color: color6 }}
                              href="https://youtu.be/nPkctjN0GQ4"
                              target="_blank"
                            >
                              <Grid container spacing={2} sx={{ mt: "0%" }}>
                                <Grid xs={5}>
                                  {" "}
                                  &nbsp; &nbsp;
                                  <img
                                    width="35%"
                                    height="38%"
                                    src={linkImage}
                                  />
                                </Grid>
                                <Grid xs={6} sx={{ mt: "7%" }}>
                                  <Typography
                                    sx={{
                                      fontSize: {
                                        xs: "0.5em",
                                        sm: "1em",
                                        md: "1.1em",
                                        lg: "1em",
                                        xl: "1.3em",
                                      },
                                      mt: "5%",
                                    }}
                                  >
                                    video(demo)
                                  </Typography>
                                </Grid>
                              </Grid>

                              {"      "}
                            </a>{" "}
                          </Button>
                        </Grid>
                        <Grid xs={1}>
                          <Button
                            sx={{
                              // pr: {
                              //   sm: "0%",
                              //   md: "25%",
                              //   lg: "20%",
                              // },
                              // pl: {
                              //   sm: "0%",
                              //   md: "15%",
                              //   lg: "7%",
                              // },
                              ml: "170%",
                              mr: {
                                sm: "0%",
                                md: "35%",
                                lg: "38%",
                              },
                              height: "50%",
                              background: color3,
                              color: color6,
                              borderRadius: 4,
                            }}
                          >
                            <a
                              style={{ color: color6 }}
                              href="https://github.com/breyxmarie/Hospital-Management-System"
                              target="_blank"
                            >
                              <Grid container spacing={2} sx={{ mt: "0%" }}>
                                <Grid xs={6} sx={{ marginTop: "3%" }}>
                                  {" "}
                                  &nbsp; &nbsp;
                                  <img
                                    width="35%"
                                    height="50%"
                                    src={githubImage}
                                  />
                                </Grid>
                                <Grid xs={6} sx={{ mt: "1%" }}>
                                  <Typography
                                    sx={{
                                      fontSize: {
                                        xs: "0.5em",
                                        sm: "0.8em",
                                        md: "1.1em",
                                        lg: "1em",
                                        xl: "1.3em",
                                      },
                                      mt: "20%",
                                    }}
                                  >
                                    github
                                  </Typography>
                                </Grid>
                              </Grid>

                              {"      "}
                            </a>{" "}
                          </Button>
                        </Grid>
                        <Grid xs={4}></Grid>
                      </Grid>
                    </Box>
                  </center>

                  {/* <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: font2,
                      fontSize: {
                        xs: "0.5em",
                        sm: "1em",
                        md: "1em",
                        lg: "1em",
                      },
                      color: color6,
                    }}
                  >
                    {" "}
                    Link:{" "}
                    <a
                      href="https://nutrify-me-eight.vercel.app"
                      target="_blank"
                    >
                      https://nutrify-me-eight.vercel.app
                    </a>
                  </Typography> */}
                  {/* <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: font2,
                      fontSize: {
                        xs: "0.5em",
                        sm: "1em",
                        md: "1em",
                        lg: "1em",
                        xl: "1.3em",
                      },
                      color: color6,
                    }}
                  >
                    Github Repository:{" "}
                    <a
                      href="https://github.com/breyxmarie/Nutrify-Me"
                      target="_blank"
                    >
                      https://github.com/breyxmarie/Nutrify-Me
                    </a>
                  </Typography> */}
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none", // Hide on extra small screens
                sm: "block",
              },
              background: color2,
              mt: 0,
              ml: "4%",
              mr: "6%",
              borderRadius: 4,
              pb: "2%",
            }}
          >
            <Grid container spacing={4} sx={{}}>
              <Grid
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start", // Aligns content horizontally to the start
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    ml: {
                      xs: "0%",
                      sm: "20%",
                      md: "18%",
                      lg: "20%",
                      xl: "10%",
                    },
                    mt: { xs: "0%", sm: "10%", md: "5%", lg: "8%", xl: "10%" },
                  }}
                >
                  <Typography
                    sx={{
                      color: color6,
                      textAlign: "left",
                      fontFamily: font2,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.7em",
                        md: "0.9em",
                        lg: "1em",
                      },
                      mr: "5%",
                      mt: "2.5%",
                    }}
                  >
                    A group finals projects that I was a part of for my Object
                    Oriented Programming subject. We are tasked to create a
                    Hospital Management System using the concept of Object
                    Oriented Programming and different design patterns to
                    optimize the codes of the application. I was assigned in the
                    gui and functionality development of the Java desktop
                    application.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: font2,
                      fontSize: {
                        xs: "0.5em",
                        sm: "1em",
                        md: "1em",
                        lg: "1em",
                      },
                      color: color6,
                    }}
                  >
                    {/* {" "}
                  Link:{" "}
                  <a href="https://nutrify-me-eight.vercel.app" target="_blank">
                    https://nutrify-me-eight.vercel.app
                  </a>
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    fontFamily: font2,
                    fontSize: {
                      xs: "0.5em",
                      sm: "1em",
                      md: "1em",
                      lg: "1em",
                      xl: "1.3em",
                    },
                    color: color6, 
                  }}
                >
                  Github Repository:{" "}
                  <a
                    href="https://github.com/breyxmarie/Nutrify-Me"
                    target="_blank"
                  >
                    https://github.com/breyxmarie/Nutrify-Me
                  </a> */}

                    <Grid container spacing={2} sx={{ mt: "5%" }}>
                      <Grid xs={5.5} sx={{ alignItems: "right" }} offset={6}>
                        <Button
                          sx={{
                            pr: {
                              md: "15%",
                              lg: "0%",
                            },
                            pl: {
                              md: "7%",
                              lg: "7%",
                            },
                            ml: {
                              md: "20%",
                              lg: "25%",
                            },
                            mr: {
                              md: "5%",
                              lg: "25%",
                            },
                            height: "70%",
                            width: "65%",

                            background: color3,
                            color: color6,
                            borderRadius: 4,
                            "&:hover": {
                              backgroundColor: color4,
                              color: backgroundColor,
                              border: 2,

                              borderColor: color3,
                            },
                          }}
                        >
                          <a
                            style={{ color: color6 }}
                            href="https://youtu.be/nPkctjN0GQ4"
                            target="_blank"
                          >
                            <Grid container spacing={2} sx={{ mt: "8%" }}>
                              <Grid xs={4}>
                                {" "}
                                &nbsp;
                                <img width="40%" height="58%" src={linkImage} />
                              </Grid>
                              <Grid xs={6} sx={{ mt: "0%" }}>
                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "0.5em",
                                      sm: "0.8em",
                                      md: "0.9em",
                                      lg: "1em",
                                      xl: "1.3em",
                                    },
                                  }}
                                >
                                  {" "}
                                  video(demo)
                                </Typography>
                              </Grid>
                            </Grid>

                            {"      "}
                          </a>{" "}
                        </Button>
                      </Grid>
                      <Grid xs={4}>
                        <Button
                          sx={{
                            pr: {
                              sm: "5%",
                              md: "18%",
                              lg: "20%",
                            },
                            pl: {
                              sm: "5%",
                              md: "6%",
                              lg: "7%",
                            },
                            ml: {
                              sm: "5%",
                              md: "0%",
                              lg: "0%",
                            },
                            mr: {
                              sm: "5%",
                              md: "35%",
                              lg: "38%",
                            },
                            height: "70%",

                            background: color3,
                            color: color6,
                            borderRadius: 4,
                            "&:hover": {
                              backgroundColor: backgroundColor,
                              color: backgroundColor,
                              border: 2,

                              borderColor: color3,
                            },
                          }}
                        >
                          <a
                            style={{ color: color6 }}
                            href="https://github.com/breyxmarie/Hospital-Management-System"
                            target="_blank"
                          >
                            <Grid container spacing={2} sx={{ mt: "10%" }}>
                              <Grid xs={6}>
                                {" "}
                                &nbsp; &nbsp;
                                <img
                                  width="60%"
                                  height="70%"
                                  src={githubImage}
                                />
                              </Grid>
                              <Grid xs={6} sx={{ mt: "2%" }}>
                                <Typography
                                  sx={{
                                    ml: "10%",
                                    fontSize: {
                                      xs: "0.5em",
                                      sm: "0.8em",
                                      md: "0.9em",
                                      lg: "1em",
                                      xl: "1.3em",
                                    },
                                  }}
                                >
                                  github
                                </Typography>
                              </Grid>
                            </Grid>

                            {"      "}
                          </a>{" "}
                        </Button>
                      </Grid>
                      <Grid xs={4}></Grid>
                    </Grid>
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={6}>
                <img
                  src="images/hospital.png"
                  height="120%"
                  width="80%"
                  style={{
                    marginLeft: "10%",
                    marginTop: "-8%",
                    marginBottom: "-5%",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rightVariants}
        >
          <Grid
            container
            spacing={0}
            sx={{ ml: "0%", mt: { xs: "-3%", sm: "-3%" } }}
          >
            <Grid xs={4} sm={4}>
              <Typography
                sx={{
                  color: color6,
                  fontSize: {
                    xs: "0.8em",
                    sm: "2em",
                    md: "3em",
                    lg: "3.5em",
                  },
                  fontFamily: font2,
                }}
              >
                Tech Stack
              </Typography>

              <Box
                sx={{
                  background: color1,
                  borderRadius: 3,
                  pt: "5%",
                  ml: "13%",
                  pl: 0,
                  display: "flex",
                  justifyContent: "flex-start", // Aligns content horizontally to the start
                  alignItems: "flex-start",
                  pb: "16%",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.5,
                    //  borderRadius: "10px",
                    //   boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src="images/java.png"
                    width="30%"
                    height="2%"
                    style={{ marginLeft: "-35%", marginTop: "-2%" }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.5,
                    //  borderRadius: "10px",
                    //   boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src="images/sql.png"
                    width="35%"
                    height="50%"
                    style={{ marginLeft: "-130%", marginTop: "1%" }}
                  />
                </motion.div>
              </Box>
            </Grid>
            <Grid xs={4.5} sm={4.5}>
              {" "}
              <Typography
                sx={{
                  color: color6,
                  fontSize: {
                    xs: "0.8em",
                    sm: "2em",
                    md: "3em",
                    lg: "3.5em",
                  },
                  fontFamily: font2,
                }}
              >
                Skills Acquired
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ ml: "5%", mt: { xs: 0.5, sm: 2 } }}
              >
                <Grid xs={6} sm={6}>
                  {" "}
                  <Box
                    sx={{
                      color: color6,
                      background: color3,
                      borderRadius: 5,
                      py: "2.5%",
                      fontSize: {
                        xs: "0.4em",
                        sm: "0.6em",
                        md: "0.9em",
                        lg: "1em",
                      },
                      ml: "0%",
                      mr: "0%",
                      fontFamily: font2,
                    }}
                  >
                    MOBILE APPLICATION DEVELOPMENT
                  </Box>
                </Grid>
                <Grid xs={6} sm={6}>
                  {" "}
                  <Box
                    sx={{
                      color: color6,
                      background: color3,
                      borderRadius: 5,
                      py: "2.5%",
                      fontSize: {
                        xs: "0.4em",
                        sm: "0.6em",
                        md: "0.9em",
                        lg: "1em",
                      },
                      ml: "5%",
                      fontFamily: font2,
                    }}
                  >
                    DATABASE MANAGEMENT
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{ ml: "5%", mt: { xs: 0.5, sm: 2 } }}
              >
                <Grid xs={6} sm={6}>
                  {" "}
                  <Box
                    sx={{
                      color: color6,
                      background: color3,
                      borderRadius: 5,
                      py: "2.5%",
                      fontSize: {
                        xs: "0.4em",
                        sm: "0.6em",
                        md: "0.9em",
                        lg: "1em",
                      },
                      ml: "0%",
                      mr: "0%",
                      fontFamily: font2,
                    }}
                  >
                    BACK-END DEVELOPMENT
                  </Box>
                </Grid>
                <Grid xs={6} sm={6}>
                  {" "}
                  <Box
                    sx={{
                      color: color6,
                      background: color3,
                      borderRadius: 5,
                      py: "2.5%",
                      fontSize: {
                        xs: "0.4em",
                        sm: "0.6em",
                        md: "0.9em",
                        lg: "1em",
                      },
                      ml: "5%",
                      fontFamily: font2,
                    }}
                  >
                    REST API
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={3.5} sm={3.5}>
              {" "}
              <Typography
                sx={{
                  color: color6,
                  fontSize: {
                    xs: "0.8em",
                    sm: "2em",
                    md: "3em",
                    lg: "3.5em",
                  },
                  fontFamily: font2,
                }}
              >
                Tools
                <br />
                <img src="images/netbeans.png" width="15%" height="50%" />{" "}
                <img
                  src="images/mysql.png"
                  width="15%"
                  height="50%"
                  style={{ marginRight: "3%" }}
                />
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </div>
  );
}

export default Project5;
