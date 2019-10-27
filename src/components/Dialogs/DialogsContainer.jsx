import Dialogs from "./Dialogs";
import { addMessing, updateNewMessText } from "../../redax/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    dialogsMessages: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessText: change => {
      dispatch(updateNewMessText(change));
    },
    addMessing: () => {
      dispatch(addMessing());
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
