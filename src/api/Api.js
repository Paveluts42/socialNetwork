import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "7f959bb0-3849-4295-bb72-19bd94266ad9" }
});


export const ProfileSetAPI = {
    profilSetUser(userId) {
        return (
            instanse.get(`profile/${userId}`))
    }
}


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    }, follow(userId) {
        return (instanse.post(`follow/${userId}`))

    }, unFollow(userId) {
        return (instanse.delete(`follow/${userId}`))
    },
}
export const authAPI = {
    me() {
        return (instanse.get(`auth/me`))
    }
}