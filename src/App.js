import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import ProfilContainer from "./components/Profil/ProfilContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux"
import { withRouter, Switch } from "react-router-dom"
import { compose } from "redux"
import { initializeApp } from "./redax/app-reducer "
import Preloader from "./components/common/Preloader";
const LazyUsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("some error");
    console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)

  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)

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
          <Switch >

            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfilContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => { return (<React.Suspense fallback={<Preloader />}><LazyUsersContainer /></React.Suspense>) }} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" render={() => <h1 className={"globolColorText"}>404 NOT FOUND</h1>} />

          </Switch>
        </div>
      </div >

    )
  };
};
const mapStateToProps = (state) => ({ initialized: state.app.initialized })
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
