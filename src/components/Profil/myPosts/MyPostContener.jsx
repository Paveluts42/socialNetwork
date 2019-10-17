import React from "react";

import {addPostActionCreator, updateNewPostText} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContener = (props) => {
    debugger;
    let state = props.store

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = (text) => {

        let action = updateNewPostText(text)
        props.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostsContener;


