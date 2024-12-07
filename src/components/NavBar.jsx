import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { NavLink, Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
//data: [2, 5.5, 2, 8.5, 1.5, 5],
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ColorContext from "./ColorContext";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

import { useState, useContext, useEffect } from "react";

const pages = [
  { names: "home", links: "#" },
  { names: "about me", links: "#about" },
  { names: "projects", links: "#project" },
  { names: "contact me", links: "#contact" },
];

const StyledLink = `
  color: #99756e; /* Default styles */
  display: block;
  text-decoration: none;
  padding-y: 10px;

  &.active {
    color: #5754a8;
    font-weight: bold; /* Active state styles */
  }

  &:hover {
    text-decoration: underline;
  }
`;

const settings = ["linked in", "github", "resume", "instagram", "spotify"];

function NavBar() {
  const {
    backgroundColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    setDarkMode,
    setLightMode,
    font1,
    setBackgroundColor,
    setColor1,
    setColor2,
    setColor3,
    setColor4,
    setColor5,
    setColor6,
    setColor7,
    searchImage,
    toggleDarkMode,
    setFont1,
    font2,
    setFont2,
  } = useContext(ColorContext);

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const [checked, setChecked] = useState(false);

  const handleModeChange = (event) => {
    console.log("slay");
    setChecked(event.target.checked);
    console.log(event.target.checked);

    if (event.target.checked === true) {
      setDarkMode();
    } else {
      setLightMode();
    }

    // setColor1("#000000");
    // setColor2("#000000");
    // setColor3("#000000");
    // setColor4("#000000");
    // setColor5("#000000");
    // setColor6("#000000");
    // toggleDarkMode(true);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c", //? this the switch color for the dark mode stuff
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotif, setAnchorElNotif] = React.useState(null);
  const activeLink = " bg-blue-100 text-black";
  const normalLink = "";

  // ? anchorElNotif

  const [linkChoice, setLinkChoice] = useState("linked in");
  const [links, setLinks] = useState("https://linkedin.com/in/aubreyquiatchon");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    console.log(setting);
    switch (setting) {
      case "linked in":
        setLinkChoice("linked in");
        setLinks("https://linkedin.com/in/aubreyquiatchon");
        break;
      case "github":
        setLinkChoice("github");
        setLinks("https://github.com/breyxmarie");
        break;
      case "resume":
        setLinkChoice("resume");
        setLinks("https://tinyurl.com/ysr6v67p");
        break;
      case "instagram":
        setLinkChoice("instagram");
        setLinks("https://www.instagram.com/breyxmarie/");
        break;
      case "spotify":
        setLinkChoice("spotify");
        setLinks("https://open.spotify.com/user/miaageha");
        break;
    }
    setAnchorElUser(null);
  };

  const openLink = () => {
    window.open(links, "_blank");
  };
  //   const [notifsData, setNotifsData] = useState([]);
  //   const getNotifData = () => {
  //     AxiosInstance.get(`notifications`).then((res) => {
  //       console.log(res);
  //       setNotifsData(
  //         res.data
  //           .reverse()
  //           .filter((item) => item.user_id === loggedInUser.user_id)
  //       );
  //     });
  //   };

  //   useEffect(() => {
  //     getNotifData();
  //   }, []);

  const getNotifsNumber = () => {
    const count = notifsData.filter((item) => item.seen === false);
    console.log(count.length, notifsData);
    switch (count.length) {
      case 0:
        return "images/notification.png";
        break;
      case 1:
        return "images/notif1.png";
        break;
      case 2:
        return "images/notif2.png";
        break;
      case 3:
        return "images/notif3.png";
        break;
      case 4:
        return "images/notif4.png";
        break;
      case 5:
        return "images/notif5.png";
        break;
      default:
        return "images/notif5+.png";
        break;
    }
  };

  const getNotifsImage = (type) => {
    switch (type) {
      case "PAppointment":
        return "images/appointmentApprove.png";
        break;
      case "GReqOrder":
        return "images/genApprove.png";
        break;
      case "RReqOrder":
        return "images/recApprove.png";
        break;
      case "DepOrder":
        return "images/deploy.png";
        break;
    }
  };

  return (
    <AppBar
      position="sticky"
      className="w-full"
      style={{ width: "100vw" }}
      sx={{ zIndex: 999 }}
    >
      <Container
        maxWidth="100%"
        sx={{
          background: color2,
          paddingTop: 0,
          opacity: 1,
          height: "10%",
          //  marginTop: "-1.5%",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/user-home"
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* <img src="/images/logo.png" alt="Logo" /> */}
            {/* <img src={logo} alt="Logo" width="80" height="120" /> */}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "#E66253", border: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              //! dito yun changes ng style
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  color: "#000000",
                  border: 2,
                },
              }}
            >
              {pages.map(
                (
                  page // ! hanapin yun color ng menu button kapag nag smol yun screen
                ) => (
                  <MenuItem
                    // key={page.names}
                    onClick={handleCloseNavMenu}
                    //   component={Link}
                    to={page.links}
                    // selected={page.links === path}

                    //! changes per notif style
                    sx={{ color: "#00000" }}
                  >
                    <Typography textAlign="center">{page.names}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/user-home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box // * dito yun change ng style for main nav bar
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              background: color2,
              border: 0,
              borderColor: "#000000",
              borderRadius: 4,
              justifyContent: "space-between",
              alignItems: "center",
              pl: 1,
              ml: "0%",
              mr: "0%",
              fontSize: {
                xs: "0.5em",
                sm: "1em",
              },
            }}
          >
            {"<"}
            {pages.map((page) => (
              // <Box
              //   sx={{
              //     borderBottom: 2,
              //     display: "flex",
              //     flexGrow: 1,
              //     justifyContent: "space-between",
              //     alignItems: "center",
              //     p: 2,
              //   }}
              //   onMouseEnter={(e) => (e.target.style.background = "#000000")}
              //   onMouseLeave={(e) => (e.target.style.background = "none")}
              //   style={{
              //     color: "#99756E",
              //     textDecoration: "none",
              //     py: "10px",
              //   }}
              // >
              //   <NavLink
              //     key={page.names}
              //     onClick={handleCloseNavMenu}
              //     sx={{
              //       textcolor: "#99756E",
              //       display: "block",
              //       transition: "box-shadow 0.3s background ease-in-out", // Add transition for smooth effect

              //       "&:hover": {
              //         // Target the element on hover
              //         background: "#d3d3d3d3",
              //         boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)", // Add box-shadow property
              //       },
              //     }}
              //     style={{
              //       color: color6,
              //       textDecoration: "none",
              //       fontFamily: font2,
              //       //  fontWeight: "bold",
              //       //height: "50px",
              //       display: "block",
              //       transition: "background-color 0.2s ease-in-out",
              //       paddingTop: "20px",
              //       paddingBottom: "20px",
              //       "&:hover": {
              //         // Target the element on hover
              //         background: "#000000",
              //         boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              //       },
              //     }}
              //     //  onMouseOver={(e) => (e.target.style.background = "#e3aca5")}
              //     onMouseOver={(e) => (e.target.style.fontWeight = "bold")}
              //     //   onMouseOut={(e) => (e.target.style.background = "#FFFFFF")}
              //     onMouseOut={(e) => (e.target.style.fontWeight = "")}
              //     className="activeLink border w-full h-full px-4 centered"
              //     activeClassName="StyledLink" // Define your active class in CSS
              //     // className="normalLink"
              //     // component={Link}
              //      to={page.links}
              //     // selected={page.links === path}
              //   >
              <a
                href={page.links}
                onMouseOver={{ color: "blue" }}
                onMouseDown={{ color: "red" }}
                style={{
                  paddingTop: 3,
                  color: color6,
                  fontFamily: font2,
                  fontSize: "120%",
                }}
              >
                {page.names}
              </a>
              //   </NavLink>
            ))}
          </Box>

          <Box // * dito yun change ng style for main nav bar
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              background: color2,
              border: 0,
              borderColor: "#000000",
              borderRadius: 4,
              // justifyContent: "space-between",
              // alignItems: "center",
              px: 0,
              ml: "8%",
              mr: "-12%",
              fontSize: {
                xs: "0.5em",
                sm: "1em",
              },
            }}
          >
            <Grid container spacing={2} sx={{ mt: "0%" }}>
              <Grid xs={2} sx={{ mt: "1%" }}>
                <Tooltip title="More Links">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      variant="contained"
                      className="userButton"
                      onMouseEnter={(e) => (e.target.style.background = color1)}
                      onMouseLeave={(e) => (e.target.style.background = color1)}
                      sx={{
                        borderRadius: 4,
                        background: color1,
                        mr: "5px ",
                        pt: "2%",
                        pb: "2%",
                        fontSize: {
                          xs: "0.4em",
                          sm: "0.5em",
                        },
                      }}
                    >
                      {linkChoice}
                    </Button>
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu(setting);
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                      {/* <Link to={navigate}></Link> */}
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
              <Grid xs={5}>
                <Box
                  sx={{
                    background: color3,
                    borderRadius: 5,
                    mt: "2%",
                    pr: "70%",
                    py: "2.5%",
                    pl: "6%",
                    ml: "-5%",
                    mr: "7%",
                    pt: "0.5%",
                    pb: "0.5%",
                    width: "30%",
                  }}
                >
                  {links}
                </Box>
              </Grid>

              <Grid xs={2}>
                <Button
                  onClick={openLink}
                  sx={{
                    mt: "2%",
                    pt: "0.5%",
                    pb: "0.5%",
                    // background: color4,
                    borderRadius: 10,
                    mr: "100%",
                    width: "0%",
                  }}
                >
                  <img src={searchImage} width="50%" height="50%" />
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box // * dito yun change ng style for main nav bar
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              background: color2,
              border: 0,
              borderColor: "#000000",
              borderRadius: 4,
              justifyContent: "space-between",
              alignItems: "right",
              pr: 0,
              ml: "0%",
              mr: "0%",
              fontSize: {
                xs: "0.5em",
                sm: "1em",
              },
            }}
          >
            {/* <PinkSwitch defaultChecked /> */}
            <MaterialUISwitch checked={checked} onChange={handleModeChange} />
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Notifications">
              <IconButton onClick={handleOpenNotifMenu} sx={{ p: 0 }}>
                <Button
                  // variant="contained"
                  // className="userButton"
                  onMouseEnter={(e) => (e.target.style.background = "#ffffff")}
                  onMouseLeave={(e) => (e.target.style.background = "#ffffff")}
                  sx={{
                    borderRadius: 0,
                    background: "#ffffff",
                    mr: "0px ",
                  }}
                >
                  <img src={getNotifsNumber()} width="70%" height="70%" />
                </Button>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                height: "auto",
                width: "auto",
                pt: 10,
                color: "#ffffff",
              }}
              id="menu-appbar"
              anchorEl={anchorElNotif}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  width: {
                    xs: "40%",
                    sm: "60%",
                    md: "33%",
                  }, // Ensure the width of the menu is set here
                  maxWidth: "100%", // Ensure responsiveness
                  padding: "0px", // Optional: padding inside the menu
                },
              }}
              open={Boolean(anchorElNotif)}
              onClose={handleCloseNotifMenu}
            >
              <Box
                sx={{
                  py: 2,
                  background: primaryColor,
                  height: "auto",
                  width: "auto",
                  color: "#ffffff",
                }}
              >
                <Typography
                  sx={{ ml: "5%", fontWeight: "bold", fontSize: "1.2em" }}
                >
                  Notifications{" "}
                </Typography>
              </Box>
              <Box sx={{ pb: 5, mt: 0 }}>
                {notifsData.map((not) => (
                  <MenuItem
                    sx={{
                      color: "#E66253",
                      background: not.seen === false ? "#E7E7E7" : "#ffffff",
                    }}
                    key={not.link}
                    onClick={() => {
                      handleCloseNotifMenu(not.link, not.type);
                    }}
                  >
                    <Grid container spacing={0} sx={{ mt: 1 }}>
                      <Grid xs={3}>
                        <img
                          src={getNotifsImage(not.type)}
                          width="60%"
                          height="90%"
                        />
                      </Grid>
                      <Grid xs={8}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            fontSize: {
                              xs: "0.5em",
                              sm: "1em",
                              wordWrap: "break-word", // Ensures long words break into the next line
                              whiteSpace: "normal", // Ensures normal wrapping behavior
                            },
                          }}
                        >
                          {not.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {
                              xs: "0.5em",
                              sm: "0.7em",
                              wordWrap: "break-word", // Ensures long words break into the next line
                              whiteSpace: "normal", // Ensures normal wrapping behavior
                            },
                          }}
                        >
                          {not.message}
                        </Typography>
                        <Typography sx={{ fontSize: "0.5em" }}>
                          {dayjs(not.date).format("MMMM DD, YYYY")}
                        </Typography>
                      </Grid>
                      <Grid xs={1} sx={{ mt: "3%" }}>
                        <img
                          src="/images/rightNotif.png"
                          width="60%"
                          height="40%"
                        />
                      </Grid>
                    </Grid>

                  
                  </MenuItem>
                ))}
              </Box>

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Button
                  variant="contained"
                  className="userButton"
                  onMouseEnter={(e) =>
                    (e.target.style.background = primaryColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = primaryColor)
                  }
                  sx={{
                    borderRadius: 4,
                    background: primaryColor,
                    mr: "5px ",
                    fontSize: {
                      xs: "0.4em",
                      sm: "0.5em",
                    },
                  }}
                >
                  WELCOME {loggedInUser.first_name}!
                </Button>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu(setting);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                  <Link to={navigate}></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
