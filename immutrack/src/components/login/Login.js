import React from "react";
import { connect } from "react-redux";
import { connect as reduxConnect}  from 'react-redux';
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { loginAction } from '../../actions';
// import Header from '../base/Header'
// import Footer from '../base/Footer'

const Login = ({ user }) => {
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
    // email: Yup.string().required(),
    // password: Yup.string().required()
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
     props.loginAction(props.user, values); //Need to await
    setTimeout(() => {props.history.push('/patient-home')}, 1000) ;
  }
})(Login);

const mapStateToProps = state => ({
  user: state.loginReducer.user
});

const LoginForm = connect(mapStateToProps)(HOCForm);

export default reduxConnect(null, {loginAction})(LoginForm);
