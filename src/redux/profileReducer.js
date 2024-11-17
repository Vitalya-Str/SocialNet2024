const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    const post = { id: 3, post: state.newPostText, likeCount: 55 };

    state.posts.push(post);

    state.newPostText = "";
  } else if (action.type === ADD_NEW_POST_TEXT) {
    state.newPostText = action.text;
  }

  return state;
};

export default profileReducer;
