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
    let newMessageElement = React.createRef()
    let addMess = () => {
        props.dispatch({type: "ADD-MESS"});
    }
    let onMessChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: "UPDATE-NEW-MESS-TEXT", newMess: text});
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}

                <textarea ref={newMessageElement} onChange={onMessChange} value={props.state.newMessageText}/>
                <button onClick={addMess}>send</button>
            </div>

        </div>
    )
};

export default Dialogs;