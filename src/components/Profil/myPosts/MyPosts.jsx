import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let post = props.posts.map((value) => {
            return (<Post message={value.message} likesCount={value.likesCount}/>)
        }
    )
    return (
        <div className={s.postBlock}>
            <h3> My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}
export default MyPosts;


