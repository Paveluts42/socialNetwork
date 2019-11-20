import {
  addPostActionCreator
} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    posted: state.profilePage.posted
  };
};
let mapDispatchToProps = dispatch => {
  return {

    AddPost: (posted) => {
      dispatch(addPostActionCreator(posted));
    }
  };
};
const MypostsContener = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MypostsContener;
