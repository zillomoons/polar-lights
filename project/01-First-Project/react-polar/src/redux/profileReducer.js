const ADD_POST = 'ADD-POST'; // creating action type
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hey, how are you?', likesCount: '5'},
        {id: 2, message: 'Yo, everything is cool!', likesCount: '12'},
        {id: 3, message: 'Be true to yourself.', likesCount: '25'},
        {id: 4, message: 'Make a difference.', likesCount: '34'},
        {id: 5, message: 'Stay calm and procced.', likesCount: '27'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, message: state.newPostText, likesCount: 0}],
                newPostText: ' '
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}); // adding actionCreator
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;