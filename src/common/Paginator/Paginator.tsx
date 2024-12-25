import s from "./Paginator.module.css";
import React, {FC, useState} from "react";


type MapStateType = {
    totalCount: number
    count: number
    currentPage: number
    portionSize?: number
    term: string
}

type MapDispatchType = {
    pageNumber: (pageNumber: number, count: number, term: string) => void
}
const Paginator: FC<MapStateType & MapDispatchType> = ({
                                                           totalCount,
                                                           count = 10,
                                                           pageNumber,
                                                           currentPage,
                                                           portionSize = 20,
                                                           term
                                                       }) => {
    const pagesCount = Math.ceil(totalCount / count);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (<div>
        {portionNumber > 1 &&
            <button className={s.button15} onClick={() => setPortionNumber(portionNumber - 1)}> Prev </button>}

        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => (<span key={p}
                               onClick={() => {
                                   pageNumber(p, count,term);
                               }}
                               className={currentPage === p ? s.bold : s.pointer}>{p} </span>))}

        {portionCount > portionNumber &&
            <button className={s.button15} onClick={() => setPortionNumber(portionNumber + 1)}> Next </button>}

    </div>)
}


export default Paginator;
