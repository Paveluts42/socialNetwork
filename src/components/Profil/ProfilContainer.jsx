import React from "react";
import Profil from "./Profil";
import { connect } from "react-redux";
import { newUser, getStatus, updateStatus } from "../../redax/profile-reducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class ProfilContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
    }

    this.props.newUser(userId);
    this.props.getStatus(userId);

  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />
    }
    return (
      <Profil {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )

  }
};


let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  })
}

export default compose(
  connect(mapStateToProps, { newUser, getStatus, updateStatus }),

  withRouter, withAuthRedirect,


)(ProfilContainer);
