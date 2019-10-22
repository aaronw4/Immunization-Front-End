import React from "react";
import { connect } from "react-redux";
import { loginParent, loginProvider } from "../../actions/loginType";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import { PatientButton, DoctorButton } from "../../styles/muiStyledButtons";
import { theme } from "../../styles/theme";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
    paddingTop: theme.spacing(5),
    background: "#fff",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    }
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
      width: "500px",
      background: "#C5C5C5"
    }
  }
});

const LoginChoose = ({ history, loginParent, loginProvider }) => {
  const classes = useStyles();

  const parent = e => {
    e.preventDefault();
    loginParent("parents");
    history.push("/parent-login");
  };

  const provider = e => {
    e.preventDefault();
    loginProvider("providers");
    history.push("/provider-login");
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid
        className={classes.container}
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography component="h1" variant="h4">
          I am a...
        </Typography>
        <PatientButton variant="contained" onClick={parent}>
          Patient
        </PatientButton>
        <DoctorButton variant="contained" onClick={provider}>
          Doctor
        </DoctorButton>
      </Grid>
    </Paper>
  );
};

export default connect(
  null,
  { loginParent, loginProvider }
)(LoginChoose);
