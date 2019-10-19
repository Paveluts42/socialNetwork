import {
  addPostActionCreator,
  updateNewPostText
} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      let action = updateNewPostText(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};
const MypostsContener = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MypostsContener;
