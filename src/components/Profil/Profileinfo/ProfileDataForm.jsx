import React from "react"
import { createField, Input, TextArea } from "../../common/formsControls/FormsControls"
import { reduxForm } from "redux-form";
import s from "./Profileinfo.module.css";
import style from "../../../components/common/formsControls/FormsControls.module.css"
const ProfileDataForm = ({ profile, handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><button onClick={() => { }}>save</button></div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <h1 >name</h1>{createField("Full name", "fullName", [], Input)}
            <div>
                <b>Looking for a job:</b>{profile.lookingForAJob ? "yes" : "no"}
                {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>my professional skills</b>{profile.lookingForAJobDeskription}
                {createField("y professional skills", "lookingForAJobDescription", [], TextArea)}
            </div>}

            <div>
                <b>AboutMe:</b>
                {createField("About me", "aboutMe", [], TextArea)}
            </div>
            <div>
                <b>Contact:</b>{Object.keys(profile.contacts).map(key => {
                    return (<div key={key} className={s.contact}>
                        <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
                        <div></div>

                    </div>)
                })}
            </div>

        </form>
    )
}
const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)
export default ProfileDataReduxForm