import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import {useNavigate, useLocation} from "react-router-dom"
import { Delete } from "@mui/icons-material";

const LoginPage = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()
  const {state} = useLocation()
  
  const checkInputs = () => {
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;

    if (!name || !email || !phone) {
      setToggle(true)
    } else {
      localStorage.setItem("userDetails", JSON.stringify([name, email, phone]));
      navigate("/")
    }
  };

  const deleteUser=()=>{
    localStorage.clear()  
  }

  useEffect(()=>{
    if(localStorage.getItem("userDetails")){
      // navigate("/", {replace:true})
    }
  },[])

  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        width: "1",
        alignItems: "center",
      }}
    >
      <Snackbar
        open={toggle}
        autoHideDuration={6000}
        anchorOrigin={{vertical:"top",horizontal:"right"}}
        onClose={() => setToggle(false)}
      >
        <Alert
          onClose={() => setToggle(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please enter the required details
        </Alert>
      </Snackbar>

      <Snackbar
        open={state?.message}
        autoHideDuration={1000}
        anchorOrigin={{vertical:"top",horizontal:"right"}}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
        >
          Please Login first!!
        </Alert>
      </Snackbar>

      <Grid item xs={11} sm={8} md={6} lg={4} xl={4}>
        <form>
          <Box
            sx={{
              backgroundColor: "#e0f2f1",
              borderRadius: "15px",
              textAlign: "center",
              paddingTop: "15px",
            }}
          >
            <Typography variant="h3" padding={2}>
              Sign In
              <Delete sx={{marginLeft:"30%", cursor:"pointer"}} onClick={deleteUser}></Delete>
            </Typography>
            <TextField
              sx={{ width: "75%", margin: "15px" }}
              inputRef={nameRef}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              required
            />

            <TextField
              sx={{ width: "75%", margin: "15px" }}
              inputRef={phoneRef}
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              type="number"
              required
            />
            <TextField
              sx={{ width: "75%", margin: "15px" }}
              inputRef={emailRef}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              required
            />
            <br />
            <Button sx={{ margin: "10px" }} onClick={checkInputs}>
              submit
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
