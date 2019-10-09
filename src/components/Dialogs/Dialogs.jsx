import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.item}>
                    businka
                </div>
                <div className={s.item}>
                    businka
                </div>
                <div className={s.item}>
                    businka
                </div>
                <div className={s.item}>
                    businka
                </div>
                <div className={s.item}>
                    businka
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how are you?</div>
                <div className={s.message}>yop</div>
            </div>


        </div>

    )
}

export default Dialogs;