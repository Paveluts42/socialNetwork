import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts

 <div>
                <textarea></textarea>
                <button>add post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>
                <Post message="hi,how are you?" />
                <Post message="it's my first post" />
                <Post message="it's so cool!!" />
                <Post message="it's so cool!!" />
                <Post message="it's so cool!!" />
                <Post message="it's so cool!!" />
                <Post message="я бусинка!!!!!" />
            </div>
        </div >
    )
}
export default MyPosts;


