import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (<div className={s.item}>

            <img  src="https://i.pinimg.com/originals/01/6f/72/016f722ab179a9441086e259856049b0.jpg" alt=""/>
            <div className={s.text}>
                <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
            </div>
        </div>

    )
}


export default DialogItem;