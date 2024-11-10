import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts state={props.state} addNewPostText={props.addNewPostText} addPost={props.addPost} />
        </div>

    )
}

export default Profile