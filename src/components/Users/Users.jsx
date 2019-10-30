import React from 'react'
import s from "./UsersStyle.module.css";
import userImg from "../../content/img projekt/016f722ab179a9441086e259856049b0.jpg";
import { NavLink } from "react-router-dom"
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsetsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p + ".."}</span>
            })}

        </div>
        {props.users.map(u => (
            <div >
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userImg} className={s.usersPhoto} />
                        </NavLink>
                        <div>
                            {u.followed ? (
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true, headers: { "API-KEY": "ebc4aac9-5e24-4ba3-862a-6d9bb0f095b7" } }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    });
                                }}>UnFollow</button>)
                                : (<button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: { "API-KEY": "ebc4aac9-5e24-4ba3-862a-6d9bb0f095b7" } }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
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