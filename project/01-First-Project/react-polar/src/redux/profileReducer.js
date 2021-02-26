import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST'; // creating action type
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hey, how are you?', likesCount: '5' },
        { id: 2, message: 'Yo, everything is cool!', likesCount: '12' },
        { id: 3, message: 'Be true to yourself.', likesCount: '25' },
        { id: 4, message: 'Make a difference.', likesCount: '34' },
        { id: 5, message: 'Stay calm and procced.', likesCount: '27' }
    ],
    newPostText: '',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 6, message: state.newPostText, likesCount: 0 }],
                newPostText: ' '
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }); // adding actionCreator
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const setProfile = (userId) => {
    return (dispatch) => {
        usersAPI.setProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }

            })
    }
}

export default profileReducer;