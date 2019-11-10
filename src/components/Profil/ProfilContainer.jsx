import React from "react";
import Profil from "./Profil"
import { connect } from "react-redux"
import { setUserProfile } from "../../redax/profile-reducer"
import { withRouter } from "react-router-dom"
import { ProfileSetAPI } from "../../api/Api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

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

let AuthRedirectComponent = withAuthRedirect(ProfilContainer);


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
