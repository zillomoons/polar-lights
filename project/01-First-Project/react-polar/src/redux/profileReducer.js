import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST'; // creating action type
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO';

let initialState = {
    posts: [
        { id: 1, message: 'Yo, everything is cool!', likesCount: '12' },
        { id: 2, message: 'Make a difference.', likesCount: '34' },
        { id: 3, message: 'Stay calm and procced.', likesCount: '27' }
    ],
    profile: null,
    status: "",
    photos: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, message: action.newPostText, likesCount: 0 }],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText }); // adding actionCreator
export const deletePost = (postId) => ({ type: DELETE_POST, postId }); // adding actionCreator

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const setProfilePhoto = (photos) => ({ type: SET_PROFILE_PHOTO, photos })

export const setProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.setProfile(userId)
    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(setProfilePhoto(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(setProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;