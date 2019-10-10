import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (<div className={s.item}>
            <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    return (<div className={s.message}>{props.message}</div>

    )
};


const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Nastya"},
        {id: 2, name: "Businka"},
        {id: 3, name: "Cotenochek"},
        {id: 4, name: "kebachok"},
        {id: 5, name: "bulocha"}
    ];
    let messagesData = [
        {id: 1, message: "hello"},
        {id: 2, message: "yo"},
        {id: 3, message: "hi"},
        {id: 3, message: "hi"},
        {id: 3, message: "hi"},
        {id: 3, message: "hi"},
        {id: 3, message: "hi"},

    ];

    let dialogsElements = dialogsData.map((dialog) => {
            return (
                <DialogItem name={dialog.name} id={dialog.id}/>
            )
        }
    );


    let messagesElement = messagesData.map((m) => {
            return (
                <Message message={m.message} id={m.id}/>
            )
        }
    )
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
};

export default Dialogs;