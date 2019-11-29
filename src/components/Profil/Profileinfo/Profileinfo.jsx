import React from "react"
import s from "./Profileinfo.module.css"
import Preloader from "../../common/Preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import UserPhoto from "../../../content/img projekt/user.png"
const Profileinfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>

            </div>
            <div className={s.descriptionBlock}>
                <img className={s.profilPhoto} alt="piple" src={profile.photos.large != null ? profile.photos.large : UserPhoto} />
                <h4 className="globolColorText">{profile.fullName}</h4>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <h1 className="globolColorText">{profile.aboutMe}</h1>
                <h6 className="globolColorText">{profile.contacts.vk}</h6>
            </div>
        </div>
    )
}

export default Profileinfo