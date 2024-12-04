import { useEffect, useState, useContext } from "react";
import getNowPlayingItem from "./SpotifyApi";
import "./SpotifyPlayer.css";
import { AiOutlinePauseCircle } from "react-icons/ai";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import ColorContext from "./ColorContext"; // Import the context

function SpotifyPlayer(props) {
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
  const [result, setResult] = useState({});

  const [timeDiff, setTimeDiff] = useState("");
  function calculateTimeDifference(pastDate) {
    const pastDateObj = new Date(pastDate);
    const currentDate = new Date();

    const timeDifferenceMs = currentDate - pastDateObj;

    const seconds = Math.floor(timeDifferenceMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days   
   ago`;
    }
  }

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      console.log(results[0]);
      if (results[0].playedAt !== "2020") {
        console.log("slay", calculateTimeDifference(results[0].playedAt));
        calculateTimeDifference(results[0].playedAt);
        setTimeDiff(calculateTimeDifference(results[0].playedAt));
      }
    });
  }, []);

  return result.isPlaying ? (
    <Box sx={{ mt: "2%", color: color6 }}>
      <Typography
        sx={{
          fontFamily: font2,
          textAlign: "left",
          ml: "10%",
          fontWeight: "bold",
          fontSize: {
            xs: "0.5em",
            sm: "0.8em",
            md: "1.1em",
            lg: "1.3em",
            xl: "1.5em",
          },
        }}
      >
        {" "}
        Currently Playing
      </Typography>
      <a
        href={result.songUrl}
        target="_blank"
        id="trackartist"
        style={{ color: color6 }}
      >
        <Box sx={{ border: 2, borderRadius: 4, mr: "7%", ml: "7%" }}>
          <Grid container spacing={2} sx={{ mt: "4%", mb: "2%" }}>
            <Grid xs={4}>
              {" "}
              <img width="55%" src={result.albumImageUrl}></img>
            </Grid>
            <Grid xs={5}>
              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",
                  whiteSpace: "wrap",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                  fontWeight: "bold",
                }}
              >
                {" "}
                {result.title}{" "}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                }}
              >
                {" "}
                {result.artist}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  ml: "0%",
                  textAlign: "left",
                  fontStyle: "italic",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.6em",
                    md: "1.1em",
                    lg: "1.1em",
                    xl: "1.1em",
                  },
                }}
              >
                {result.album}
              </Typography>
            </Grid>
            <Grid xs={3} sx={{ mt: "0%" }}>
              <img
                alt="soundbar"
                width="50%"
                src="./images/soundbar.gif"
                title="Now Listening"
              />
              <Typography
                sx={{
                  ml: "20%",
                  fontFamily: font2,
                  textAlign: "left",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1.1em",
                    lg: "1.1em",
                    xl: "1.1em",
                  },
                }}
              >
                {Math.floor(Math.floor(result.timePlayed / 1000) / 60)} :
                {Math.floor(result.timePlayed / 1000) % 60} /{" "}
                {Math.floor(Math.floor(result.timeTotal / 1000) / 60)} :
                {Math.floor(result.timeTotal / 1000) % 60}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </a>
    </Box>
  ) : // <div className="nowplayingcard">
  //   <div className="nowplayingcontainer-inner">
  //     <img id="trackart" src={result.albumImageUrl}></img>
  //     <div className="trackInfo">
  //       <a id="tracktitle">{result.title}

  //       </a>
  //       <img alt='soundbar' src='./images/soundbar.gif' title='Now Listening'/>
  //       <a href= {result.songUrl} target = "_blank" id="trackartist">
  //         {result.artist} <br/>

  //         {Math.floor(Math.floor(result.timePlayed/1000)/60)} :
  //         {(Math.floor(result.timePlayed/1000)) % 60} <br/>

  //       /
  //       {Math.floor(Math.floor(result.timeTotal/1000)/60)} :
  //         {(Math.floor(result.timeTotal/1000)) % 60} <br/>

  //       </a>
  //     </div>
  //   </div>
  // </div>
  result.isPlaying === false ? (
    <Box sx={{ mt: "2%", color: color6 }}>
      <Typography
        sx={{
          fontFamily: font2,
          textAlign: "left",
          ml: "10%",
          fontWeight: "bold",
          fontSize: {
            xs: "0.5em",
            sm: "0.8em",
            md: "1.1em",
            lg: "1.3em",
            xl: "1.5em",
          },
        }}
      >
        {" "}
        Currently Playing
      </Typography>
      <a
        href={result.songUrl}
        target="_blank"
        id="trackartist"
        style={{ color: color6 }}
      >
        <Box sx={{ border: 2, borderRadius: 4, mr: "7%", ml: "7%" }}>
          <Grid container spacing={2} sx={{ mt: "2%" }}>
            <Grid xs={4}>
              {" "}
              <img width="55%" src={result.albumImageUrl}></img>
            </Grid>
            <Grid xs={5}>
              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",
                  whiteSpace: "wrap",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                  fontWeight: "bold",
                }}
              >
                {" "}
                {result.title}{" "}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                }}
              >
                {" "}
                {result.artist}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  ml: "0%",
                  textAlign: "left",
                  fontStyle: "italic",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1.1em",
                    lg: "1.1em",
                    xl: "1.1em",
                  },
                }}
              >
                {result.album}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                }}
              >
                {Math.floor(Math.floor(result.timePlayed / 1000) / 60)} :
                {Math.floor(result.timePlayed / 1000) % 60} /{" "}
                {Math.floor(Math.floor(result.timeTotal / 1000) / 60)} :
                {Math.floor(result.timeTotal / 1000) % 60}
              </Typography>
            </Grid>
            <Grid xs={3} sx={{ mt: "5%" }}>
              <AiOutlinePauseCircle size={65} />
            </Grid>
          </Grid>
        </Box>
      </a>
    </Box>
  ) : (
    <Box sx={{ mt: "0%", color: color6 }}>
      <Typography
        sx={{
          fontFamily: font2,
          textAlign: "left",
          ml: "10%",
          fontWeight: "bold",
          fontSize: {
            xs: "0.5em",
            sm: "0.8em",
            md: "1.1em",
            lg: "1.3em",
            xl: "1.5em",
          },
        }}
      >
        {" "}
        Recently Played
      </Typography>
      <a
        href={result.songUrl}
        target="_blank"
        id="trackartist"
        style={{ color: color6 }}
      >
        <Box sx={{ border: 2, borderRadius: 4, mr: "7%", ml: "7%" }}>
          <Grid container spacing={2} sx={{ mt: "3%" }}>
            <Grid xs={4}>
              {" "}
              <img width="55%" src={result.albumImageUrl}></img>
            </Grid>
            <Grid xs={5} sx={{ mt: "2%" }}>
              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",
                  whiteSpace: "wrap",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                  fontWeight: "bold",
                }}
              >
                {" "}
                {result.title}{" "}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "left",

                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                }}
              >
                {" "}
                {result.artist}
              </Typography>

              <Typography
                sx={{
                  fontFamily: font2,
                  ml: "0%",
                  textAlign: "left",
                  fontStyle: "italic",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                }}
              >
                {result.album}
              </Typography>

              {/* <Typography sx = {{fontFamily: font2,textAlign: "left", fontSize: "1.1em"}}> 
        {Math.floor(Math.floor(result.timePlayed/1000)/60)} : 
           {(Math.floor(result.timePlayed/1000)) % 60} 
           {" "}
         / {" "} {" "}
         {Math.floor(Math.floor(result.timeTotal/1000)/60)} : 
           {(Math.floor(result.timeTotal/1000)) % 60} <br/>
           </Typography> */}
            </Grid>
            <Grid xs={3} sx={{ mt: "2%" }}>
              <Typography
                sx={{
                  fontFamily: font2,
                  textAlign: "center",
                  whiteSpace: "wrap",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "1em",
                    lg: "1em",
                    xl: "1em",
                  },
                  fontWeight: "bold",
                }}
              >
                {timeDiff}
              </Typography>

              <AiOutlinePauseCircle size={"50%"} />
            </Grid>
          </Grid>
        </Box>
      </a>
    </Box>
    // <AiOutlinePauseCircle size={40} />
    //   <div className="nowplayingcard">
    //      Recently Played
    //   <div className="nowplayingcontainer-inner">
    //     <img id="trackart" src={result.albumImageUrl}></img>
    //     <div className="trackInfo">
    //       <a id="tracktitle">{result.title}
    //       <AiOutlinePauseCircle size={40} />
    //       </a>

    //       <a href= {result.songUrl} id="trackartist">

    //       {result.artist}
    //       </a>
    //       <AiOutlinePauseCircle size={40} />
    //       {timeDiff}

    //     </div>
    //   </div>
    // </div>
  );
}

export default SpotifyPlayer;
