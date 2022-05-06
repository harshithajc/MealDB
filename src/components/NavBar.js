import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import img1 from "../components/images/img1.png"
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

 function NavBar(props) {
   let navigate=useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }} style={{ color: "brown" }}>
      <AppBar position="static" style={{ background: "#23180d", height: "13vh" }}>
        <Toolbar >

          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <img src={img1} />
          </Typography>


          <div style={{ marginRight: "-10px", margin: "30px" }}>
            <Button color="secondary"
              variant='contained'
              size='large'
              onClick={()=>{
               navigate("/")
              }} 
               >
              Home
            </Button>
          </div>


          <div style={{ marginRight: "20px", margin: "30px" }}>
            <Button color="secondary"
              variant='contained'
              size='large'
              onClick={()=>{
               navigate("/newhome")
              }} 
               >
              Meals Category
            </Button>
          </div>

          <div style={{ marginRight: "20px" }}>
            <Button color="secondary"
              variant='contained'
              size='large'
              onClick={()=>{
                navigate("/reci")
               }} >
              Recipes</Button>
          </div>

          <div style={{ marginRight: "20px" }}>
            <Button color="secondary"
              variant='contained'
              size='large'
              onClick={()=>{
                navigate("/random")
               }} >Random Meal</Button>
          </div>

          <TextField color="primary"
            style={{ background: "white", width: "20vw" }}
            label="Search" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar
