import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import Profil from "./components/Profil/Profil";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContener from "./components/Dialogs/DialogsContener";
import NavbarContener from "./components/NavbarContener/NavbarContener";


const App = (props) => {
    return (

        <div className="app-wrapper">

            <Header />
            <NavbarContener />
            <div className="appWraperContent">
                <Route path="/dialogs"
                    render={() => <DialogsContener />} />
                <Route path="/profile"
                    render={() => <Profil />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>

        </div>
    );
}


export default App;
