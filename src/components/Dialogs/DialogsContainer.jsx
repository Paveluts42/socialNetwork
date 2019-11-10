import Dialogs from "./Dialogs";
import { addMessing, updateNewMessText } from "../../redax/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux";


let mapStateToProps = state => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    dialogsMessages: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,

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


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect)(Dialogs);
