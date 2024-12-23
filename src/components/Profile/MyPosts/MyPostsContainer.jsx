import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {actionAC} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(actionAC.addPostAC());
    },
    addNewPost: (text) => {
      dispatch(actionAC.addNewPostAC(text));
    },
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
