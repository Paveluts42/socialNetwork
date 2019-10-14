import React from "react";
import s from "./Profil.module.css";
import MyPosts from "./myPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";


const Profil = (props) => {

    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>)
}

export default Profil;


