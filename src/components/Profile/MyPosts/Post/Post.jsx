import s from './Post.module.css'

const Post = (props) => {

    
    return (
        <div >
            <img className={s.ava} src="https://halifaxbloggers.ca/flawintheiris/wp-content/uploads/sites/7/2020/10/Ava9.jpg" alt="ava" />
           <b>{props.post}</b> 
            <div>{props.likeCount}</div>
        </div>
    )
}

export default Post