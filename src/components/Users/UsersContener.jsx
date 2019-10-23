
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import React from "react";



class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

      this.props.setUsers(response.data.items)
    })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  render() {
    return (
      <Users totalUsetsCount={this.props.totalUsetsCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow} onPageChanged={this.onPageChanged} />
    )
  }
}


let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsetsCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))

    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  };
};
const UsersContener = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);
export default UsersContener;
