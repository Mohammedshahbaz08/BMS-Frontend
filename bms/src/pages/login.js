import React from "react";
import { useForm } from "react-hook-form";
import { Button, Link, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
function Login(props) {
  let { register, handleSubmit } = useForm();
  const toastpop = () => {
    toast("login successful");
  };
  return (
    <>
      <div className="login-div">
        <div className=" left-div">
          <h5 id="bms">&bull; Billing Management System</h5>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="welcome-head2">Welcome Back</h1>
            <p className="welcome-head6" >
              Welcome back! Please enter your details
            </p>
            <br></br>
            <TextField
              required
              className="input-fields"
              label="UserName"
              {...register("UserName", { required: true })}
            />
            <br></br>
            <TextField
              required
              className="input-fields"
              label="Password"
              type="password"
              {...register("Password", { required: true })}
            />
            <Link  padding={1} paddingLeft={15} id="forgot-link" href="#" color="inherit" underline="hover">
              {"Forgot password"}
            </Link>
            <Button
              id="login-btn"
              // size="small"
              type="submit"
              onClick={toastpop}
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
            <ToastContainer
              position="bottom-left"
              pauseOnHover={true}
              autoClose={600}
              theme="light"
              limit={1}
            />
            {/* <Button   id="google-btn" variant="contained">
              login with Google
            </Button> */}
            <h6>
              dont have an account?{" "}
              <Link
                id="sign-link"
                href="Signup"
                color="inherit"
                underline="hover"
              >
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
