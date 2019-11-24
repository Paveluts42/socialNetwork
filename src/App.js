import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilContainer from "./components/Profil/ProfilContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { initializeApp } from "./redax/app-reducer "
import Preloader from "./components/common/Preloader";
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()

  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper" >
        <HeaderContainer />
        <NavbarContainer />
        <div className="appWraperContent">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfilContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>)
  };
};
const mapStateToProps = (state) => ({ initialized: state.app.initialized })
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
