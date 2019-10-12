import React from "react";
import s from "./Post.module.css";

const Post = (props) => {


    return (<div className={s.item}>
            <img className={s.img1} src="https://i.pinimg.com/originals/01/6f/72/016f722ab179a9441086e259856049b0.jpg"
                 alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount} <img className={s.lol}
                                              src="https://cdn4.iconfinder.com/data/icons/like-18/32/459-01-512.png"
                                              alt="" width="10px" height="10px"/> </span>
            </div>
        </div>
    )
}
export default Post;