import { Formik } from "formik";
import React, { Component } from "react";
import Input from "../Input/Input";

import * as Yup from "yup";

const INITIAL_VALUES = {
  email: "",
  password: "",
  password_confirmed: "",
};

const AuthSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 character")
    .max(20, "Maximum 20 character")
    .required("Password is required"),
  password_confirmed: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
export default class Auth extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => console.log(values)}
          validationSchema={AuthSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form
              className="add-border"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              {console.log(touched)}
              <Input name="email" value={values.email} error={errors.email} />

              <Input
                name="password"
                value={values.password}
                error={errors.password}
              />
              <Input
                name="password_confirmed"
                value={values.password_confirmed}
                error={errors.password_confirmed}
              />
              <button
                className=" my-2 btn btn-primary primary-accent"
                type="submit"
              >
                Register
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
