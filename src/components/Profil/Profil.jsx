import React from "react";
import s from "./Profil.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContener from "./myPosts/MyPostContener";

const Profil = () => {
  return (
    <div className={s.content}>
      <Profileinfo />
      <MyPostsContener />
    </div>
  );
};

export default Profil;
