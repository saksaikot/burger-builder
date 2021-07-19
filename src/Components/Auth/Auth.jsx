import { Formik } from "formik";
import React, { Component } from "react";
import Input from "../Input/Input";

import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { auth } from "../../redux/authActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  auth: (user) => dispatch(auth(user)),
});

const INITIAL_VALUES = {
  email: "",
  password: "",
  password_confirmation: "",
  isLogin: true,
};

const AuthSchema = Yup.object().shape({
  isLogin: Yup.boolean(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 character")
    .max(20, "Maximum 20 character")
    .required("Password is required"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .when("isLogin", {
      is: false,
      then: Yup.string().required("Password confirmation is required"),
    }),
});
class Auth extends Component {
  state = { isLogin: true };
  componentDidMount() {
    const isLogin = this.props.match.path === "/login" ? true : false;
    this.setState({ isLogin });
  }

  handleSubmit = (values) => {
    // console.log(values);

    this.props.auth({ ...values, isLogin: this.state.isLogin });
  };

  render() {
    // console.log(this.props);
    const { isLogin } = this.state;
    INITIAL_VALUES.isLogin = isLogin;
    return (
      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={this.handleSubmit}
          validationSchema={AuthSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form
              className="add-border"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <div>
                {isLogin ? (
                  <div>
                    Don't have account register{" "}
                    <NavLink to="/register">here</NavLink>
                  </div>
                ) : (
                  <div>
                    Already have account login{" "}
                    <NavLink to="/login">here</NavLink>
                  </div>
                )}
              </div>
              {/* {console.log(errors)} */}
              <Input name="email" value={values.email} error={errors.email} />

              <Input
                name="password"
                value={values.password}
                error={errors.password}
              />
              {!isLogin ? (
                <Input
                  name="password_confirmation"
                  value={values.password_confirmation}
                  error={errors.password_confirmation}
                />
              ) : null}

              <button
                className=" my-2 btn btn-primary primary-accent"
                type="submit"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Auth);
