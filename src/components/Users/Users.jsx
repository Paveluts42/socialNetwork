import React from 'react'
import Paginator from '../common/paginator/Paginator';
import OneUser from './OneUser';

let Users = ({ pageSize, totalUsetsCount, onPageChanged, currentPage, ...props }) => {
    return (<div>
        {
            props.users.map(u => <OneUser followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow} user={u} key={u.id} />)
        }
        <div style={{ marginTop: 60 }}>
            <Paginator currentPage={currentPage} pageSize={pageSize} totalItemCount={totalUsetsCount} onPageChanged={onPageChanged} />
        </div>
    </div >)

}


export default Users;