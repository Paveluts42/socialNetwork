import React from "react";
import Profil from "./Profil"
import * as axios from "axios";
import { connect } from "react-redux"
import { setUserProfile } from "../../redax/profile-reducer"
import { withRouter } from "react-router-dom"
import { profilSetUser } from "../../api/Api";
class ProfilContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5007;
    }
    profilSetUser(userId, this.setProfil = this.props.setUserProfile)
  }
  render() {
    return (
      <Profil {...this.props} profile={this.props.profile} />
    )
  }
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfilContainer)
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
