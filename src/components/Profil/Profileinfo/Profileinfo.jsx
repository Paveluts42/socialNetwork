import React from "react"
import s from "./Profileinfo.module.css"
import Preloader from "../../common/preloader"
const Profileinfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (
        <div>
            <div>
                <img src="http://papers.co/wallpaper/papers.co-an22-sunset-yellow-bird-minimal-29-wallpaper.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava+description
            </div>
        </div>
    )
}
export default Profileinfo