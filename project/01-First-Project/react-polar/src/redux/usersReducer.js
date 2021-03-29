import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utilities/object-helper';

const FOLLOW = 'FOLLOW'; // creating action type
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: true })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: false })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId }); // adding actionCreator
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, count: totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId })

export const fetchUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));

    }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;