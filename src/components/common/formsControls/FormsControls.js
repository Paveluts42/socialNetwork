import React from "react"
import s from "./FormsControls.module.css"
import { Field } from "redux-form";
const FormControl = ({ meta: { touched, error }, children }) => {
    const showError = touched && error;
    return (
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            <div>
                {children}
            </div>
            {showError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, ...restProps } = props
    return (

        < FormControl {...props}> <textarea {...input}{...restProps} /></FormControl >
    )
}
export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}><input {...input}{...restProps} /></FormControl>
    )
}
export const createField = (placeholder, name, validators, component, props = {}, text = '') => <div><Field placeholder={placeholder}
    name={name} validate={validators}
    component={component} {...props} />{text}
</div>
