import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, klik} from "./redax/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter><App state={state} addPost={addPost} klik={klik}/></BrowserRouter>, document.getElementById('root'));
};
