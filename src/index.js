import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {likesCount: 1, message: "hi,how are you?"},
    {likesCount: 12223, message: "it's my first post"},
    {likesCount: 3231, message: "it's so cool!!"},
    {likesCount: 41, message: "it's so cool!!"},
    {likesCount: 53, message: "it's so cool!!"},
    {likesCount: 69, message: "it's so cool!!"},
    {likesCount: 77, message: "i am DusiNKA!!"},
    {likesCount: 8, message: "it's so cool!!"},
    {likesCount: 444, message: "i very happy!!"},
    {likesCount: 666, message: "i very happy!!"},
];
let dialogsData = [
    {id: 1, name: "Nastya"},
    {id: 2, name: "Businka"},
    {id: 3, name: "Cotenochek"},
    {id: 4, name: "kebachok"},
    {id: 5, name: "bulocha"},
    {id: 6, name: "youpp"},
    {id: 7, name: "yDDDDDIJDIp"},
];
let messagesData = [
    {id: 1, message: "hello"},
    {id: 2, message: "yhehe"},
    {id: 3, message: "love"},
    {id: 4, message: "bob"},
    {id: 5, message: "himre"},
    {id: 6, message: "memes"},
    {id: 7, message: "golf"},

];
ReactDOM.render(<App posts={posts} message={messagesData} dialogs={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
