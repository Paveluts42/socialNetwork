import React from "react"
import s from "./Profileinfo.module.css"
import Preloader from "../../common/preloader"
const Profileinfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>

            </div>
            <div className={s.descriptionBlock}>
                <img className={s.profilPhoto} src={props.profile.photos.large} />
                <h4>{props.profile.fullName}</h4>

                <h1>{props.profile.aboutMe}</h1>
                <h6>{props.profile.contacts.vk}</h6>
            </div>
        </div>
    )
}
export default Profileinfo