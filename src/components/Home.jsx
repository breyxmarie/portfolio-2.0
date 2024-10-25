import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Home() {

  return (
  <div  className="content" style={{
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f8f5e0', // Replace with the color you need
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  }}>
 <Grid container spacing = {2}>
 <Grid md = {3}>
 <img style = {{borderRadius: 10, marginTop: "100%"}} src = "images/flowerhome.png" width = "35%" height = "45%"/>
 </Grid>
 <Grid md = {6}>
 <Box sx = {{borderRadius: 5, color: "#000000"}}>
  <Typography>hello</Typography>
  <Typography>i'm</Typography> <Typography>aubrey</Typography>
        <img style = {{borderRadius: 10, marginTop: "13%"}} src = "images/homeImage.jpg" 
        width = "60%" height = "40%"/>
        <Typography>a software developer</Typography>
    </Box>
 </Grid>
 <Grid md = {3}>
 <Box>
  <Button>about me</Button>
 </Box>
 </Grid>
 </Grid>
  </div>
  );
}

export default Home;
