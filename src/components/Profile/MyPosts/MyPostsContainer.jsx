import { addNewPostAC, addPostAC } from "../../../redux/profileReducer";
import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostAC());
  };

  const addNewPost = (text) => {
    props.dispatch(addNewPostAC(text));
  };

  return <MyPosts state={props.state} addPost={addPost} addNewPost={addNewPost} />;
};

export default MyPostsContainer;
