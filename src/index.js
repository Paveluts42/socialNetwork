import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redax/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {

    ReactDOM.render(<BrowserRouter><App state={state}
                                        dispatch={store.dispatch.bind(store)}/></BrowserRouter>, document.getElementById('root'));
};


store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState());

serviceWorker.unregister();