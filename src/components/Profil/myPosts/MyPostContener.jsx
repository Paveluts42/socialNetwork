import React from "react";
import { addPostActionCreator, updateNewPostText } from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";



const MyPostsContener = () => {
    // let state = props.store

    return (


        <StoreContext.Consumer>{
            (store) => {

                let addPost = () => {
                    store.dispatch(addPostActionCreator());

                }

                let onPostChange = (text) => {

                    let action = updateNewPostText(text)
                    store.dispatch(action);
                }

                return (
                    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profilePage.posts}
                        newPostText={store.getState().profilePage.newPostText} />)
            }}
        </StoreContext.Consumer>
    )
};

export default MyPostsContener;


