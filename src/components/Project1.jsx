import { useState, useEffect, useContext, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ColorContext from "./ColorContext"; // Import the context
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project1() {
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

  //?
  return (
    <div
      className="content"
      style={{
        width: "100vw",
       // height: "100vh",
        backgroundColor: backgroundColor, // Replace with the color you need
        paddingBottom: "7%",
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
          // display: "flex",
          // flexDirection: "column",
          // mt: "10%",
        }}
      >
        <center>
          <Typography
            sx={{color: color6,  fontSize: {
              xs: "1em",
              sm: "2em",
              md: "3em",
              lg: "4em",
              xl: "5em",
            }, fontWeight: "bold", fontFamily: font2 }}
          >
            Projects
          </Typography>
        </center>

        <Typography
          sx={{
            color: color6, 
            textAlign: "left",
            fontSize: {
              xs: "0.5em",
              sm: "3em",
              md: "5em",
              lg: "5em",
            },
            ml: "5%",
            fontFamily: font2,
          }}
        >
          Nutrify Me
        </Typography>
        <Box
          sx={{
            background: color2,
            mt: 0,
            ml: "4%",
            mr: "6%",
            borderRadius: 4,
            pb: "2%",
          }}
        >
          <Grid container spacing={4} sx = {{}}>
            <Grid xs={12} sm={4}>
              <img
                src="images/nutrifyme.png"
                height="100%"
                width="80%"
                style={{ marginLeft: "5%" }}
              />
            </Grid>
            <Grid xs={12} sm={8} sx = {{ display: "flex",
                  justifyContent: "flex-start", // Aligns content horizontally to the start
                  alignItems: "flex-start",}}>
              <Box sx={{ ml: "10%", mt: { xs: "0%", sm: "4%", md: "5%", lg: "5%", xl: "8%" },  }}>
                <Typography
                  sx={{
                    color: color6, 
                    textAlign: "left",
                    fontFamily: font2,
                    fontSize: {
                      xs: "0.5em",
                      sm: "1em",
                      md: "1em",
                      lg: "1em",
                    },
                    mr: "5%"
                  }}
                >
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
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
                  {" "}
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
                  </a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid
          container
          spacing={0}
          sx={{ ml: "0%", mt: { xs: "0%", sm: "-3%" } }}
        >
          <Grid xs={4} sm={4}>
            <Typography
              sx={{
                color: color6, 
                fontSize: {
                  xs: "0.5em",
                  sm: "2em",
                  md: "4em",
                  lg: "4em",
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
                ml: "16%",
                pl: 2,
                display: "flex",
                justifyContent: "flex-start", // Aligns content horizontally to the start
                alignItems: "flex-start",
                pb: "18%",
              }}
            >
              {" "}
              <img
                src="images/android.png"
                width="18%"
                height="50%"
                style={{ marginLeft: "2%" }}
              />
              <img
                src="images/android.png"
                width="18%"
                height="50%"
                style={{ marginLeft: " 5%" }}
              />
              <img
                src="images/android.png"
                width="18%"
                height="50%"
                style={{ marginLeft: " 5%" }}
              />
              <img
                src="images/android.png"
                width="18%"
                height="50%"
                style={{ marginLeft: " 5%" }}
              />
            </Box>
          </Grid>
          <Grid xs={4} sm={4}>
            {" "}
            <Typography
              sx={{
                color: color6, 
                fontSize: {
                  xs: "0.5em",
                  sm: "2em",
                  md: "4em",
                  lg: "4em",
                },
                fontFamily: font2,
              }}
            >
              Skills Aquired
            </Typography>
            <Grid container spacing={2} sx={{ ml: "5%", mt: 1 }}>
              <Grid xs={6} sm={6}>
                {" "}
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    py: "2.5%",
                    fontSize: {
                      xs: "0.5em",
                      sm: "0.6em",
                      md: "1.2em",
                      lg: "1.2em",
                    },
                    ml: "7%",
                    mr: "15%",
                    fontFamily: font2,
                  }}
                >
                  WEB DEVELOPMENT
                </Box>
              </Grid>
              <Grid xs={6} sm={6}>
                {" "}
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    py: "2.5%",
                    fontSize: {
                      xs: "0.5em",
                      sm: "0.6em",
                      md: "1.2em",
                      lg: "1.2em",
                    },
                    ml: "5%",
                    fontFamily: font2,
                  }}
                >
                  DATABASE MANAGEMENT
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ ml: "5%", mt: 2 }}>
              <Grid xs={6} sm={6}>
                {" "}
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    py: "2.5%",
                    fontSize: {
                      xs: "0.5em",
                      sm: "0.6em",
                      md: "1.2em",
                      lg: "1.2em",
                    },
                    ml: "7%",
                    mr: "2%",
                    fontFamily: font2,
                  }}
                >
                  FRONT-END DEVELOPMENT
                </Box>
              </Grid>
              <Grid xs={6} sm={6}>
                {" "}
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    py: "2.5%",
                    fontSize: {
                      xs: "0.5em",
                      sm: "0.6em",
                      md: "1.2em",
                      lg: "1.2em",
                    },
                    ml: "5%",
                    fontFamily: font2,
                  }}
                >
                  BACK-END DEVELOPMENT
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ ml: "5%", mt: 2 }}>
              <Grid xs={6} sm={6}>
                {" "}
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    py: "2.5%",
                    fontSize: {
                      xs: "0.5em",
                      sm: "0.6em",
                      md: "1.2em",
                      lg: "1.2em",
                    },
                    ml: "10%",
                    mr: "10%",
                    fontFamily: font2,
                  }}
                >
                  API INTEGRATION
                </Box>
              </Grid>
              <Grid xs={6} sm={6}>
                {" "}
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    py: "2.5%",
                    fontSize: {
                      xs: "0.5em",
                      sm: "0.6em",
                      md: "1.2em",
                      lg: "1.2em",
                    },
                    ml: "5%",
                    mr: "40%",
                    fontFamily: font2,
                  }}
                >
                  REST API
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={4} sm={4}>
            {" "}
            <Typography
              sx={{
                color: color6, 
                fontSize: {
                  xs: "0.5em",
                  sm: "2em",
                  md: "4em",
                  lg: "4em",
                },
                fontFamily: font2,
              }}
            >
              Tools
              <br />
              <img src="images/android.png" width="15%" height="50%" />
              <img src="images/android.png" width="15%" height="50%" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Project1;
