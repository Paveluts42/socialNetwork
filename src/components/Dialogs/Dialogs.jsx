import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map((dialog) => {

            return (
                <DialogItem name={dialog.name} id={dialog.id}/>
            )
        }
    );


    let messagesElement = props.messagesData.map((value) => {
            return (
                <Message message={value.message} id={value.id}/>
            )
        }
    )

    let onAddMess = () => {
        props.addMessing();
    }
    let onMessChange = (change) => {
        let text = change.target.value;
        props.updateNewMessText(text);
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElement}</div>
                <div>
                    <div>
                        <textarea placeholder={"enter you message"} onChange={onMessChange}
                                  value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onAddMess}>send</button>
                    </div>
                </div>


            </div>

        </div>
    )
};

export default Dialogs;