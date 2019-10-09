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
                <Post message="hi,how are you?" likesCount="5"/>
                <Post message="it's my first post" likesCount="2"/>
                <Post message="it's so cool!!" likesCount="10"/>
                <Post message="it's so cool!!" likesCount="15"/>
                <Post message="it's so cool!!" likesCount="88"/>
                <Post message="it's so cool!!" likesCount="95"/>
                <Post message="я бусинка!!!!!" likesCount="515"/>
                <Post message='111111111' likesCount='11111'/>
            </div>
        </div>
    )
}
export default MyPosts;


