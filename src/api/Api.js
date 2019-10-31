import * as axios from "axios";
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return (axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }
    ).then(response => response.data)
    )
}

export const Post = (id = 1, props) => {
    return (axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { withCredentials: true, headers: { "API-KEY": "ebc4aac9-5e24-4ba3-862a-6d9bb0f095b7" } }).then(response => {
        if (response.data.resultCode === 0) {
            props(id)
        }
    }))
}

export const delitePost = (id = 1, props) => {
    return (
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true, headers: { "API-KEY": "ebc4aac9-5e24-4ba3-862a-6d9bb0f095b7" } }).then(response => {
            if (response.data.resultCode === 0) {
                props(id)
            }
        }))
}