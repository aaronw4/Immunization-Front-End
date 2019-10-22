import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { theme } from "../../styles/theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(2),
    background: "#fff",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    }
  }
});

const Header = ({ location, history }) => {
  const classes = useStyles();

  if (location.pathname === "/") {
    return (
      <Grid
        component="header"
        className={classes.root}
        container
        alignItems="center"
        justify="center"
      >
        <Typography component="header" variant="h5">
          ImmuTrack
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="space-between"
    >
      <ArrowBack
        onClick={history.goBack}
        style={{ fontSize: "30px", color: "#000" }}
      />
      <Typography component="header" variant="h5">
        ImmuTrack
      </Typography>
      <ArrowBack style={{ visibility: "hidden" }} />
    </Grid>
  );
};

export default withRouter(Header);
