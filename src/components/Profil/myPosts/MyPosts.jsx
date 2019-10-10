import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let messagesData = [
        {likesCount: 1, message: "hi,how are you?"},
        {likesCount: 12223, message: "it's my first post"},
        {likesCount: 3231, message: "it's so cool!!"},
        {likesCount: 41, message: "it's so cool!!"},
        {likesCount: 53, message: "it's so cool!!"},
        {likesCount: 69, message: "it's so cool!!"},
        {likesCount: 77, message: "i am DusiNKA!!"},
        {likesCount: 8, message: "it's so cool!!"},
    ];
    let posts = messagesData.map((p) => {
            return (
                <Post message={p.message} likesCount={p.likesCount}/>
            )
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

                {posts}
            </div>
        </div>
    )
}
export default MyPosts;


