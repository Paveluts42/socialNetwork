import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "b1024f5b-0cb5-4278-852e-cd3f63498b65" }
});


export const ProfileSetAPI = {
    profilSetUser(userId) {
        return (
            instanse.get(`profile/${userId}`))
    }, getStatus(userId) {
        return (
            instanse.get(`profile/status/${userId}`))
    },
    updateStatus(status) {
        return (
            instanse.put(`profile/status`, { status: status }))
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return (

            instanse.put(`profile/photo`, formData, {
                headers:
                {
                    "Content-Type": "multipart/from-data"
                }
            }))
    },
    saveProfile(profile) {
        return (instanse.put(`profile`, profile))
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
        return (instanse.get(`auth/me`));
    },
    login(email, password, rememberMe = false, captcha = null) {
        return (instanse.post(`auth/login`, { email, password, rememberMe, captcha }));
    },

    loginOut() {
        return (instanse.delete(`auth/login`));

    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return (instanse.get(`security/get-captcha-url`));
    },

}