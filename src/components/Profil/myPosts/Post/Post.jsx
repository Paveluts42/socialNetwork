import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (<div className={s.item}>
        <img src="https://i.pinimg.com/originals/01/6f/72/016f722ab179a9441086e259856049b0.jpg" alt="" />
        {props.message}
        <div>
            <span>like</span>
        </div>
    </div>
    )
}
export default Post;