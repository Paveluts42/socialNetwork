import React from "react";
import s from "./Profil.module.css";

import Profileinfo from "./Profileinfo/Profileinfo";
import SuperMyPostsContener from "./myPosts/MyPostContener";

const Profil = () => {
  return (
    <div className={s.content}>
      <Profileinfo />
      <SuperMyPostsContener />
    </div>
  );
};

export default Profil;
