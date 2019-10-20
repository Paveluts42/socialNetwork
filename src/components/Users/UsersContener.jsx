import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC } from "../../redax/users-reducer";
let mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};
let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};
const UsersContener = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
export default UsersContener;
