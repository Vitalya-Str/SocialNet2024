import s from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalCount, count, getUsers, currentPage}) => {
    const pagesCount = Math.ceil(totalCount / count);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pageNumber = (p) => {
        getUsers(p, count);
    };

    return (<div>
        <div>
            {pages.map((p) => (<span key={p}
                onClick={() => {
                    pageNumber(p);
                }}
                className={currentPage === p && s.bold}>{p} </span>))}
        </div>

    </div>)
}


export default Paginator;
