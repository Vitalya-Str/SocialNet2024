import React, {FC} from "react";
import s from "../Form/CustomForm.module.css";
import {Formik, Form, Field, ErrorMessage, FormikErrors} from "formik";
import {loginType} from "../../../redux/authReducer";

interface InitialValues {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

interface PropsType {
    Login: (values:loginType) => void
    captchaUrl: string | null
}
const CustomForm:FC<PropsType> = ({Login, captchaUrl}) => {
    const initialValues:InitialValues = {email: "", password: "", rememberMe: false, captcha: null}

    return <div>
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                const errors:FormikErrors<InitialValues> = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                }
                return errors;
            }}
            onSubmit={(values:loginType) => {
                Login(values);
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    <div className={s.container}>
                        <h1>Login</h1>
                        <label htmlFor="email">E-Mail</label>
                        <Field className={s.input} type="email" name="email"/>
                        <ErrorMessage className={s.errors} name="email" component="div"/>
                        <label htmlFor="password">Password</label>
                        <Field className={s.input} type="password" name="password"/>
                        <ErrorMessage className={s.errors} name="password" component="div"/>
                        <div><Field className={s.input} type="checkbox" name="rememberMe"/> remember Me</div>
                        <div> {captchaUrl && <img src={captchaUrl} alt="captcha"/>}  </div>
                        <div> {captchaUrl && <Field className={s.input} type='text' name='captcha'/>} </div>
                        <button className={s.button} type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}

export default CustomForm;
