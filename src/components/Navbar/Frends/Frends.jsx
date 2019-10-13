import React from "react"
import s from "./Frends.module.css"

const Frends=(props)=>{

    return(
        <div>
            <div className={s.fred}>
                <img className={s.gif} src="https://i.pinimg.com/originals/01/6f/72/016f722ab179a9441086e259856049b0.jpg" alt=""/>
                {props.name}
            </div>
        </div>
    )
}
export default Frends