import { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ColorContext from "./ColorContext"; // Import the context
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./NavBar";
import SpotifyPlayer from "./SpotifyPlayer";
  // import Player from "./Player";


function AboutMe1() {
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

  //? spotify stuff

  //?

  return (
    <div
    id="about"
    //  className="content"
      style={{
        width: "100vw",
        paddingTop: "7%",
       // height: "100vh",
        backgroundColor: backgroundColor, // Replace with the color you need
        paddingBottom: "5%",
        display: "flex", // Flex to center content (optional)
        justifyContent: "center",
        // alignItems: "center",
        // overflow: "hidden", // Prevent overflow, useful for full-screen layouts
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: "center",
      }}
    >
  
      {/* <NavBar/> */}
      <Grid container spacing={2}>
        <Grid xs={12} sm={5}>
      
          <Box
            sx={{
              background: color2,
              borderRadius: 5,
              ml: 5,
              pb: "10%",
              display: {
                xs: "none", // Hide on extra small screens
                sm: "block",
              },
            }}
          >
            <Grid container spacing={2} sx={{ pt: 1 }}>
              <Grid sm={8}></Grid>
              <Grid sm={4}>
                <img
                  src="images/bar.png"
                  height="100%"
                  width="30%"
                  style={{ marginLeft: "65%" }}
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
                  sm={9}
                  sx={{
                    ml: "5%",
                    display: "flex",
                    justifyContent: "flex-start", // Aligns content horizontally to the start
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      color: color6,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.4em",
                        md: "0.8em",
                        lg: "1em",
                      },
                    }}
                  >
                    breyxmarie.site
                  </Typography>
                </Grid>
                <Grid sm={2}>
                  <img
                    src="images/search.png"
                    height="90%"
                    width="20%"
                    style={{ marginLeft: "65%" }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid xs={5}>
                {" "}
                <Box sx={{ width: "100%", maxWidth: "70%", ml: "5%" }}>
                  <img
                    src="images/profilepic.png"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginLeft: "20%",

                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                    }}
                  />
                </Box>
                <Box>
{/* 
                <SpotifyPlayer
        client_id="22b071825abe48bd80d4c9237876c073"
        client_secret="d540a159c96e486384af97a635c125d6"
        refresh_token="AQB5YJrpAccOwb4rILpQylu_XsoXkjH6WW-RNagFDjjcnH8PPkdgQwed1EYDOOO6ariGPfOSunSRmVfKhK4SKXcJ2ho8OLsG57uDpqadPMH7pywKPB4izjVphNYMgF4MFA4"
      />

<SpotifyPlayer
        client_id="22b071825abe48bd80d4c9237876c073"
        client_secret="d540a159c96e486384af97a635c125d6"
        refresh_token="AQDWPyumZQOcsVOqEcG54m84Kvooh0mGEQiwnlEWq0OCYxD6rnNhTC0ep4g9dQcEqOvzaCkU4nNX4iNynzS-m7sCPZOh0cH6Am9xWyJnxvq5lOxUry9G6qrxtSZ4lnv-8Zo"
      />
 <SpotifyPlayer
        client_id="22b071825abe48bd80d4c9237876c073"
        client_secret="d540a159c96e486384af97a635c125d6"
        refresh_token="AQDHmQ8bPbgQJtb2qrYkP7ATrfj1VTCed-kqNmoo5hEhoWREvmuXTJkZMmlYhi-PJ-ALRsE1X54wcYx9KKlabo4RADXIC-Q7GU8hMyOuPN9vy49w63wtlklBQEnGchbZMtA"
      />


<SpotifyPlayer
        client_id="22b071825abe48bd80d4c9237876c073"
        client_secret="d540a159c96e486384af97a635c125d6"
        refresh_token="AQDozLqTkCUcR8365VrQq-PvYFcrKUoJsNbU8O7hCIx2yqvtaIwi7g3ZRdvOkFsT4LAyjofbBEXNWUQdlLDbg2VN5C_b2e3UQXls1XYnQGwkgXNLrUCMnuVVW8hWfH92I3Q"
      /> */}

      {/* <Player/> */}
                </Box>
              </Grid>
              <Grid sm={7}>
                <Box sx={{ mr: "5%" }}>
                  <Box sx={{ background: color4, borderRadius: 5 }}>
                    <Box
                      sx={{
                        background: color1,
                        borderRadius: 2,
                        color: color4,
                        mr: "70%",
                        fontFamily: font2,

                        fontSize: {
                          xs: "0.5em",
                          sm: "0.5em",
                          md: "0.8em",
                          lg: "1em",
                        },
                      }}
                    >
                      About Me
                    </Box>
                    <Typography
                      align="justify"
                      sx={{
                        fontFamily: font2,

                        color: color6,
                        ml: 2,
                        mr: 2,
                        py: 1.5,
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.3em",
                          md: "0.5em",
                          lg: "1em",
                        },
                      }}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Box>

                  <Box sx={{ background: color4, borderRadius: 5, mt: 2 }}>
                    <Box
                      sx={{
                        fontFamily: font2,

                        background: color1,
                        borderRadius: 2,
                        color: color4,
                        mr: "70%",
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.5em",
                          md: "0.8em",
                          lg: "1em",
                        },
                      }}
                    >
                      Interests
                    </Box>
                    <Typography
                      align="justify"
                      
                      sx={{
                        fontFamily: font2,
                        color: color6,
                        ml: 2,
                        mr: 2,
                        py: 1.5,
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.3em",
                          md: "0.8em",
                          lg: "1em",
                        },
                      }}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Box>
{/* 
                  <Box
                    sx={{
                      background: color4,
                      borderRadius: 5,
                      mt: 2,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "0.8em",
                        lg: "1em",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontFamily: font2,

                        background: color1,
                        borderRadius: 2,
                        color: color4,
                        mr: "50%",
                      }}
                    >
                      Area of Interests
                    </Box>
                    <Typography
                      align="justify"
                      sx={{
                        fontFamily: font2,

                        color: color6,
                        ml: 2,
                        mr: 2,
                        py: 1.5,
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.3em",
                          md: "0.8em",
                          lg: "1em",
                        },
                      }}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Box> */}
                </Box>
              </Grid>
            </Grid>
            <SpotifyPlayer
        client_id="22b071825abe48bd80d4c9237876c073"
        client_secret="d540a159c96e486384af97a635c125d6"
        refresh_token="AQDozLqTkCUcR8365VrQq-PvYFcrKUoJsNbU8O7hCIx2yqvtaIwi7g3ZRdvOkFsT4LAyjofbBEXNWUQdlLDbg2VN5C_b2e3UQXls1XYnQGwkgXNLrUCMnuVVW8hWfH92I3Q"
      />
          </Box>

          <Box
            sx={{
              background: color2,
              borderRadius: 5,
              ml: "10%",
              mr: "6%",
             
              display: {
                xs: "block", // Hide on extra small screens
                sm: "none",
              },
            }}
          >
            <Grid container spacing={2} sx={{ pt: 1 }}>
              <Grid xs={8}></Grid>
              <Grid xs={4}>
                <img
                  src="images/bar.png"
                  height="70%"
                  width="30%"
                  style={{ marginLeft: "60%" }}
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
                height: "20px",
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
                    sx={{
                      ml: 2,
                      color: color6,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.4em",
                        md: "1em",
                        lg: "1em",
                      },
                    }}
                  >
                    breyxmarie.site
                  </Typography>
                </Grid>
                <Grid xs={2}>
                  <img
                    src="images/search.png"
                    height="70%"
                    width="20%"
                    style={{ marginLeft: "65%", marginBottom: "5%" }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid xs={12}>
                {" "}
                <Box sx={{ width: "100%", maxWidth: "70%", ml: "5%" }}>
                  <img
                    src="images/profilepic1.png"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginLeft: "20%",

                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                    }}
                  />
                </Box>
              </Grid>
              <Grid xs={12}>
                <Box sx={{ mr: "10%", ml: "10%", mt: "7%" }}>
                  <Grid container spacing={2} sx={{ ml: 0, mr: 0 }}>
                    <Grid xs={6}>
                      <Box sx={{ background: color4, borderRadius: 5, mr: 1 }}>
                        <Box
                          sx={{
                            background: color1,
                            borderRadius: 2,
                            color: color4,
                            mr: "70%",
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "1em",
                              lg: "1em",
                            },
                          }}
                        >
                          About Me
                        </Box>
                        <Typography
                          align="justify"
                          sx={{
                            color: color6,
                         
                            ml: 2,
                            mr: 2,
                            py: 1.5,
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.3em",
                              md: "1em",
                              lg: "1em",
                            },
                          }}
                        >
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={6}>
                      <Box sx={{ background: color4, borderRadius: 5, mt: 0 }}>
                        <Box
                          sx={{
                            background: color1,
                            borderRadius: 2,
                            color: color4,
                            mr: "70%",
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "1em",
                              lg: "1em",
                            },
                          }}
                        >
                          Interests
                        </Box>
                        <Typography
                          align="justify"
                          sx={{
                            color: color6,
                            ml: 2,
                            mr: 2,
                            py: 1.5,
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.3em",
                              md: "1em",
                              lg: "1em",
                            },
                          }}
                        >
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      background: color4,
                      borderRadius: 5,
                      mt: 2,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "1em",
                        lg: "1em",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        background: color1,
                        borderRadius: 2,
                        color: color4,
                        mr: "60%",
                      }}
                    >
                      Area of Interests
                    </Box>
                    <Typography
                      align="justify"
                      sx={{
                        color: color6,
                        ml: 2,
                        mr: 2,
                        py: 1.5,
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.3em",
                          md: "1em",
                          lg: "1em",
                        },
                      }}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            hi
          </Box>
        </Grid>
        <Grid xs={12} sm={7}>
          <Box
            sx={{ background: color2, borderRadius: 5, ml: 5, mr: 4, pb: "4%" }}
          >
            <Grid container spacing={2} sx={{ pt: 1 }}>
              <Grid xs={8}></Grid>
              <Grid xs={4}>
                <img
                  src="images/bar.png"
                  height="90%"
                  width="30%"
                  style={{ marginLeft: "65%" }}
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
                    sx={{
                      color: color6,
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.4em",
                        md: "0.8em",
                        lg: "1em",
                      },
                    }}
                  >
                    TechSkills.site
                  </Typography>
                </Grid>
                <Grid xs={2}>
                  <img
                    src="images/search.png"
                    height="80%"
                    width="20%"
                    style={{ marginLeft: "65%" }}
                  />
                </Grid>
              </Grid>
            </Box>
            <br />
            <br />

            <Grid container spacing={2} sx = {{ml: "0.5%"}}>
              <Grid xs={1.7}>
                <img src="images/python.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/java.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/c++.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/c#.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/html.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/react.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/js.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/sql.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/mysql.png" width="50%" height="90%" />
              </Grid>
             
              <Grid xs={1.7}>
                <img src="images/firebase.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/django.png" width="50%" height="90%" />
              </Grid>
              
              <Grid xs={1.7}>
                <img src="images/springboot.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/restapi.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/git.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/android.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/figma.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/vscode.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/github.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/materialui.png" width="50%" height="90%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/tailwind.png" width="50%" height="60%" />
              </Grid>
              <Grid xs={1.7}>
                <img src="images/css.png" width="50%" height="90%" />
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid xs={5}>
              {" "}
              <Box
                sx={{
                  background: color2,
                  borderRadius: 5,
                  ml: 7,
                  mr: 0,
                  pb: "5%",
                  display: {
                    xs: "none", // Hide on extra small screens
                    sm: "block",
                  },
                }}
              >
                <Grid container spacing={2} sx={{ pt: 1 }}>
                  <Grid xs={8}></Grid>
                  <Grid xs={4}>
                    <img
                      src="images/bar.png"
                      height="90%"
                      width="50%"
                      style={{ marginLeft: "45%" }}
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
                    mb: 3.5,
                  }}
                >
                  <Grid container spacing={2} sx={{ pt: 0.5 }}>
                    <Grid
                      xs={9}
                      sx={{
                        ml: "5%",
                        display: "flex",
                        justifyContent: "flex-start", // Aligns content horizontally to the start
                        alignItems: "flex-start",color: color6,
                      }}
                    >
                      <Typography
                        xs={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.4em",
                            md: "0.8em",
                            lg: "1em",
                          },
                          color: color6,
                          mt: 0.5,
                          ml: 1,
                        }}
                      >
                        instagram.site
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <img
                        src="images/search.png"
                        height="90%"
                        width="40%"
                        style={{ marginLeft: "65%" }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Grid container spacing={2}>
                  <Grid xs={5}
                  sx = {{ display: "flex",
                      justifyContent: "flex-end", // Aligns content horizontally to the start
                      alignItems: "flex-end",
                      ml: "-10%",
                      mr: "5%",
                     
                    }}
                  >
                    <img src="images/igpic.png" width="50%" height="95%" />
                  </Grid>
                  <Grid xs={6}  sx = {{ mt: "2%",}}
                  // sx = {{ display: "flex",
                  //     justifyContent: "flex-start", // Aligns content horizontally to the start
                  //     alignItems: "flex-start",}}
                      >
                    <Typography sx = {{   color: color6,
                        fontFamily: font1,
                        textAlign: "left",
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.5em",
                          md: "0.8em",
                          lg: "1em",
                        },}}>breyxmarie</Typography>
                      

                    <Button
                      sx={{
                        display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start", 
                        textTransform: "none",
                        background: color1,
                        color: color4,
                        fontFamily: font1,
                        fontSize: {
                          xs: "0.5em",
                          sm: "0.5em",
                          md: "0.8em",
                          lg: "1em",
                        },
                        px: 3,
                        "&:hover": {
                          backgroundColor: color2,
                          color: color1,
                          border: 1,

                          borderColor: color1,
                        },
                      }}
                    >
                      {" "}
                      follow
                    </Button>
                  </Grid>
                </Grid>
                <br />

                <Box sx = {{ml: "-10%", mr: "-5%"}}>
                <Grid container spacing={2} sx = {{ml: "0%", mr: "0%"}}>
                  <Grid xs={4} sx = {{   display: "flex",
                      justifyContent: "flex-end", // Aligns content horizontally to the start
                      alignItems: "flex-end",}}>
                    {" "}
                    <img
                      src="images/ig1.png"
                     height="100%"
                      width="55%"
                      style={{ marginLeft: "0%" }}
                    />
                   
                 
                  </Grid>
                  <Grid xs={4} sx = {{   display: "flex",
                      justifyContent: "center", // Aligns content horizontally to the start
                      alignItems: "center",}}>
                    <img
                      src="images/ig2.png"
                      height="100%"

                      width="55%"
                      style={{ marginLeft: "0%" }}
                    />
                  </Grid>
                  <Grid xs={4} sx = {{   display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",}}>
                    <img
                      src="images/ig3.png"
                      height="100%"

                      width="55%"
                      style={{ marginLeft: "0%" }}
                    />
                  </Grid>
                </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  background: color2,
                  borderRadius: 5,
                  ml: 7,
                  mr: 0,
                  pb: "5%",
                  display: {
                    xs: "none",
                    sm: "none",
                  },
                }}
              >
                <Grid container spacing={2} sx={{ pt: 1 }}>
                  <Grid xs={8}></Grid>
                  <Grid xs={4}>
                    <img
                      src="images/bar.png"
                      height="90%"
                      width="50%"
                      style={{ marginLeft: "45%" }}
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
                    mb: 3.5,
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
                        xs={{
                          
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.4em",
                            md: "1em",
                            lg: "1em",
                          },
                          color: color6,
                          mt: 0.5,
                          ml: 1,
                        }}
                      >
                        instagram.site
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <img
                        src="images/search.png"
                        height="90%"
                        width="40%"
                        style={{ marginLeft: "65%" }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <img src="images/igpic.png" width="50%" height="95%" />
                  </Grid>
                  <Grid xs={6}>
                    <Typography>breyxmarie</Typography>
                    <Button
                      sx={{
                        textTransform: "none",
                        background: color1,
                        color: "#ffffff",
                        fontFamily: font1,
                        fontSize: "1em",
                        px: 3,
                        "&:hover": {
                          backgroundColor: color2,
                          color: color1,
                          border: 1,

                          borderColor: color1,
                        },
                      }}
                    >
                      {" "}
                      follow
                    </Button>
                  </Grid>
                </Grid>
                <br />

                <Grid container spacing={2}>
                  <Grid xs={6}>
                    {" "}
                    <img
                      src="images/ig1.png"
                      height="50%"
                      width="55%"
                      style={{ marginLeft: "15%" }}
                    />
                    <br />
                    <img
                      src="images/ig2.png"
                      height="50%"
                      width="55%"
                      style={{ marginLeft: "10%" }}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <img
                      src="images/ig3.png"
                      height="50%"
                      width="55%"
                      style={{ marginLeft: "0%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} sm={7}>
              {" "}
              <Box
                sx={{
                  background: color2,
                  borderRadius: 5,
                  ml: { xs: 8, sm: 5 },
                  mr: 4,
                  pb: "3%",
                }}
              >
                <Grid container spacing={2} sx={{ pt: 0.5 }}>
                  <Grid xs={8}></Grid>
                  <Grid xs={4}>
                    <Box sx={{ width: "100%", maxWidth: "70%", ml: "25%" }}>
                      <img
                        src="images/bar.png"
                        height="90%"
                        width="50%"
                        style={{ marginLeft: "40%" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    ml: "3%",
                    mr: "3%",
                    mt: "4%",
                    height: "20%",
                  }}
                >
                  <Grid container spacing={1.5} sx={{ pt: 0.5 }}>
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
                        sx={{
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.4em",
                            md: "0.8em",
                            lg: "1em",
                          },
                          color: color6,
                          ml: 2,
                        }}
                      >
                        journals.site
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Box sx={{ width: "100%", maxWidth: "90%", ml: "25%" }}>
                        <img
                          src="images/search.png"
                          height="50%"
                          width="30%"
                          style={{ marginLeft: "65%" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      color: color6,
                      fontFamily: font2,
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "1em",
                        lg: "1.5em",
                      },
                    }}
                  >
                    Publications
                  </Typography>
                  <Typography
                    sx={{
                      color: color6,
                      fontFamily: font2,
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "0.8em",
                        lg: "1em",
                      },
                    }}
                  >
                    Cherie: A Proposed Design for a Mobile Application with AI
                    Outfit Assistance and 3D Virtual Wardrobe
                  </Typography>
                  <Typography
                    sx={{
                      color: color6,
                      textAlign: "left",
                      fontFamily: "sans-serif",
                      fontStyle: "italic",
                      fontSize: {
                        xs: "0.5em",
                        sm: "0.5em",
                        md: "0.8em",
                        lg: "1em",
                      },
                    }}
                  >
                    Presented at The 9th International Conference on Industrial
                    and Business Engineering
                  </Typography>
                  <br />
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <img src="images/acm.png" width="50%" height="100%" />
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          color: color6,
                          fontFamily: font2, 
                          textAlign: "left",
                          mt: "5%",
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "0.8em",
                            lg: "1em",
                          },
                        }}
                      >
                        Published into Association of Computing Machinery
                      </Typography>
                    </Grid>
                  </Grid>

                  <br />
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      ml: 1,
                      display: "flex",
                      justifyContent: "flex-start", // Aligns content horizontally to the start
                      alignItems: "flex-start",
                    }}
                  >
                    <Grid sm={1}>
                      <Typography
                        sx={{
                        fontFamily: font2,
                        color: color6,
                          textAlign: "left",
                          fontWeight: "bold",
                          fontSize: {
                            xs: "0.5em",
                            sm: "0.5em",
                            md: "0.8em",
                            lg: "1em",
                          },
                        }}
                      >
                        Link: {" "}
                      </Typography>
                    </Grid>
                    <Grid
                      sm={7}
                      sx={{
                        ml: 2,
                        display: "flex",
                        justifyContent: "flex-start", // Aligns content horizontally to the start
                        alignItems: "flex-start",
                      }}
                    >
                      <a
                     
                        href="https://dl.acm.org/doi/abs/10.1145/3629378.3629415"
                        target="_blank"
                      >
                        <Typography
                          sx={{
                            fontFamily: font2, 
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.5em",
                              md: "0.8em",
                              lg: "1em",
                            },
                          }}
                        >
                          {" "} Publication{" "}
                        </Typography>
                      </a>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default AboutMe1;
