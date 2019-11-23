import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom"

const Header = (props) => {
    return (<header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login}-<button onClick={props.loginOut}>Log out</button></div> : <NavLink className={s.link} to={"/login"}>login</NavLink>}
        </div>
    </header>)
};

export default Header;