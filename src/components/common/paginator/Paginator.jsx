import React, { useState } from 'react'
import s from "./Paginator.module.css";
import cn from "classnames";
let Paginator = ({ totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)

    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNuber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNuber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNuber * portionSize;

    return (
        <div >
            {portionNuber > 1 &&
                <button className={s.button} onClick={() => { setPortionNumber(portionNuber - 1) }}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>{"<=PREV"}</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span className={cn({
                            [s.selectedPage]: currentPage === p
                        },
                            s.pageNumber)}
                            key={p}
                            style={{ color: "white" }}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>{p}</span>
                    )
                })
            }{portionCount > portionNuber &&
                <button className={s.button} onClick={() => { setPortionNumber(portionNuber + 1) }}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>{"NEXT=>"}</button>}
        </div>


    )
}

export default Paginator