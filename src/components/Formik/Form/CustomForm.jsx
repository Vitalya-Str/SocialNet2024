import React from "react";
import s from "../Form/CustomForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CustomForm = ({ Login }) => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        Login(values.email, values.password);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <div className={s.container}>
            <h1>Login</h1>
            <label htmlFor="email">E-Mail</label>
            <Field className={s.input} type="email" name="email" />
            <ErrorMessage className={s.errors} name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field className={s.input} type="password" name="password" />
            <ErrorMessage className={s.errors} name="password" component="div" />
            <button className={s.button} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default CustomForm;
