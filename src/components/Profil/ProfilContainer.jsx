import React from "react";
import Profil from "./Profil"
import { connect } from "react-redux"
import { setUserProfile } from "../../redax/profile-reducer"
import { withRouter } from "react-router-dom"
import { ProfileSetAPI } from "../../api/Api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux"
class ProfilContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5112
    }
    ProfileSetAPI.profilSetUser(userId).then(response => {
      this.props.setUserProfile(response.data)
    })
  }
  render() {

    return (
      <Profil {...this.props} profile={this.props.profile} />
    )
  }
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,

})

export default compose(
  connect(mapStateToProps, { setUserProfile }),

  withRouter,

  // withAuthRedirect
)(ProfilContainer);
