const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, post: "Hi", likeCount: 1 },
    { id: 2, post: "Yo!", likeCount: 33 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const body = state.newPostText;

    return { ...state, posts: [...state.posts, { id: 3, post: body, likeCount: 55 }], newPostText: "" };
  } else if (action.type === ADD_NEW_POST_TEXT) {
    return { ...state, newPostText: action.text };
  } else if (action.type === SET_USER_PROFILE) {
    return { ...state, profile: action.user };
  }
  return state;
};

export const addPostAC = () => {
  return { type: ADD_POST };
};

export const addNewPostAC = (text) => {
  return { type: ADD_NEW_POST_TEXT, text };
};

export const setUserProfileAC = (user) => ({ type: SET_USER_PROFILE, user });

export default profileReducer;
