import React from 'react'
import Paginator from '../common/paginator/Paginator';
import OneUser from './OneUser';

let Users = ({ pageSize, totalUsetsCount, onPageChanged, currentPage, ...props }) => {
    return (<div>
        <Paginator currentPage={currentPage} pageSize={pageSize} totalUsetsCount={totalUsetsCount} onPageChanged={onPageChanged} />
        {
            props.users.map(u => <OneUser followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow} user={u} key={u.id} />)
        }
    </div >)

}


export default Users;