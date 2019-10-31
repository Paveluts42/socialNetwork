import React from "react";
import Profil from "./Profil"
import * as axios from "axios";
import { connect } from "react-redux"
import { setUserProfile } from "../../redax/profile-reducer"
import { withRouter } from "react-router-dom"
class ProfilContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5007;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data);
    })
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
