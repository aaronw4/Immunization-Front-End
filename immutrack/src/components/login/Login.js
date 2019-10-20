import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { getParentAction } from "../../actions";
import {
  makeStyles,
  withStyles,
  Container,
  Button,
  Grid,
  Paper
} from "@material-ui/core";
import { theme } from "../../styles/theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "gray", // replace with background image
    fontFamily: theme.typography.fontFamily,
    fontSize: "15px"
  },
  separate: {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
    background: "#fff",
    [theme.breakpoints.between("sm", "md")]: {
      width: "80%"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%"
    }
  },
  content: {
    height: "100vh",
    width: "100%",
    padding: theme.spacing(4),
    background: "#fff",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
      width: "375px",
      background: "#C5C5C5"
    }
  },
  form: {
    width: "90%",
    margin: "0 auto"
  },
  spacer: {
    marginTop: theme.spacing(2)
  },
  inputs: {
    width: "100%",
    margin: "0 auto"
  },
  errors: {
    marginTop: theme.spacing(4),
    color: theme.palette.secondary.dark
  }
});

const StyledButton = withStyles({
  root: {
    height: "50px",
    width: "175px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: "15px",
    fontWeight: "500",
    "&:hover": {
      background: theme.palette.primary.light
    }
  }
})(Button);

const Login = ({ errors, touched, values, history }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid className={classes.separate} container justify="center">
        <Paper className={classes.content} elevation={4}>
          <Form className={classes.form}>
            <Grid container direction="column">
              <label htmlFor="email">Email</label>
              <Field
                className={classes.inputs}
                component="input"
                type="text"
                name="email"
                autoComplete="false"
              />
              <label className={classes.spacer} htmlFor="password">
                Password
              </label>
              <Field
                className={classes.inputs}
                component="input"
                type="password"
                name="password"
                autoComplete="false"
              />
              <StyledButton variant="contained" type="submit">
                sign in
              </StyledButton>
            </Grid>
          </Form>
          <Grid
            className={classes.errors}
            container
            direction="column"
            alignItems="center"
          >
            {touched.email && errors.email && <p>{errors.email}</p>}
            {touched.password && errors.password && <p>{errors.password}</p>}
          </Grid>
        </Paper>
      </Grid>
      <button type='button' onClick={() => history.push('/patient-home')}>Patient Home</button>
    </Container>
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
    props.getParentAction(props, values); //Need to await
  }
})(Login);

const mapStateToProps = state => ({
  user: state.loginReducer.user
});

const LoginForm = connect(
  mapStateToProps,
  { getParentAction }
)(HOCForm);

export default LoginForm;
