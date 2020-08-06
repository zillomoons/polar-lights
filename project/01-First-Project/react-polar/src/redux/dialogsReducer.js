const ADD_MESSAGE = 'ADD-MESSAGE'; // creating action type
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Zein'},
        {id: 2, name: 'Mia'},
        {id: 3, name: 'Maybel'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Zuss'}
    ],
    messages: [
        {id: 1, message: 'Hey, how are you?'},
        {id: 2, message: 'All is good'},
        {id: 3, message: 'Right on, right on'},
        {id: 4, message: 'Be cool'},
        {id: 5, message: 'See you later!'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newMessageText}],
                newMessageText: ' '
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) // adding actionCreator
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer;