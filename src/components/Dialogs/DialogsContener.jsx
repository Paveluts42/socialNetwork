import React from "react";
import Dialogs from "./Dialogs";
import { addMessing, updateNewMessText } from "./../../redax/dialogs-reducer"
import StoreContext from "../../storeContext";




const DialogsContener = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                debugger

                let addMess = () => {
                    store.dispatch(addMessing());
                }
                let messChange = (change) => {
                    let action = updateNewMessText(change);
                    store.dispatch(action);
                }
                return (
                    <Dialogs updateNewMessText={messChange} addMessing={addMess} dialogsData={store.getState().dialogsPage.dialogsData}
                        messagesData={store.getState().dialogsPage.messagesData} newMessageText={store.getState().dialogsPage.newMessageText} />
                )
            }
        }
        </StoreContext.Consumer>
    )
};
export default DialogsContener;
