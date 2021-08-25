import {
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { SyntheticEvent, useState } from "react";
import { Register } from "../service/apiRegister";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: 300,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const RegisterPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await Register({
      email: email,
      password: password,
      username: username,
      
    });
    
    
    if (res.email || res.password || res.username) {
      Toast.fire({
        icon: "success",
        title: "success",
      });
    } else{
      Toast.fire({
        icon: "error",
        title: "Fail",
      });
      
    }
    
  };

  return (
    <form onSubmit={submit}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>

          <TextField
            label="Email"
            margin="normal"
            id="email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Username"
            margin="normal"
            id="username"
            variant="outlined"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            id="password"
            label="Password"
            margin="normal"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />

          <Grid item xs={9}>
            <Button variant="contained" color="secondary" onClick={submit}>
              Submit
            </Button>
          </Grid>
        </div>
      </Container>
    </form>
  );
};

export default RegisterPage;
