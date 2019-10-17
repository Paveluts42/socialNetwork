import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profil from "./components/Profil/Profil";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContener from "./components/Dialogs/DialogsContener";


const App = (props) => {
    return (

        <div className="app-wrapper">

            <Header/>
            <Navbar state={props.state.frendsNav}/>
            <div className="appWraperContent">
                <Route path="/dialogs"
                       render={() => <DialogsContener store={props.state} dispatch={props.dispatch}/>}/>
                <Route path="/profile"
                       render={() => <Profil store={props.state} dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>

        </div>
    );
}


export default App;
