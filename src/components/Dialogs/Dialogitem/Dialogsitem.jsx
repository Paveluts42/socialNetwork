import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import userImg from "../../../content/img projekt/user.png"
const DialogItem = (props) => {
    return (<div className={s.item}>

        <img src={userImg} alt="" />
        <div className={s.text}>
            <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
        </div>
    </div>

    )
}


export default DialogItem;