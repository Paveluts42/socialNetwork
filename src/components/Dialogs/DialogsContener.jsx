import React from "react";
import Dialogs from "./Dialogs";
import {addMessing, updateNewMessText} from "./../../redax/dialogs-reducer"


const DialogsContener = (props) => {

    let state = props.store.dialogsPage;
    let addMess = () => {
        props.dispatch(addMessing());
    }
    let messChange = (change) => {
        let action = updateNewMessText(change);
        props.dispatch(action);
    }
    return (
        <Dialogs updateNewMessText={messChange} addMessing={addMess} dialogsData={state.dialogsData}
                 messagesData={state.messagesData} newMessageText={state.newMessageText}/>
    )
}
export default DialogsContener;