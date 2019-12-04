import React from "react";
import s from "./Profil.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContener from "./myPosts/MyPostContainer";

const Profil = (props) => {
  return (
    <div className={s.content}>
      <Profileinfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContener />
    </div>
  );
};

export default Profil;
