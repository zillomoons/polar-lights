import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'; // creating action type

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } }); // adding actionCreator

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const logIn = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.logIn(email, password, rememberMe)

        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Something is wrong';
            dispatch(stopSubmit('login', { _error: message }));
        }
    }
}
export const logOut = () => {
    return async (dispatch) => {
        let data = await authAPI.logOut();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer;