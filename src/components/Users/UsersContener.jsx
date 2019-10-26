
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFeaching } from "../../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import React from "react";

import Preloader from "../common/preloader"



class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.setIsFeaching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&key=${this.props.id}`).then(response => {
      this.props.setIsFeaching(false);
      this.props.setUsers(response.data.items)
    })
  }
  onPageChanged = (pageNumber) => {
    this.props.setIsFeaching(true);

    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&key=${this.props.id}`).then(response => {
      this.props.setIsFeaching(false);

      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  render() {
    return (<>
      {this.props.isFeaching ? <Preloader /> : null}
      <Users isFeaching={this.props.isFeaching} totalUsetsCount={this.props.totalUsetsCount} key={this.props.id} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} unFollow={this.props.unFollow} follow={this.props.follow} onPageChanged={this.onPageChanged} />
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
  };
};

const UsersContener = connect(
  mapStateToProps,
  {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFeaching,
  }

)(UsersComponent);
export default UsersContener;
