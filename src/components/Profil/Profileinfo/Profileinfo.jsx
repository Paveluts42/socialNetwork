import React from "react"
import s from "./Profileinfo.module.css"
import Preloader from "../../common/Preloader"
import ProfileStatus from "./ProfileStatus"
import UserPhoto from "../../../content/img projekt/016f722ab179a9441086e259856049b0.jpg"
const Profileinfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>

            </div>
            <div className={s.descriptionBlock}>
                <img className={s.profilPhoto} alt="piple" src={props.profile.photos.large != null ? props.profile.photos.large : UserPhoto} />

                <h4 className="globolColorText">{props.profile.fullName}</h4>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <h1 className="globolColorText">{props.profile.aboutMe}</h1>
                <h6 className="globolColorText">{props.profile.contacts.vk}</h6>
            </div>
        </div>
    )
}

export default Profileinfo