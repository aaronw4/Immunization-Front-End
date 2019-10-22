import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import PhoneInput from "react-phone-number-input/basic-input";
import * as Yup from "yup";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { LoginButton } from "../../styles/muiStyledButtons";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
    paddingTop: theme.spacing(5),
    background: "#fff",
    fontFamily: theme.typography.fontFamily,
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    }
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      width: "400px",
      background: "#C5C5C5"
    }
  },
  inputs: {
    height: "35px",
    width: "300px",
    margin: "0 auto",
    "&:not(:first-child)": {
      marginTop: "30px"
    }
  },
  errors: {
    marginTop: theme.spacing(4),
    color: theme.palette.secondary.dark
  }
});

const Phone = ({ field, form, ...props }) => {
  const classes = useStyles();
  return (
    <PhoneInput
      placeholder="Phone Number"
      className={classes.inputs}
      country="US"
      value=""
      onChange={value => {
        if (!form.touched[field.name]) form.setFieldTouched(field.name);
        form.setFieldValue(field.name, value);
      }}
    />
  );
};

const RegisterForm = ({ errors, touched, values }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Form className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Field
            placeholder="First Name"
            className={classes.inputs}
            type="text"
            name="firstName"
            autoComplete="false"
          />
          <Field
            placeholder="Last Name"
            className={classes.inputs}
            type="text"
            name="lastName"
            autoComplete="false"
          />
          <Field
            placeholder="Email"
            className={classes.inputs}
            type="text"
            name="email"
            autoComplete="false"
          />
          <Field
            placeholder="Password"
            className={classes.inputs}
            type="password"
            name="password"
            autoComplete="false"
          />
          <Field
            name="phone"
            component={Phone}
            // autoComplete="false"
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
