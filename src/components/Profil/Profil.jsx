import React from "react";
import s from "./Profil.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContener from "./myPosts/MyPostContainer";

const Profil = (props) => {
  return (
    <div className={s.content}>
      <Profileinfo profile={props.profile} />
      <MyPostsContener />
    </div>
  );
};

export default Profil;
