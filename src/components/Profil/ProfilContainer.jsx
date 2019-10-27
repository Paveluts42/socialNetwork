import React from "react";
import Profil from "./Profil"
import * as axios from "axios";
import { connect } from "react-redux"
import { setUserProfile } from "../../redax/profile-reducer"
class ProfilContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
export default connect(mapStateToProps, { setUserProfile })(ProfilContainer);
