import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _callSubscriber() {
        console.log('state has changed');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, how are you?', likesCount: '5'},
                {id: 2, message: 'Yo, everything is cool!', likesCount: '12'},
                {id: 3, message: 'Be true to yourself.', likesCount: '25'},
                {id: 4, message: 'Make a difference.', likesCount: '34'},
                {id: 5, message: 'Stay calm and procced.', likesCount: '27'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Zein'},
                {id: 2, name: 'Mia'},
                {id: 3, name: 'Maybel'}
            ]
        }
    },
    getState() {
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; // pattern observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    }
}

export default store;

