import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redax/state";





const MyPosts = (props) => {
    let post = props.posts.map((value) => {
            return (<Post message={value.message} likesCount={value.likesCount}/>)
        }
    )
    let newPostElement = React.createRef();
    let addPost = () => {

        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action=updateNewPostText(text)
        props.dispatch(action);
    }

    return (
        <div className={s.postBlock}>
            <h3> My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}
export default MyPosts;


