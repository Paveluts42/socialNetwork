import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redax/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext";

let rerenderEntireTree = () => {

    ReactDOM.render(<BrowserRouter>
        <StoreContext.Provider value={store}> <App />
        </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})


serviceWorker.unregister();