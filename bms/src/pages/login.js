import React from "react";
import { Grid, Button,Link, TextField, Checkbox } from "@mui/material";
import "../index.css";
function login() {
  return <>
    <div className="carr">

      <div className=" left-div">

        <h5>&bull; BMS</h5>
        <h2>Welcome Back</h2>
        <h6>Welcome back! Please enter your details</h6>
        <TextField
          required
          id="outlined-basic"
          label="UserName"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Link href="#" color="inherit" underline="hover">
          {'Forgot password'}
        </Link>
        <Button variant="contained" color="success">
          Login
        </Button>
        <Button variant="contained" color="success">
          login with Google
        </Button>
        <h6>dont have an account? <Link href="#" color="inherit" underline="hover">
          {'"Sign up"'}
        </Link> </h6>

      </div>



      <div className="right-div">
        <h5>logo</h5>

      </div>


    </div>

  </>;
}

export default login;

// Regular method

/*

<TextField
            required
            id="outlined-basic"
            label="UserName"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Checkbox />
          <Button variant="contained" color="success">
            Login
          </Button>
*/
