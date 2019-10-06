import React from "react";
import s from "./Profil.module.css";

const Profil = () => {
    return (<div className="content">
        <div>
            <img src="https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003" />
        </div>
        <div>
            ava+discription
      </div>
        <div>
            My posts
        </div>
        <div>
            New post
        </div>

        <div className={s.item}>

            post 1
          </div>
        <div className={s.item}>
            post 2
          </div>
    </div>)
}
export default Profil;


