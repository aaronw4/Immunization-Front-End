import React, { useState } from "react";
import { connect } from "react-redux";
import { addChildAction } from "../../actions";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "../../styles/muiFormStyles";
import { LoginButton } from "../../styles/muiStyledButtons";

const AddChild = props => {
  const [child, setChild] = useState({});

  const handleInput = e => {
    setChild({ ...child, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await props.addChildAction(props.userId, child, props);
  }

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center">
          <label className={classes.labels} htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInput}
            value={child.firstName}
            className={classes.inputs}
          />
          <label className={classes.labels} htmlFor="firstName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInput}
            value={child.lastName}
            className={classes.inputs}
          />
          <label className={classes.labels} htmlFor="firstName">
            Date of Birth
          </label>
          <input
            type="text"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            onChange={handleInput}
            value={child.dateOfBirth}
            className={classes.inputs}
          />
          <label className={classes.labels} htmlFor="firstName">
            Social Security Number
          </label>
          <input
            type="text"
            name="socialSecuirtyNumber"
            placeholder="Social Security Number"
            onChange={handleInput}
            value={child.socialSecuirtyNumber}
            className={classes.inputs}
          />
          <LoginButton variant="contained" type="submit">
            submit
          </LoginButton>
        </Grid>
      </form>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.patientReducer.userId
  };
};

export default connect(
  mapStateToProps,
  { addChildAction }
)(AddChild);
