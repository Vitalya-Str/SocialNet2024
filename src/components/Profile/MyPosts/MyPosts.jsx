import Post from "./Post/Post"


const MyPosts = () => {

    return (
        <div >
            <div>
                <textarea name="MyPosts" id="">My Posts</textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            <h3>My Posts</h3>
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts