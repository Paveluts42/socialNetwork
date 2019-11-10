import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom"
const Dialogs = props => {
  let dialogsElements = props.dialogsData.map(d => {
    return <DialogItem key={d.id} name={d.name} id={d.id} />;
  });

  let messagesElement = props.dialogsMessages.map(m => {
    return <Message key={m.id} message={m.message} id={m.id} />;
  });

  let onAddMess = () => {
    props.addMessing();
  };
  let onMessChange = change => {
    let text = change.target.value;
    props.updateNewMessText(text);
  }
  if (!props.isAuth) {
    return <Redirect to={"/login"} />
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElement}</div>
        <div>
          <div>
            <textarea
              placeholder={"enter you message"}
              onChange={onMessChange}
              value={props.newMessageText}
            />
          </div>
          <div>
            <button className={s.button} onClick={onAddMess}><svg className={s.button__svg}> <rect className={s.button__rect}></rect></svg>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
