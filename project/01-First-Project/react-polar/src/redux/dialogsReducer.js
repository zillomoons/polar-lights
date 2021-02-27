const ADD_MESSAGE = 'ADD-MESSAGE'; // creating action type

let initialState = {
    dialogs: [
        { id: 1, name: 'Zein' },
        { id: 2, name: 'Mia' },
        { id: 3, name: 'Maybel' },
        { id: 4, name: 'Max' },
        { id: 5, name: 'Zuss' }
    ],
    messages: [
        { id: 1, message: 'Hey, how are you?' },
        { id: 2, message: 'All is good' },
        { id: 3, message: 'Right on, right on' },
        { id: 4, message: 'Be cool' },
        { id: 5, message: 'See you later!' }
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.newMessageBody }],
            };
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody }) // adding actionCreator

export default dialogsReducer;