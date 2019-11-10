
import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, setfollowingInProgress, getUsers } from "../../redax/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader";
import { Redirect } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

  }
  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize);

  }


  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />
    }
    return (<>
      {this.props.isFeaching ? <Preloader /> : null}
      < Users
        setfollowingInProgress={this.props.setfollowingInProgress}
        isFeaching={this.props.isFeaching}
        totalUsetsCount={this.props.totalUsetsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unFollow={this.props.unFollow}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.follow} />
    </>
    )
  }
}
let AuthUsersRedirect = withAuthRedirect(UsersComponent)

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsetsCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFeaching: state.usersPage.isFeaching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  };
};

const UsersContainer = connect(
  mapStateToProps,
  {
    follow, unFollow, setCurrentPage, setfollowingInProgress, getUsers,
  }

)(AuthUsersRedirect);
export default UsersContainer;
