import React from "react"
import s from "./Frends.module.css"
import userImg from "../../../content/img projekt/user.png";
const Frends = (props) => {

    return (
        <div>
            <div className={s.fred}>
                <img className={s.gif} src={userImg} alt="" />
                {props.name}
            </div>
        </div>
    )
}
export default Frends