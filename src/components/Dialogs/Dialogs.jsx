import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map((dialog) => {
            return (
                <DialogItem name={dialog.name} id={dialog.id}/>
            )
        }
    );


    let messagesElement = props.state.messagesData.map((value) => {
            return (
                <Message message={value.message} id={value.id}/>
            )
        }
    )
    let sends=React.createRef()
    let klic=()=>{
        let text=sends.current.value;
        props.klik(text);
        sends.current.value=""
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <button onClick={klic}>send</button>
                <textarea ref={sends}></textarea>
            </div>

        </div>
    )
};

export default Dialogs;