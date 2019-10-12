import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map((dialog) => {
            return (
                <DialogItem name={dialog.name} id={dialog.id}/>
            )
        }
    );


    let messagesElement = props.message.map((value) => {
            return (
                <Message message={value.message} id={value.id}/>
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