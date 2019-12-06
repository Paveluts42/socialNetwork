import React, { useState } from "react"
import UserPhoto from "../../../content/img projekt/user.png"
import Preloader from "../../common/Preloader"
import s from "./Profileinfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm"
const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader />
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })


    }
    return (
        <div className="globolColorText">
            <div className={s.descriptionBlock}>
                <img className={s.profilPhoto} alt="piple" src={profile.photos.large != null ? profile.photos.large : UserPhoto} />
                {isOwner && <input type={"file"} onChange={mainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
    )
}
const Contacts = ({ contactTitle, contactValue }) => {
    return (<div style={{ marginLeft: "50px" }}><b>{contactTitle}</b>:{contactValue}</div>)

}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <h1 >{profile.fullName}</h1>
            <div>
                <b>Looking for a job:</b>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && <div>
                <b>my professional skills</b>{profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>Looking for a job:</b>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>AboutMe:</b>{profile.aboutMe}
            </div>
            <div>
                <b>Contact:</b>{Object.keys(profile.contacts).map(key => {
                    return <Contacts contactTitle={key} key={key}
                        contactValue={profile.contacts[key]} />
                })}
            </div>
            <h5>{profile.userId}</h5>
        </div>
    )
}

export default Profileinfo