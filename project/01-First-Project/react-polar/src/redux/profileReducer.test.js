import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 1, message: 'Hey, how are you?', likesCount: '5' },
        { id: 2, message: 'Yo, everything is cool!', likesCount: '12' },
        { id: 3, message: 'Be true to yourself.', likesCount: '25' },
        { id: 4, message: 'Make a difference.', likesCount: '34' },
        { id: 5, message: 'Stay calm and procced.', likesCount: '27' }
    ]
};

test('length of posts should be incremented', () => {
    // 1. initial data
    let action = addPost('Life is wonderful');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectated result
    expect(newState.posts.length).toBe(6)
});

test('message of new post should be correct', () => {
    // 1. initial data
    let action = addPost('Life is wonderful');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectated result
    expect(newState.posts[5].message).toBe('Life is wonderful')
});

test('after deleting length of posts should decrement', () => {
    // 1. initial data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectated result
    expect(newState.posts.length).toBe(4)
});
test('length of posts should not change if id is incorrect', () => {
    // 1. initial data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectated result
    expect(newState.posts.length).toBe(5)
});


