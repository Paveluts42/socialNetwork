import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"
import React from 'react';
import ReactDOM from 'react-dom';

let state = {
  posts: [
    { id: 1, likesCount: 1, message: "hi,how are you?" },
    { id: 2, likesCount: 12223, message: "it's my first post" },
    { id: 3, likesCount: 3231, message: "it's so cool!!" },
    { id: 4, likesCount: 41, message: "it's so cool!!" },
    { id: 5, likesCount: 53, message: "it's so cool!!" },
    { id: 6, likesCount: 69, message: "it's so cool!!" },
    { id: 7, likesCount: 77, message: "i am DusiNKA!!" },
    { id: 8, likesCount: 8, message: "it's so cool!!" },
    { id: 9, likesCount: 444, message: "i very happy!!" },
    { id: 10, likesCount: 666, message: "i very happy!!" }
  ]
};

it('length of posts should be', () => {
  let action = addPostActionCreator("businke heh")

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(11);
})
it('message of new posts should be incremented businke heh', () => {
  let action = addPostActionCreator("businke heh")

  let newState = profileReducer(state, action)
  expect(newState.posts[10].message).toBe("businke heh");
})
it('ahter deleting length should be dectement', () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(9);
})
it('ahter deleting length shouldnt be dectement', () => {
  let action = deletePost(1000)

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(10);
})