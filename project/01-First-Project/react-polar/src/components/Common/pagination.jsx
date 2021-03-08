import React from 'react';
import s from './pagination.module.css';

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div className={s.pages}>
        {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                onClick={(e) => { props.onPageChanged(p) }} key={p.id}>{p}</span>
        }
        )}
    </div>

}

export default Pagination;