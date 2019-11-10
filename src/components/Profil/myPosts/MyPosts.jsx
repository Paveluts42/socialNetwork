import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let post = props.posts.map(p => {
    return <Post className="globolColorText" message={p.message} key={p.id} likesCount={p.likesCount} />;
  });

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = change => {
    let text = change.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h3 className="globolColorText"> My posts</h3>

      <div>
        <div>
          <textarea
            placeholder={"enter you post"}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div className={s.buttonArea}>
          <button onClick={onAddPost} className={s.button}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>add post</button>
        </div>
      </div>
      <div className={s.posts}>{post}</div>
    </div>
  );
};
export default MyPosts;
