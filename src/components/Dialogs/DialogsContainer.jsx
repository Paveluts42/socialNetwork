import Dialogs from "./Dialogs";
import { addMessing, updateNewMessText } from "../../redax/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"


let mapStateToProps = state => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    dialogsMessages: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
