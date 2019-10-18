import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  debugger;
  let post = props.posts.map(value => {
    return <Post message={value.message} likesCount={value.likesCount} />;
  });

  let onAddPost = () => {
    debugger;
    props.addPost();
  };

  let onPostChange = change => {
    let text = change.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h3> My posts</h3>

      <div>
        <div>
          <textarea
            placeholder={"enter you post"}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>{post}</div>
    </div>
  );
};
export default MyPosts;
