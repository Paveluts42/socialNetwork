import React from "react";
import s from "./Profil.module.css";
import MyPosts from "./myPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profil = () => {
    return (<div className={s.content}>
        <Profileinfo/>
        < MyPosts/>
    </div>)
}
export default Profil;


