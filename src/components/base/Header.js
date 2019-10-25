import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { theme } from "../../styles/theme";
import { LogoutButton } from "../../styles/muiStyledButtons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(2),
    background: "#fff",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    }
  }
});

const Header = ({ location, history }) => {
  const classes = useStyles();
  const token = localStorage.getItem("token");

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };

  const login = e => {
    e.preventDefault();
    history.push("/login");
  };

  if (token) {
    return (
      <Grid
        className={classes.root}
        container
        alignItems="center"
        justify="center"
      >
        <Grid item xs={2}>
          <ArrowBack
            onClick={history.goBack}
            style={{ fontSize: "30px", color: "#000" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography component="header" variant="h5">
            ImmuTrack
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <LogoutButton onClick={logout}>Sign Out</LogoutButton>
        </Grid>
      </Grid>
    );
  } else if (!token && location.pathname === "/") {
    return (
      <Grid
        component="header"
        className={classes.root}
        container
        alignItems="center"
        justify="center"
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography component="header" variant="h5">
            ImmuTrack
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <LogoutButton onClick={login}>Sign In</LogoutButton>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="center"
    >
      <Grid item xs={2}>
        <ArrowBack
          onClick={history.goBack}
          style={{ fontSize: "30px", color: "#000" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography component="header" variant="h5">
          ImmuTrack
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default withRouter(Header);
