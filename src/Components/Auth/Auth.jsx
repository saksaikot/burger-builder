import { Formik } from "formik";
import React, { Component } from "react";
import Input from "../Input/Input";

const INITIAL_VALUES = {
  name: "",
  password: "",
  password_confirmed: "",
};

export default class Auth extends Component {
  render() {
    const form = ({ values, handleChange, handleSubmit }) => (
      <form className="add-border" onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="password" />
        <Input name="password_confirmed" />
        <button className=" my-2 btn btn-primary primary-accent">
          Register
        </button>
      </form>
    );
    return (
      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              className="add-border"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <Input name="name" value={values.name} />
              <Input name="password" value={values.password} />
              <Input
                name="password_confirmed"
                value={values.password_confirmed}
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

        {console.log(this.props)}
      </div>
    );
  }
}
