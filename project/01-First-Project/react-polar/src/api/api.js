import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        'API-KEY': '7e848bf8-eb7e-40a9-a703-e38f9a1dc7de'
    }
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    }
}