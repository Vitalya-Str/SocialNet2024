const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, post: "Hi", likeCount: 1 },
    { id: 2, post: "Yo!", likeCount: 33 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  if (action.type === ADD_POST) {
    stateCopy.posts = [...state.posts];
    const post = { id: 3, post: stateCopy.newPostText, likeCount: 55 };
    stateCopy.posts.push(post);
    stateCopy.newPostText = "";
    return stateCopy;
  } else if (action.type === ADD_NEW_POST_TEXT) {
    stateCopy.newPostText = action.text;
    return stateCopy;
  }

  return state;
};

export const addPostAC = () => {
  return { type: ADD_POST };
};

export const addNewPostAC = (text) => {
  return { type: ADD_NEW_POST_TEXT, text };
};

export default profileReducer;
