
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFeaching, setfollowingInProgress, getUsers } from "../../redax/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader";
import { getUsersChange } from "../../api/Api"


class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.setIsFeaching(true);
    // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.setIsFeaching(false);

    //   this.props.setUsers(data.items);

    //   this.props.setTotalUsersCount(data.totalCount);
    // })
  }
  onPageChanged = (pageNumber) => {
    this.props.setIsFeaching(true);

    this.props.setCurrentPage(pageNumber);
    getUsersChange(pageNumber, this.props.pageSize).then(data => {

      this.props.setIsFeaching(false);
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }


  render() {
    return (<>
      {this.props.isFeaching ? <Preloader /> : null}
      < Users key={this.props.follow.id}
        setfollowingInProgress={this.props.setfollowingInProgress}
        isFeaching={this.props.isFeaching}
        totalUsetsCount={this.props.totalUsetsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress} />
    </>
    )
  }
}


let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsetsCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFeaching: state.usersPage.isFeaching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

const UsersContainer = connect(
  mapStateToProps,
  {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFeaching, setfollowingInProgress, getUsers
  }

)(UsersComponent);
export default UsersContainer;
