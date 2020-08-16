import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/register";
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
            name="phoneNumber"
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
          {touched.phoneNumber && errors.phoneNumber && (
            <p>{errors.phoneNumber}</p>
          )}
        </Grid>
      </Form>
    </Paper>
  );
};

const phoneValidate = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormikWrap = withFormik({
  mapPropsToValues({ firstName, lastName, phoneNumber, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      phoneNumber: phoneNumber || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter your name"),
    lastName: Yup.string().required("Please enter your name"),
    phoneNumber: Yup.string()
      .required("Please enter your phone number")
      .matches(phoneValidate, "Phone number is not valid"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { props, resetForm }) {
    props.register(props, resetForm, values);
  }
})(RegisterForm);

const PatientRegisterForm = connect(
  null,
  { register }
)(FormikWrap);

export default PatientRegisterForm;
