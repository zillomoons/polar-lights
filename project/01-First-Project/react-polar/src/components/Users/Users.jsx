import React from 'react';
import Pagination from '../Common/pagination';
import UsersSearchForm from './UsersSearchForm';
import User from './User';



const Users = (props) => {
    return <div>
        <UsersSearchForm />
        <Pagination totalItemsCount={props.totalCount} pageSize={props.pageSize}
            currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
        {props.users.map(u =>
            <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
        )
        }
    </div >
}


export default Users;