import { addNewPostAC, addPostAC } from "../../../redux/profileReducer";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const PostsElement = props.state.posts.map((p) => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostAC());
  };

  const addNewPost = () => {
    const text = newPostElement.current.value;
    props.dispatch(addNewPostAC(text));
  };

  return (
    <div>
      <h3>My Posts</h3>

      <div>
        <textarea onChange={addNewPost} name="MyPosts" ref={newPostElement} value={props.state.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Send</button>
      </div>

      {PostsElement}
    </div>
  );
};

export default MyPosts;
