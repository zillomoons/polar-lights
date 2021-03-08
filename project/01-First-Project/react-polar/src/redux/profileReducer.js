import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST'; // creating action type
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hey, how are you?', likesCount: '5' },
        { id: 2, message: 'Yo, everything is cool!', likesCount: '12' },
        { id: 3, message: 'Be true to yourself.', likesCount: '25' },
        { id: 4, message: 'Make a difference.', likesCount: '34' },
        { id: 5, message: 'Stay calm and procced.', likesCount: '27' }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 6, message: action.newPostText, likesCount: 0 }],
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
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText }); // adding actionCreator
export const deletePost = (postId) => ({ type: DELETE_POST, postId }); // adding actionCreator

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const setProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.setProfile(userId)
        dispatch(setUserProfile(data));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export default profileReducer;