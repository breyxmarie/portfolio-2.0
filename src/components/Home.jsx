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
    hidden: { opacity: 1, y: "-100%" }, // Initial position off-screen, 50 pixels above
    visible: { opacity: 1, y: 0 }, // Final position on-screen
    transition: { duration: 500, ease: "cubic-bezier(0.2, 0.8, 0.2, 1)" }, // Adjust the duration here
  };

  const bottomVariants = {
    hidden: { opacity: 1, y: "50%" }, // Initial position off-screen, 50 pixels above
    visible: { opacity: 1, y: 0 }, // Final position on-screen
    transition: { duration: 10, ease: "cubic-bezier(0.2, 0.8, 0.2, 1)" }, // Adjust the duration here
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 }, // Initial position off-screen, 50 pixels above
    visible: { opacity: 1, x: 0 }, // Final position on-screen
    transition: { duration: 10, ease: "cubic-bezier(0.2, 0.8, 0.2, 1)" }, // Adjust the duration here
  };

  const rightVariants = {
    hidden: { opacity: 1, x: 300 }, // Initial position off-screen, 50 pixels above
    visible: { opacity: 1, x: 0 }, // Final position on-screen
    transition: { duration: 10, ease: "cubic-bezier(0.2, 0.8, 0.2, 1)" }, // Adjust the duration here
  };

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
              variants={leftVariants}
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
                        mt: "25%",
                        fontSize: {
                          xs: "7em",
                          sm: "5em",
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
                          sm: "5em",
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
                          sm: "40%",
                          md: "28%",
                        },

                        ml: "9%",
                        fontSize: {
                          xs: "7em",
                          sm: "6em",
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
              </motion.div>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={bottomVariants}
              >
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
              </motion.div>
            </Box>
          </Grid>
          <Grid sm={3.5}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={rightVariants}
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
                  <Button
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1.5em",
                        lg: "1.5em",
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
                  <br />
                  <br />

                  <Button
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1.5em",
                        lg: "1.5em",
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

                  <br />
                  <br />

                  <Button
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1.5em",
                        lg: "1.5em",
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
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1.5em",
                        lg: "1.5em",
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
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1.5em",
                        lg: "1.5em",
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
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font1,
                      fontSize: {
                        xs: "1em",
                        sm: "0.8em",
                        md: "1.5em",
                        lg: "1.5em",
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
          pb: "10%",
          display: {
            xs: "block", // Hide on extra small screens
            sm: "none",
            // width: "100vw",
            //  height: "100vh",
          },
        }}
      >
        <Typography
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
        </Typography>

        <img
          style={{ borderRadius: 10, marginTop: "0%", lineHeight: 1 }}
          src="images/homeImage.jpg"
          width="55%"
          height="15%"
        />

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
        </Box>
      </Box>
    </div>
  );
}

export default Home;
