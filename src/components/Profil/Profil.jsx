import React from "react";
import s from "./Profil.module.css";
import MyPosts from "./myPosts/MyPosts";

const Profil = () => {
    return (<div className={s.content}>
        <div>
            <img src="http://papers.co/wallpaper/papers.co-an22-sunset-yellow-bird-minimal-29-wallpaper.jpg"/>
        </div>
        <div>
            ava+discription
        </div>
        < MyPosts/>
    </div>)
}
export default Profil;


