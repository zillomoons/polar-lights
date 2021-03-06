import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f5fd7edd-8b3b-45aa-9fb3-06cab303e62a'
    }
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    setProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.setProfile(userId);
    },
}
export const profileAPI = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        let formData = new FormData;
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        }).then(response => {
            return response.data;
        })
    },
    logOut() {
        return instance.delete('auth/login').then(response => {
            return response.data;
        })
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}