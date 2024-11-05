import s from './MyPosts.module.css'
import Posts from './Post/Posts'


const MyPosts = () => {

    return (
        <div >
            <textarea name="MyPosts" id="">My Posts</textarea>
           <div><button>Send</button></div> 
           <Posts/>
           <Posts/>
        </div>
    )
}

export default MyPosts