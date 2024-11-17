import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const PostsElement = props.posts.map((p) => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />);

  const newPostElement = React.createRef();

  const addNewPost = () => {
    const text = newPostElement.current.value;
    props.addNewPost(text);
  };

  return (
    <div>
      <h3>My Posts</h3>

      <div>
        <textarea onChange={addNewPost} name="MyPosts" ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={props.addPost}>Send</button>
      </div>

      {PostsElement}
    </div>
  );
};

export default MyPosts;
