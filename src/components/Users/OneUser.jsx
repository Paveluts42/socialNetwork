import React from 'react'
import s from "./UsersStyle.module.css";
import userImg from "../../content/img projekt/user.png";
import { NavLink } from "react-router-dom"

let OneUser = ({ user, followingInProgress, unFollow, follow, ...props }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userImg} alt="users" className={s.usersPhoto} />
                    </NavLink>
                    <div>
                        {user.followed ? (
                            <button className={s.button} disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unFollow(user.id) }}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>UnFollow</button>)
                            : (<button className={s.button} disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>Follow</button>)}
                    </div>
                </div>
            </span>
            <span className="globolColorText">
                <span>
                    <div >{user.name}</div>
                    <div >{user.status}</div>
                    <div >{user.id}</div>
                </span>
                <span>
                    <div >{"u.location.city"}</div>
                    <div >{"u.location.country"}</div>
                </span>
            </span>
        </div>
    )
}


export default OneUser;