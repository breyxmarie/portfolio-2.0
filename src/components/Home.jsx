import { useState, useEffect, useContext, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ColorContext from "./ColorContext"; // Import the context
import { motion, useInView } from "framer-motion";
import Grow from "@mui/material/Grow";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const {
    backgroundColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    scrollImage,
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
      y: "50%", // Start off-screen
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
      //  x: -100, // Start off-screen
      x: "20vw", // Move fully off-screen based on viewport width

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
      // x: 300, // Start off-screen
      x: "-30vw", // Move fully off-screen based on viewport width

      transition: {
        duration: 4.5,
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
      },
    },
    visible: {
      opacity: 1.3,
      x: 0, // End position
      transition: {
        duration: 1, // Slower animation
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
        delay: 0, // Delay before animation starts
      },
    },
  };

  //? navigation
  const navigateLink = (links) => {
    switch (links) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        console.log("hello");
        window.open("https://linkedin.com/in/aubreyquiatchon", "_blank");
        break;
      case 4:
        window.open("https://github.com/breyxmarie", "_blank");
        break;
      case 5:
        window.open("https://tinyurl.com/ysr6v67p", "_blank");
        break;
    }
  };

  //?

  return (
    <div
      className="content"
      style={{
        color: "#000000",
        width: "100vw",
        // height: "100vh",
        backgroundColor: backgroundColor, // Replace with the color you need
        display: "flex", // Flex to center content (optional)
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Prevent overflow, useful for full-screen layouts
        paddingBottom: "0%",
        paddingTop: "0px",
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
      }}
    >
      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={topVariants}
      >
        <Typography> Hello, World!</Typography>
      </motion.div>
      hiiii */}
      <Box
        sx={{
          width: "100vw",
          //  height: "100vh",
          pb: "4%",
          display: {
            xs: "none", // Hide on extra small screens
            sm: "block",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid sm={3}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={rightVariants}
            >
              <img
                style={{ borderRadius: 10, marginTop: "100%" }}
                src="images/flowerhome.png"
                width="35%"
                height="45%"
              />
            </motion.div>
          </Grid>
          <Grid sm={5.5} sx={{ mt: "5%" }}>
            <Box sx={{ borderRadius: 5, color: "#000000" }}>
              <Grid container spacing={2}>
                <Grid sm={4.5}>
                  {/* <Typography
                    sx={{
                      fontFamily: font1,
                      display: "flex",
                      justifyContent: "flex-end", // Aligns content horizontally to the start
                      alignItems: "flex-end",
                      mt: "25%",
                      fontSize: {
                        xs: "7em",
                        sm: "5em",
                        md: "5em",
                        lg: "7em",
                      },
                      color: color6,
                      lineHeight: 1,
                    }}
                  >
                    hello
                  </Typography> */}
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={topVariants}
                  >
                    <Typography
                      sx={{
                        fontFamily: font1,
                        display: "flex",
                        justifyContent: "flex-end", // Aligns content horizontally to the start
                        alignItems: "flex-end",
                        mt: { sm: "25%", md: "5%" },
                        fontSize: {
                          xs: "7em",
                          sm: "4em",
                          md: "5em",
                          lg: "6em",
                        },
                        color: color6,
                        lineHeight: 1,
                      }}
                    >
                      hello
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: font1,
                        display: "flex",
                        justifyContent: "flex-end", // Aligns content horizontally to the start
                        alignItems: "flex-end",
                        fontSize: {
                          xs: "7em",
                          sm: "4em",
                          md: "5em",
                          lg: "6em",
                        },
                        lineHeight: 1,
                        color: color6,
                      }}
                    >
                      i'm
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid sm={7.5}>
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={topVariants}
                  >
                    <Typography
                      sx={{
                        fontFamily: font1,
                        display: "flex",
                        justifyContent: "flex-start", // Aligns content horizontally to the start
                        alignItems: "flex-start",
                        mt: {
                          xs: "0%",
                          sm: "38%",
                          md: "17%",
                        },

                        ml: "9%",
                        fontSize: {
                          xs: "7em",
                          sm: "5em",
                          md: "7em",
                          lg: "8.5em",
                        },
                        lineHeight: 1,
                        color: color6,
                      }}
                    >
                      aubrey
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={bottomVariants}
              >
                <img
                  style={{ borderRadius: 10, marginTop: "0%", lineHeight: 1 }}
                  src="images/homeImage.jpg"
                  width="60%"
                  height="40%"
                />

                <Typography
                  sx={{
                    fontFamily: font1,
                    display: "flex",
                    justifyContent: "flex-start", // Aligns content horizontally to the start
                    alignItems: "flex-start",
                    ml: "20%",
                    fontSize: "1.5em",
                    color: color6,
                  }}
                >
                  {" "}
                  a software developer
                </Typography>
                <br />

                <img
                  src={scrollImage}
                  height="50%"
                  width="18%"
                  style={{ marginLeft: "5%", marginTop: "0%" }}
                />
              </motion.div>
            </Box>
          </Grid>
          <Grid sm={3.5}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={leftVariants}
            >
              <Grid
                container
                spacing={2}
                sx={{ mt: { xs: "0%", sm: "100%", xl: "110%" } }}
              >
                <Grid sm={6}>
                  <Typography
                    sx={{
                      ml: "20%",
                      fontFamily: font1,
                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                      fontSize: "1.5em",
                      mb: 1,
                      color: color6,
                    }}
                  >
                    quick links
                  </Typography>
                  <a href={"#about"}>
                    <Button
                      to={"#about"}
                      sx={{
                        textTransform: "none",
                        background: color1,
                        color: "#ffffff",
                        fontFamily: font1,
                        fontSize: {
                          xs: "1em",
                          sm: "0.8em",
                          md: "1em",
                          lg: "1.2em",
                        },

                        pl: 1,
                        pr: 5.5,
                        "&:hover": {
                          backgroundColor: backgroundColor,
                          color: color1,
                          border: 1,

                          borderColor: color1,
                        },
                      }}
                    >
                      {" "}
                      about me &nbsp; &nbsp; {">"}
                    </Button>
                  </a>
                  <br />
                  <br />
                  <a href={"#project"}>
                    <Button
                      sx={{
                        textTransform: "none",
                        background: color1,
                        color: "#ffffff",
                        fontFamily: font1,
                        fontSize: {
                          xs: "1em",
                          sm: "0.8em",
                          md: "1em",
                          lg: "1.2em",
                        },
                        pl: 1,
                        pr: 6.5,

                        "&:hover": {
                          backgroundColor: backgroundColor,
                          color: color1,
                          border: 1,

                          borderColor: color1,
                        },
                      }}
                    >
                      {" "}
                      projects &nbsp; &nbsp;
                      <Typography sx={{ textAlign: "right" }}>{">"}</Typography>
                    </Button>
                  </a>
                  <br />
                  <br />
                  <a href={"#contact"}>
                    <Button
                      sx={{
                        textTransform: "none",
                        background: color1,
                        color: "#ffffff",
                        fontFamily: font1,
                        fontSize: {
                          xs: "1em",
                          sm: "0.8em",
                          md: "1em",
                          lg: "1.2em",
                        },
                        pl: 1,
                        pr: 4.5,
                        "&:hover": {
                          backgroundColor: backgroundColor,
                          color: color1,
                          border: 1,

                          borderColor: color1,
                        },
                      }}
                    >
                      {" "}
                      contact me &nbsp; &nbsp; {">"}
                    </Button>
                  </a>
                </Grid>
                <Grid sm={6} sx={{ mt: "0%" }}>
                  <Typography
                    sx={{
                      color: backgroundColor,
                      ml: "20%",
                      fontFamily: font1,
                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                      fontSize: "1.5em",
                      mb: 1,
                    }}
                  >
                    quick links
                  </Typography>
                  <Button
                    onClick={() => navigateLink(3)}
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1em",
                        lg: "1.2em",
                      },
                      pl: 1,
                      pr: 4,
                      "&:hover": {
                        backgroundColor: backgroundColor,
                        color: color1,
                        border: 1,

                        borderColor: color1,
                      },
                    }}
                  >
                    {" "}
                    linked in &nbsp; &nbsp; {">"}
                  </Button>
                  <br />
                  <br />

                  <Button
                    onClick={() => navigateLink(4)}
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1em",
                        lg: "1.2em",
                      },
                      pl: 1,
                      pr: 5.5,
                      "&:hover": {
                        backgroundColor: backgroundColor,
                        color: color1,
                        border: 1,

                        borderColor: color1,
                      },
                    }}
                  >
                    {" "}
                    github &nbsp; &nbsp; {">"}
                  </Button>

                  <br />
                  <br />

                  <Button
                    onClick={() => navigateLink(5)}
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1em",
                        lg: "1.2em",
                      },
                      pl: 1,
                      pr: 5.5,
                      "&:hover": {
                        backgroundColor: backgroundColor,
                        color: color1,
                        border: 1,

                        borderColor: color1,
                      },
                    }}
                  >
                    {" "}
                    resume &nbsp; &nbsp; {">"}
                  </Button>
                </Grid>
              </Grid>
              <Box></Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          pb: "9%",
          display: {
            xs: "block", // Hide on extra small screens
            sm: "none",
            // width: "100vw",
            //  height: "100vh",
          },
        }}
      >
        {/* <Typography
          sx={{
            color: color6,
            fontFamily: font1,
            display: "flex",
            justifyContent: "center", // Aligns content horizontally to the start
            alignItems: "center",
            mt: "5%",
            fontSize: {
              xs: "1.7em",
            },

            //lineHeight: 1,
          }}
        >
          hello! i'm aubrey
        </Typography> */}
        {/* <Typography
          sx={{
            fontFamily: font1,
            // display: "flex",
            // justifyContent: "flex-end", // Aligns content horizontally to the start
            // alignItems: "flex-end",
            //mt: { sm: "0%", md: "5%" },
            fontSize: {
              xs: "1em",
              sm: "4em",
              md: "5em",
              lg: "6em",
            },
            color: color6,
            //lineHeight: 1,
          }}
        >
          hello
        </Typography> */}

        <Typography
          sx={{
            fontFamily: "Kiwi Maru",

            //fontFamily: font1,
            // display: "flex",
            // justifyContent: "flex-end", // Aligns content horizontally to the start
            // alignItems: "flex-end",
            //  mt: { sm: "0%", md: "5%" },
            fontSize: {
              xs: "3.5em",
              sm: "4em",
              md: "5em",
              lg: "6em",
            },
            color: color6,
            mr: "50%",
            ml: "5%",
            mt: "8%",
            //lineHeight: 1,
          }}
        >
          HELLO!
        </Typography>
        {/* <Typography
          sx={{
            fontFamily: "Kiwi Maru",
            //fontFamily: font1,
            // display: "flex",
            // justifyContent: "flex-end", // Aligns content horizontally to the start
            // alignItems: "flex-end",
            //  mt: { sm: "0%", md: "5%" },
            fontSize: {
              xs: "5.5em",
              sm: "4em",
              md: "5em",
              lg: "6em",
            },
            color: color6,
            mr: "40%",
            //ml: "110%",
            mt: "-15%",
            //lineHeight: 1,
          }}
        >
          LLO!
        </Typography> */}
        <Typography
          sx={{
            fontFamily: "Kiwi Maru",
            // fontFamily: font1,
            display: "flex",
            justifyContent: "flex-end", // Aligns content horizontally to the start
            alignItems: "flexend",
            // mt: {
            //   xs: "20%",
            //   sm: "38%",
            //   md: "17%",
            // },
            mr: "0%",

            mt: "-5%",
            mb: "6%",
            ml: "0%",
            mr: "5%",

            fontSize: {
              xs: "3em",
              sm: "5em",
              md: "7em",
              lg: "8.5em",
            },
            //  lineHeight: 1,
            color: color6,
          }}
        >
          i'm aubrey
        </Typography>
        <img
          style={{ borderRadius: 10, marginTop: "-5%", lineHeight: 1 }}
          src="images/homeImage.jpg"
          width="105%"
          height="55%"
        />
        <Typography
          sx={{
            fontFamily: font1,
            display: "flex",
            justifyContent: "flex-start", // Aligns content horizontally to the start
            alignItems: "flex-start",
            ml: "5%",
            fontSize: "1em",
            color: color6,
          }}
        >
          {" "}
          a software developer
        </Typography>
        <br />
        <Typography
          sx={{
            ml: "8%",
            fontFamily: font1,
            display: "flex",
            justifyContent: "flex-start", // Aligns content horizontally to the start
            alignItems: "flex-start",
            fontSize: "1em",
            mb: 1,
            color: color6,
          }}
        >
          quick links
        </Typography>
        <Box sx={{ ml: 2, mr: 1.5, mt: 3 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              {" "}
              <Button
                sx={{
                  textTransform: "none",
                  background: color1,
                  color: "#ffffff",
                  fontFamily: font1,
                  fontSize: {
                    xs: "0.5em",
                  },

                  pl: 0,
                  pr: 0,
                  "&:hover": {
                    backgroundColor: backgroundColor,
                    color: color1,
                    border: 1,

                    borderColor: color1,
                  },
                }}
              >
                {" "}
                about me &nbsp; &nbsp; {">"}
              </Button>
              <br />
              <Button
                sx={{
                  textTransform: "none",
                  background: color1,
                  color: "#ffffff",
                  fontFamily: font1,
                  fontSize: {
                    xs: "0.5em",
                  },

                  pl: 0,
                  pr: 0,
                  "&:hover": {
                    backgroundColor: backgroundColor,
                    color: color1,
                    border: 1,

                    borderColor: color1,
                  },
                }}
              >
                {" "}
                linked in &nbsp; &nbsp; {">"}
              </Button>
            </Grid>
            <Grid xs={4}>
              {" "}
              <Button
                sx={{
                  textTransform: "none",
                  background: color1,
                  color: "#ffffff",
                  fontFamily: font1,
                  fontSize: {
                    xs: "0.5em",
                  },

                  pl: 0,
                  pr: 0,
                  "&:hover": {
                    backgroundColor: backgroundColor,
                    color: color1,
                    border: 1,

                    borderColor: color1,
                  },
                }}
              >
                {" "}
                about me &nbsp; &nbsp; {">"}
              </Button>
              <br />
              <Button
                sx={{
                  textTransform: "none",
                  background: color1,
                  color: "#ffffff",
                  fontFamily: font1,
                  fontSize: {
                    xs: "0.5em",
                  },

                  pl: 0,
                  pr: 0,
                  "&:hover": {
                    backgroundColor: backgroundColor,
                    color: color1,
                    border: 1,

                    borderColor: color1,
                  },
                }}
              >
                {" "}
                github &nbsp; &nbsp; {">"}
              </Button>
            </Grid>
            <Grid xs={4}>
              {" "}
              <Button
                sx={{
                  textTransform: "none",
                  background: color1,
                  color: "#ffffff",
                  fontFamily: font1,
                  fontSize: {
                    xs: "0.5em",
                  },

                  pl: 0,
                  pr: 0,
                  "&:hover": {
                    backgroundColor: backgroundColor,
                    color: color1,
                    border: 1,

                    borderColor: color1,
                  },
                }}
              >
                {" "}
                contact me &nbsp; &nbsp; {">"}
              </Button>
              <br />
              <Button
                onClick={() => navigateLink(5)}
                sx={{
                  textTransform: "none",
                  background: color1,
                  color: "#ffffff",
                  fontFamily: font1,
                  fontSize: {
                    xs: "0.5em",
                  },

                  pl: 0,
                  pr: 0,
                  "&:hover": {
                    backgroundColor: backgroundColor,
                    color: color1,
                    border: 1,

                    borderColor: color1,
                  },
                }}
              >
                {" "}
                resume &nbsp; &nbsp; {">"}
              </Button>
            </Grid>
          </Grid>

          <img
            src={scrollImage}
            height="50%"
            width="18%"
            style={{ marginLeft: "5%", marginTop: "0%" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Home;
