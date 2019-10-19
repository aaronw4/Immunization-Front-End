import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { loginAction } from "../../actions";
// import Header from '../base/Header'
// import Footer from '../base/Footer'

const Login = ({ errors, touched, values }) => {
  return (
    <div>
      {/* <Header /> */}
      <Form>
        <Field
          component="input"
          type="text"
          name="email"
          autoComplete="false"
        />
        <Field
          component="input"
          type="password"
          name="password"
          autoComplete="false"
        />
        <button type="submit">submit</button>
      </Form>
      {touched.email && errors.email && <p>{errors.email}</p>}
      {touched.password && errors.password && <p>{errors.password}</p>}
      {/* <Footer /> */}
    </div>
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
