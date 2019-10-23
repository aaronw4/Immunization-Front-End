import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Grid, Paper } from "@material-ui/core";
import { LoginButton } from "../../styles/muiStyledButtons";
import { useStyles } from "../../styles/muiFormStyles";

const RegisterForm = ({ errors, touched, values }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Form className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center">
          <div className={classes.labels}>
            <label htmlFor="firstName">First Name</label>
          </div>
          <Field
            className={classes.inputs}
            type="text"
            name="firstName"
            autoComplete="false"
          />
          <div className={classes.labels}>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <Field
            className={classes.inputs}
            type="text"
            name="lastName"
            autoComplete="false"
          />
          <div className={classes.labels}>
            <label htmlFor="email">Email</label>
          </div>
          <Field
            className={classes.inputs}
            type="text"
            name="email"
            autoComplete="false"
          />
          <div className={classes.labels}>
            <label htmlFor="password">Password</label>
          </div>
          <Field
            className={classes.inputs}
            type="password"
            name="password"
            autoComplete="false"
          />
          <div className={classes.labels}>
            <label htmlFor="phone">Phone Number</label>
          </div>
          <Field
            className={classes.inputs}
            type="text"
            name="phone"
            autoComplete="false"
          />
          <LoginButton variant="contained" type="submit">
            sign up
          </LoginButton>
        </Grid>
        <Grid
          className={classes.errors}
          container
          direction="column"
          alignItems="center"
        >
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          {touched.email && errors.email && <p>{errors.email}</p>}
          {touched.password && errors.password && <p>{errors.password}</p>}
          {touched.phone && errors.phone && <p>{errors.phone}</p>}
        </Grid>
      </Form>
    </Paper>
  );
};

const FormikWrap = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, phone }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
      phone: phone || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter your name"),
    lastName: Yup.string().required("Please enter your name"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    phone: Yup.string().required("Please enter your phone number")
  }),
  handleSubmit(values, { props }) {}
})(RegisterForm);

const mapStateToProps = state => ({});

const PatientRegisterForm = connect(
  mapStateToProps,
  {}
)(FormikWrap);

export default PatientRegisterForm;
