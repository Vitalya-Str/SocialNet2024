import Post from "./Post/Post"


const MyPosts = (props) => {
    

    const PostsElement = props.state.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />)


    return (
        <div >
            <h3>My Posts</h3>

            <div>
                <textarea name="MyPosts" id="">My Posts</textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            {PostsElement}
        </div>
    )
}

export default MyPosts