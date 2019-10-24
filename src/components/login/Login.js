import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { loginAction } from "../../actions";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "../../styles/muiFormStyles";
import { LoginButton } from "../../styles/muiStyledButtons";

const Login = ({ errors, touched, values, history }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} elevation={0}>
      <Form className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center">
          <div className={classes.labels}>
            <label htmlFor="email">Email</label>
          </div>
          <Field
            className={classes.inputs}
            component="input"
            type="text"
            name="email"
            autoComplete="false"
          />
          <div className={classes.labels}>
            <label htmlFor="password">Password</label>
          </div>
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
    </Box>
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
    // axiosWithAuth()
    //   .post(`/auth/login/${props.user}`, values)
    //   .then(res => {
    //     console.log(res);
    //      localStorage.setItem("token", res.data.token);
    //     props.user === "parents"
    //       ? props.history.push("/")
    //       : props.history.push("/login");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     resetForm();
    //     props.history.push("/user");
    //   });
    //console.log('here1');
    props.loginAction(props, values); //Need to await
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
