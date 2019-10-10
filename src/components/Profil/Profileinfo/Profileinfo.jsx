import React from "react"
import s from "./Profileinfo.module.css"
const Profileinfo = (props) => {
    return (
        <div>
            <div>
                <img src="http://papers.co/wallpaper/papers.co-an22-sunset-yellow-bird-minimal-29-wallpaper.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default Profileinfo