import React from 'react'
import s from "./UsersStyle.module.css";
import userImg from "../../content/img projekt/016f722ab179a9441086e259856049b0.jpg";
import { NavLink } from "react-router-dom"
import { Post, delitePost } from '../../api/Api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsetsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    return (<div key={props.key}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p + ".."}</span>
            })}

        </div>
        {props.users.map(u => (
            <div>
                <span>
                    <div>

                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userImg} className={s.usersPhoto} />
                        </NavLink>
                        <div>
                            {u.followed ? (
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    delitePost(u.id, props)
                                }}>UnFollow</button>)
                                : (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    Post(u.id, props)

                                }}>Follow</button>)}
                        </div>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{u.id}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>
        ))
        }
    </div >)

}


export default Users;