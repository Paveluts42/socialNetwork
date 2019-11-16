import React from 'react'
import s from "./UsersStyle.module.css";
import userImg from "../../content/img projekt/016f722ab179a9441086e259856049b0.jpg";
import { NavLink } from "react-router-dom"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsetsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    return (<div>
        <div>
            {pages.map(p => {
                return <span key={p.toString()} id={s.color} onClick={(e) => { props.onPageChanged(p) }}>{p + ".."}</span>
            })}

        </div>
        {
            props.users.map(u => (
                <div key={u.id} >
                    <span>
                        <div>

                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userImg} alt="users" className={s.usersPhoto} />
                            </NavLink>
                            <div>
                                {u.followed ? (
                                    <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unFollow(u.id) }}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>UnFollow</button>)
                                    : (<button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>Follow</button>)}
                            </div>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div className="globolColorText">{u.name}</div>
                            <div className="globolColorText">{u.status}</div>
                            <div className="globolColorText">{u.id}</div>
                        </span>
                        <span>
                            <div className="globolColorText">{"u.location.city"}</div>
                            <div className="globolColorText">{"u.location.country"}</div>
                        </span>
                    </span>
                </div>
            ))
        }
    </div >)

}


export default Users;