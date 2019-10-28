import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom"

const Header = (props) => {
    return (<header className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJ0esqrxZcmsxNi2gqq4SaDH2Os4IJ27Z4pDIqPsH_BYPo0Cx" />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink className={s.link} to={"/login"}>login</NavLink>}
        </div>
    </header>)
};

export default Header;