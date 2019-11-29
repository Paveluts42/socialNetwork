import React from 'react'
import s from "./Paginator.module.css";
let Paginator = ({ totalUsetsCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsetsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    return (
        <div>
            {pages.map(p => {
                return <span key={p.toString()} id={s.color} className={currentPage === p && s.selectedPage} onClick={(e) => { onPageChanged(p) }}>{p + ".."}</span>
            })}

        </div>


    )
}

export default Paginator