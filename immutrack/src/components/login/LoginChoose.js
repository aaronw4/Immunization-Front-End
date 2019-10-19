import React from "react";
import { connect } from "react-redux";
import { loginParent, loginProvider } from "../../actions/loginType";
import {
  makeStyles,
  withStyles,
  Container,
  Button,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import { theme } from "../../styles/theme";

const useStyles = makeStyles({
  root: {
    background: "gray" // replace with background image
  },
  separate: {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%"
    }
  },
  content: {
    height: "100vh",
    margin: "0 auto",
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      height: "350px",
      width: "450px",
      background: "#C5C5C5"
    }
  }
});

const PatientButton = withStyles({
  root: {
    height: "75px",
    width: "250px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: "20px",
    fontWeight: "700",
    "&:hover": {
      background: theme.palette.primary.light
    }
  }
})(Button);

const DoctorButton = withStyles({
  root: {
    height: "75px",
    width: "250px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: "20px",
    fontWeight: "700",
    "&:hover": {
      background: theme.palette.secondary.light
    }
  }
})(Button);

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
    <Container className={classes.root} maxWidth={false}>
      <Paper className={classes.separate} elevation={0}>
        <Paper elevation={4} className={classes.content}>
          <Grid
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
      </Paper>
    </Container>
  );
};

export default connect(
  null,
  { loginParent, loginProvider }
)(LoginChoose);
