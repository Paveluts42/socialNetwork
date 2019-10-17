import React from "react";
import s from "./Profil.module.css";

import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContener from "./myPosts/MyPostContener";


const Profil = (props) => {

    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPostsContener store={props.store} dispatch={props.dispatch} />
        </div>)
}

export default Profil;

