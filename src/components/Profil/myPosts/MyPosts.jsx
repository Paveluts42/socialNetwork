import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let post = props.posts.posts.map((value) => {
            return (<Post message={value.message} likesCount={value.likesCount}/>)
        }
    )
    let newPostElement=React.createRef();
    let addPost=()=>{

        let text=newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value="";
    }
    return (
        <div className={s.postBlock}>
            <h3> My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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


