
import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, setfollowingInProgress, getAllUsers } from "../../redax/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";
import { Redirect } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFeaching, getFollowingInProgress, getIsAuth } from "../../redax/users-selectors"
class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getAllUsers(this.props.currentPage, this.props.pageSize);

  }
  onPageChanged = (pageNumber) => {

    this.props.getAllUsers(pageNumber, this.props.pageSize);

  }

  render() {
    console.log("dmms")
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

        follow={this.props.follow} id={this.props.users.id} />

    </>
    )
  }
}

let mapStateToProps = state => {
  console.log("fjksdjfk")
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsetsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFeaching: getIsFeaching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state)
  };
};

export default compose(connect(
  mapStateToProps,
  {
    follow, unFollow, setCurrentPage, setfollowingInProgress, getAllUsers,
  }

),
  withAuthRedirect)(UsersComponent);
