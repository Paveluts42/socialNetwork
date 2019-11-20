import React from "react";
import s from "./Login.module.css"
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div><Field placeholder={"Login"} name={"login"} component={"input"} /></div>
            <div><Field placeholder={"Password"} name={"password"} component={"input"} /></div>
            <div className={"globolColorText"} ><Field name={"rememberMe"} component={"input"} type={"checkbox"} /> remember me</div>
            <div><button className={s.button}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>Login</button></div>
        </form>)
}


const ReduxLoginForm = reduxForm({
    form: "login"
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)

    }
    return (<div>
        <h1 className={"globolColorText"}>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>)
}

export default Login