import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, count) {
    return instance.get(`users?page=${currentPage}&count=${count}`).then((response) => response.data);
  },
  followedApi(userId) {
    return instance.post(`follow/${userId}`, {}, { withCredentials: true }).then((response) => response.data);
  },
  unfollowedApi(userId) {
    return instance.delete(`follow/${userId}`, { withCredentials: true }).then((response) => response.data);
  },
};

export const headerAPI = {
  authMe() {
    return instance.get(`auth/me`, { withCredentials: true }).then((response) => response.data);
  },
};

export const profileAPI = {
  profileUser(id) {
    return instance.get(`profile/` + id).then((response) => response.data);
  },
};
