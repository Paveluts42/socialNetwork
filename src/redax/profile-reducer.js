const addPost = "ADD-POST";
const appdateNewPost = "UPDATE-NEW-POST-TEXT";
 let initialState={posts: [
         {id: 1, likesCount: 1, message: "hi,how are you?"},
         {id: 2, likesCount: 12223, message: "it's my first post"},
         {id: 3, likesCount: 3231, message: "it's so cool!!"},
         {id: 4, likesCount: 41, message: "it's so cool!!"},
         {id: 5, likesCount: 53, message: "it's so cool!!"},
         {id: 6, likesCount: 69, message: "it's so cool!!"},
         {id: 7, likesCount: 77, message: "i am DusiNKA!!"},
         {id: 8, likesCount: 8, message: "it's so cool!!"},
         {id: 9, likesCount: 444, message: "i very happy!!"},
         {id: 10, likesCount: 666, message: "i very happy!!"},
     ],
     newPostText: "",};
const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case appdateNewPost:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostText = (text) => ({type: appdateNewPost, newText: text});

export default profileReducer;