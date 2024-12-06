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
import TextField from "@mui/material/TextField";
import { motion, useInView } from "framer-motion";

function ContactMe() {
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
      x: "-100vw", // Move fully off-screen based on viewport width

      transition: {
        duration: 3,
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
      },
    },
    visible: {
      opacity: 1,
      x: 0, // End position
      transition: {
        duration: 2, // Slower animation
        ease: [0.2, 0.8, 0.2, 1], // Correct format for cubic-bezier
        delay: 0, // Delay before animation starts
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: "100vw", // Fully off-screen to the right

      transition: {
        duration: 4.5,
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
  //?
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

  return (
    <div
      id="contact"
      className="content"
      style={{
        width: "100vw",
        paddingTop: "0%",
        //  height: "100vh",
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
      <Box
        sx={{
          // width: "100vw",
          // height: "100vh",
          backgroundColor: backgroundColor,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sm={5}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={leftVariants}
            >
              <Box
                sx={{
                  pt: "16%",
                  pb: "16%",
                  background: color2,
                  borderRadius: 5,
                  ml: "10%",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.5em",
                      sm: "4em",
                      md: "6em",
                      lg: "6em",
                    },
                    fontFamily: font2,
                    textAlign: "left",
                    ml: "20%",
                    color: color6,
                  }}
                >
                  let's
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.5em",
                      sm: "4em",
                      md: "6em",
                      lg: "6em",
                    },
                    fontFamily: font2,
                    textAlign: "right",
                    mr: "20%",
                    color: color6,
                  }}
                >
                  get in
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.5em",
                      sm: "4em",
                      md: "6em",
                      lg: "6em",
                    },
                    fontFamily: font2,
                    textAlign: "left",
                    ml: "20%",
                    color: color6,
                  }}
                >
                  touch
                </Typography>
              </Box>
            </motion.div>

            <Box
              sx={{
                background: color2,
                borderRadius: 5,
                ml: "10%",
                display: { sx: "block", sm: "none" },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5em",
                  },
                  fontFamily: font2,
                  textAlign: "center",
                  ml: "0%",
                }}
              >
                let's get in touch
              </Typography>
            </Box>
          </Grid>
          <Grid sm={7}>
            <Box sx={{ mr: "5%", ml: "4%" }}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={rightVariants}
              >
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 3,
                    pt: "3%",
                    ml: { xs: "5%", sm: "0%" },
                    mr: { xs: "0%", sm: "0%" },
                  }}
                >
                  <Box sx={{ ml: "2%", mr: "5%" }}>
                    <Grid container spacing={2} sx={{ mt: "2%" }}>
                      <Grid xs={6}>
                        {" "}
                        <Typography
                          sx={{
                            fontFamily: font2,
                            textAlign: "left",
                            ml: "15%",
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "1em",
                              lg: "1em",
                            },
                          }}
                        >
                          Name
                        </Typography>
                        <TextField
                          size="small"
                          sx={{
                            borderColor: color1,
                            height: "20%",
                            background: color5,
                            borderRadius: 2,
                            width: "70%",
                            ml: "15%",
                            mr: "50%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "none", // Removes the border
                              },
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "1em",
                              lg: "1em",
                            },
                            fontFamily: font2,
                            textAlign: "left",
                            ml: "15%",
                          }}
                        >
                          Email
                        </Typography>
                        <TextField
                          size="small"
                          sx={{
                            height: "20%",
                            background: color5,
                            borderRadius: 2,
                            width: "70%",
                            ml: "15%",
                            mr: "50%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "none", // Removes the border
                              },
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "1em",
                              lg: "1em",
                            },
                            fontFamily: font2,
                            textAlign: "left",
                            ml: "15%",
                          }}
                        >
                          Contact Number
                        </Typography>
                        <TextField
                          size="small"
                          sx={{
                            height: "20%",
                            background: color5,
                            borderRadius: 2,
                            width: "70%",
                            ml: "15%",
                            mr: "50%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "none", // Removes the border
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid xs={6}>
                        {" "}
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "1em",
                              lg: "1em",
                            },
                            fontFamily: font2,
                            textAlign: "left",
                            ml: "6%",
                          }}
                        >
                          Message:{" "}
                        </Typography>
                        <TextField
                          multiline
                          rows={4}
                          size="small"
                          sx={{
                            height: "60%",
                            background: color5,
                            borderRadius: 2,
                            width: "90%",
                            ml: "5%",
                            mr: "30%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "none", // Removes the border
                              },
                            },
                          }}
                        />{" "}
                      </Grid>
                    </Grid>
                  </Box>

                  <Button
                    sx={{
                      textTransform: "none",
                      background: color1,
                      color: "#ffffff",
                      fontFamily: font2,
                      fontSize: {
                        xs: "0.8em",
                      },
                      mb: 1,
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
                    SUBMIT
                  </Button>
                </Box>
              </motion.div>

              <hr />
              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={rightVariants}
              >
                <Box
                  sx={{
                    background: color1,
                    color: color4,
                    fontFamily: font2,
                    borderRadius: 4,
                    ml: { xs: "5%", sm: "0%" },

                    mr: "0%",
                    pb: "0%",
                    mt: 2.5,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid xs={4}>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontFamily: font2,
                          ml: "20%",
                          fontSize: {
                            xs: "0.5em",
                            sm: "1em",
                            md: "2em",
                            lg: "1.8em",
                            xl: "2em",
                          },
                          mt: "5%",
                        }}
                      >
                        {" "}
                        Contact Me
                      </Typography>

                      <br />
                      <img src="images/ig3.png" width="70%" height="70%" />
                    </Grid>
                    <Grid xs={8}>
                      <br />
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          textAlign: "right",
                          fontFamily: font2,
                          mr: "15%",
                        }}
                      >
                        {" "}
                        IDENTIFICATION CARD NO.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          textAlign: "right",
                          fontFamily: font2,
                          mr: "15%",
                        }}
                      >
                        {" "}
                        123456789
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                          mt: "3%",
                        }}
                      >
                        {" "}
                        Name: Aubrey Marie Quiatchon
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        ......................................................................................................................................
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        Title: Software Developer
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        ......................................................................................................................................
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        Email: aubreyquiatchon@gmail.com
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        ......................................................................................................................................
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        Contact Number: 09171561080
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        ......................................................................................................................................
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "1em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                          fontFamily: font2,
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        Date of Issued: 2024
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    sx={{
                      mt: { xs: "3%", md: "0%" },
                      ml: {
                        xs: "30%",
                        sm: "60%",
                      },
                      mr: "50%",
                      //   display: "flex",
                      //   justifyContent: "flex-end", // Aligns content horizontally to the start
                      //   alignItems: "flex-end",
                    }}
                  >
                    <Grid xs={2} sm={1}>
                      <Button
                        sx={{
                          background: color2,
                          // ml: "0%",
                          // mr: "50%",
                          height: { xs: "50%", sm: "80%" },
                          width: { xs: "5%", sm: "50%" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="images/linkedin.png"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain", // Adjust as needed
                          }}
                        />
                      </Button>
                    </Grid>
                    <Grid xs={2} sm={1}>
                      {" "}
                      <Button
                        sx={{
                          background: color2,
                          // ml: "0%",
                          // mr: "50%",
                          height: { xs: "50%", sm: "80%" },
                          width: { xs: "5%", sm: "50%" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="images/linkedin.png"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain", // Adjust as needed
                          }}
                        />
                      </Button>
                    </Grid>

                    <Grid xs={2} sm={1}>
                      {" "}
                      <Button
                        sx={{
                          background: color2,
                          // ml: "0%",
                          // mr: "50%",
                          height: { xs: "50%", sm: "80%" },
                          width: { xs: "5%", sm: "50%" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="images/github.png"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain", // Adjust as needed
                          }}
                        />
                      </Button>
                    </Grid>
                    <Grid xs={3} sm={1}>
                      {" "}
                      <Button
                        sx={{
                          height: { xs: "50%", sm: "80%" },
                          width: { xs: "5%", sm: "50%" },
                          background: color2,
                          ml: "0%",
                          mr: "50%",
                        }}
                      >
                        Resume
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactMe;
