import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";

const initialState = {
  posts: [
    { id: 1, post: "Hi", likeCount: 1 },
    { id: 2, post: "Yo!", likeCount: 33 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const body = state.newPostText;

    return { ...state, posts: [...state.posts, { id: 3, post: body, likeCount: 55 }], newPostText: "" };
  } else if (action.type === ADD_NEW_POST_TEXT) {
    return { ...state, newPostText: action.text };
  } else if (action.type === SET_USER_PROFILE) {
    return { ...state, profile: action.user };
  } else if (action.type === SET_PROFILE_STATUS) {
    return { ...state, status: action.status };
  } else if (action.type === UPDATE_PROFILE_STATUS) {
    return { ...state, status: action.status };
  }
  return state;
};

export const addPostAC = () => ({ type: ADD_POST });

export const addNewPostAC = (text) => ({ type: ADD_NEW_POST_TEXT, text });

export const setUserProfileAC = (user) => ({ type: SET_USER_PROFILE, user });

export const setProfileStatusAC = (status) => ({ type: SET_PROFILE_STATUS, status });

export const updateProfileStatusAC = (status) => ({ type: SET_PROFILE_STATUS, status });

export const profileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.profileUser(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export const setProfileStatus = (userId) => (dispatch) => {
  profileAPI.profileStatus(userId).then((data) => {
    dispatch(setProfileStatusAC(data));
  });
};
export const updateProfileStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(updateProfileStatusAC(status));
    }
  });
};

export default profileReducer;
