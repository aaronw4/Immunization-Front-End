import React from "react";
import { connect } from "react-redux";
import { loginParent, loginProvider } from "../../actions/loginType";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../styles/muiFormStyles";
import { PatientButton, DoctorButton } from "../../styles/muiStyledButtons";

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
