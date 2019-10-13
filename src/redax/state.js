"use strict"

import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id:1,likesCount: 1, message: "hi,how are you?"},
            {id:2,likesCount: 12223, message: "it's my first post"},
            {id:3,likesCount: 3231, message: "it's so cool!!"},
            {id:4,likesCount: 41, message: "it's so cool!!"},
            {id:5,likesCount: 53, message: "it's so cool!!"},
            {id:6,likesCount: 69, message: "it's so cool!!"},
            {id:7,likesCount: 77, message: "i am DusiNKA!!"},
            {id:8,likesCount: 8, message: "it's so cool!!"},
            {id:9,likesCount: 444, message: "i very happy!!"},
            {id:10,likesCount: 666, message: "i very happy!!"},
        ],
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Nastya"},
            {id: 2, name: "Businka"},
            {id: 3, name: "Cotenochek"},
            {id: 4, name: "kebachok"},
            {id: 5, name: "bulocha"},
            {id: 6, name: "youpp"},
        ],
        messagesData: [
            {id: 1, message: "hello"},
            {id: 2, message: "yhehe"},
            {id: 3, message: "love"},
            {id: 4, message: "bob"},
            {id: 5, message: "himre"},
            {id: 6, message: "memes"},

        ],
    },
    frendsNav: {
        piple: [{id: 1, name: "Nastya"},
            {id: 2, name: "Businka"},
            {id: 3, name: "Cotenochek"},
        ],
    },
}

export let addPost=(postMessage)=>{

    let newPost={
        id:5,
        message:postMessage,
        likesCount:0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);}

    export let klik=(sends)=>{
    let newMessage={
        id:1,
        message: sends,
    };
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
    }


export default state