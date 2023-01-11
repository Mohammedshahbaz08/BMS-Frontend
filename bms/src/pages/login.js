import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Button, Link, TextField, Checkbox } from "@mui/material";
import "../index.css";
function Login(props) {
  let { register, handleSubmit } = useForm();
  return (
    <>
      <div className="carr">
        <div className=" left-div">
          <h5 id="bms">&bull; Billing Management System</h5>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="welcome-head">Welcome Back</h2>
            <h6 className="welcome-head">
              Welcome back! Please enter your details
            </h6>
            <br></br>
            <TextField
              required
              id="outlined-basic"
              label="UserName"
              {...register("UserName", { required: true })}
            />
            <br></br>
            <TextField
              required
              id="outlined-basic"
              label="Password"
              type="password"
              {...register("Password", { required: true })}
            />
            <Link id="forgot-link" href="#" color="inherit" underline="hover">
              {"Forgot password"}
            </Link>
            <Button
              id="login-btn"
              type="submit"
              variant="contained"
              style={{
                maxWidth: "30px",
                maxHeight: "80px",
                minWidth: "206px",
                minHeight: "30px",
              }}
            >
              login
            </Button>
            <Button id="google-btn" variant="contained">
              login with Google
            </Button>
            <h6>
              dont have an account?{" "}
              <Link href="#" color="inherit" underline="hover">
                {'"Sign up"'}
              </Link>{" "}
            </h6>
          </form>
        </div>

        <div className="right-div">
          <h5>logo</h5>
        </div>
      </div>
    </>
  );
}

function onSubmit(values) {
  console.log(values);
}

export default Login;
