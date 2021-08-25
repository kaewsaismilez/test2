import React, { SyntheticEvent, useReducer, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Login } from "../service/apiLogin";
import Swal from "sweetalert2";
import { getRole } from "../service/apiRole";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const login = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await Login({ email: email, password: password });
    localStorage.setItem("userrole_token", res.access_token);
    localStorage.setItem("roletoken", res.role);

    if (res.access_token) {
      Toast.fire({
        icon: "success",
        title: "Login success",
      });

      Role();
    } else {
      Toast.fire({
        icon: "error",
        title: "Login Fail",
      });
    }

    console.log(res);
  };

  const Role = async () => {
    const token = localStorage.getItem("userrole_token");
    const res = await getRole({ accessToken: token });
    if (res.role === "admin") {
      history.push("/menuhomeadmin");
    } else {
      history.push("/menuhomeuser");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Grid item xs={9}>
          <Button variant="contained" color="primary" onClick={login}>
            Log in
          </Button>
        </Grid>
      </div>
    </Container>
  );
};

export default LoginPage;
