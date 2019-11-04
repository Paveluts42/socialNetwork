import * as axios from "axios";
const key = { withCredentials: true, headers: { "API-KEY": "ebc4aac9-5e24-4ba3-862a-6d9bb0f095b7" } };


export const getUsersChange = (currentPage = 1, pageSize = 10) => {
    return (axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }
    ).then(response => response.data)
    )
}

export const post = (id, props) => {


    props.setfollowingInProgress(true, id)
    return (
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, key).then(response => {
            if (response.data.resultCode === 0) {
                props.follow(id)
            } props.setfollowingInProgress(false, id)

        }))
}

export const delitePost = (id, props) => {
    props.setfollowingInProgress(true, id)
    return (

        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, key).then(response => {
            if (response.data.resultCode === 0) {
                props.unFollow(id)
            }
            props.setfollowingInProgress(false, id);
        })
    )
}

export const profilSetUser = (userId, setProfil) => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            setProfil(response.data);
        }))
}