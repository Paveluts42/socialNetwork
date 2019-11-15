import { ProfileSetAPI } from "../api/Api";

const addPost = "ADD-POST";
const appdateNewPost = "UPDATE-NEW-POST-TEXT";
const SETUSERPROFILE = "SETUSERPROFILE";
const SETSTATUS = "SETSTATUS";
let initialState = {
  posts: [
    { id: 1, likesCount: 1, message: "hi,how are you?" },
    { id: 2, likesCount: 12223, message: "it's my first post" },
    { id: 3, likesCount: 3231, message: "it's so cool!!" },
    { id: 4, likesCount: 41, message: "it's so cool!!" },
    { id: 5, likesCount: 53, message: "it's so cool!!" },
    { id: 6, likesCount: 69, message: "it's so cool!!" },
    { id: 7, likesCount: 77, message: "i am DusiNKA!!" },
    { id: 8, likesCount: 8, message: "it's so cool!!" },
    { id: 9, likesCount: 444, message: "i very happy!!" },
    { id: 10, likesCount: 666, message: "i very happy!!" }
  ],
  newPostText: "",
  profile: null,
  status: ""
};
let idAdd = 11;
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case appdateNewPost:
      return { ...state, newPostText: action.newText };
    case addPost:
      idAdd++;
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          { id: idAdd, message: state.newPostText, likesCount: 0 }
        ]
      };
    case SETUSERPROFILE: {
      return { ...state, profile: action.profile }
    }
    case SETSTATUS: {
      return { ...state, status: action.status }
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: addPost });
export const setUserProfile = (profile) => ({ type: SETUSERPROFILE, profile });
export const setStatus = (status) => ({ type: SETSTATUS, status });
export const updateNewPostText = text => ({
  type: appdateNewPost,
  newText: text
});
export const newUser = (userId) => (dispatch) => {

  ProfileSetAPI.profilSetUser(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })

}

export const getStatus = (userId) =>
  (dispatch) => {
    ProfileSetAPI.getStatus(userId).then(response => { dispatch(setStatus(response.data)) }

    )
  }


export const updateStatus = (status) => (dispatch) => {
  ProfileSetAPI.updateStatus(status).then(response => { if (response.data.resultCode === 0) { dispatch(setStatus(status)) } }

  )
}



export default profileReducer;
