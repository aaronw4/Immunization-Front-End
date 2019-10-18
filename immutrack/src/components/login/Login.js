import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
// import Header from '../base/Header'
// import Footer from '../base/Footer'

const Login = props => {
  console.log(props);
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

export default withFormik({
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
  handleSubmit(values, { resetForm, history }) {
    const user = localStorage.getItem("user");
    axiosWithAuth()
      .post(`/auth/login/${user}`, values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.removeItem("user");
      })
      .catch(err => {
        console.log(err);
        resetForm();
      });
  }
})(Login);
