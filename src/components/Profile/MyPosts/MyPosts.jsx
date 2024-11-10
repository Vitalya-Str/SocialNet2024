import Post from "./Post/Post"
import React from "react"


const MyPosts = (props) => {

    const PostsElement = props.state.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />)

    const newPostElement = React.createRef()

    const addPost = () => {
        
        const text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div >
            <h3>My Posts</h3>

            <div>
                <textarea name="MyPosts" ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addPost} >Send</button>
            </div>
            {PostsElement}
        </div>
    )
}

export default MyPosts