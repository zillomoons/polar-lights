const ADD_MESSAGE = 'ADD-MESSAGE'; // creating action type

let initialState = {
    dialogs: [
        { id: 1, name: 'Christine', photo: require('../assets/images/chris.jpg') },
        { id: 2, name: 'Dan', photo: require('../assets/images/dan.jpg') },
        { id: 3, name: 'Emile', photo: require('../assets/images/emile.jpg') },
        { id: 4, name: 'Ethan', photo: require('../assets/images/ethan.jpg') },
        { id: 5, name: 'Max', photo: require('../assets/images/max.jpg') },
        { id: 6, name: 'Sergio', photo: require('../assets/images/sergio.jpg') },
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