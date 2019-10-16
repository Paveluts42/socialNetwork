import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {addMessing, updateNewMessText} from"./../../redax/dialogs-reducer"


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

    let addMess = () => {
        props.dispatch(addMessing());
    }
    let onMessChange = (change) => {
        let text = change.target.value;
        props.dispatch(updateNewMessText(text));
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
                                  value={props.state.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMess}>send</button>
                    </div>
                </div>


            </div>

        </div>
    )
};

export default Dialogs;