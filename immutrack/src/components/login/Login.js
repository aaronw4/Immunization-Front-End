import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { loginAction } from "../../actions";
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
    margin: "0 auto"
  },
  errors: {
    marginTop: theme.spacing(4),
    color: theme.palette.secondary.dark
  }
});

const Login = ({ errors, touched, values }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Form className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center">
          <label htmlFor="email">Email</label>
          <Field
            className={classes.inputs}
            component="input"
            type="text"
            name="email"
            autoComplete="false"
          />
          <label htmlFor="password" style={{ marginTop: "30px" }}>
            Password
          </label>
          <Field
            className={classes.inputs}
            component="input"
            type="password"
            name="password"
            autoComplete="false"
          />
          <LoginButton variant="contained" type="submit">
            sign in
          </LoginButton>
        </Grid>
        <Grid
          className={classes.errors}
          container
          direction="column"
          alignItems="center"
        >
          {touched.email && errors.email && <p>{errors.email}</p>}
          {touched.password && errors.password && <p>{errors.password}</p>}
        </Grid>
      </Form>
    </Paper>
  );
};

const HOCForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { resetForm, props }) {
    props.loginAction(props.user, values);
  }
})(Login);

const mapStateToProps = state => ({
  user: state.loginReducer.user
});

const LoginForm = connect(
  mapStateToProps,
  { loginAction }
)(HOCForm);

export default LoginForm;
