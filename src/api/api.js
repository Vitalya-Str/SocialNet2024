import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "d523b7cb-c64a-4ba9-be46-aedea47a9708",
    },
});

export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`).then((response) => response.data);
    },
    followedApi(userId) {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },
    unfollowedApi(userId) {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    },

};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then((response) => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then((response) => response.data);
    },
};

export const profileAPI = {
    profileUser(id) {
        return instance.get(`profile/` + id).then((response) => response.data);
    },
    profileStatus(userId) {
        return instance.get(`/profile/status/` + userId).then((response) => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then((response) => response.data);
    },
    savePhoto(file) {
        const formData = new FormData()
        formData.append("image",  file)
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) => response.data)
    }
};
