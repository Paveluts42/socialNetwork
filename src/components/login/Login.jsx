import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/formsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redax/auth-reducer"
import { Redirect } from "react-router-dom";
import style from "../../components/common/formsControls/FormsControls.module.css"
import { createField } from "../../components/common/formsControls/FormsControls"

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} action="">
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            <div className="globolColorText">
                {createField("rememberMe", "rememberMe", null, Input, { type: "checkbox" }, "remember me")}
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div><button className={"button"}><svg className={"button__svg"}><rect className={"button__rect"}></rect></svg>Login</button></div>

        </form>)
}


const ReduxLoginForm = reduxForm({
    form: "login"
})(LoginForm);


const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (<div>
        <h1 className={"globolColorText"}>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>)
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login, })(Login)