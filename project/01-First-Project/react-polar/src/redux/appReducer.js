import { getAuthUserData } from "./authReducer";

const INITIALIZED = 'INITIALIZED'; // creating action type

let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            };
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED }); // adding actionCreator

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;