import Dialogs from "./Dialogs";
import { addMessing, updateNewMessText } from "./../../redax/dialogs-reducer";
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

const SuperDialogsContener = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

// const DialogsContener = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let addMess = () => {
//           store.dispatch(addMessing());
//         };
//         let messChange = change => {
//           let action = updateNewMessText(change);
//           store.dispatch(action);
//         };
//         return (
//           <Dialogs
//             updateNewMessText={messChange}
//             addMessing={addMess}
//             dialogsData={store.getState().dialogsPage.dialogsData}
//             messagesData={store.getState().dialogsPage.messagesData}
//             newMessageText={store.getState().dialogsPage.newMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
export default SuperDialogsContener;
