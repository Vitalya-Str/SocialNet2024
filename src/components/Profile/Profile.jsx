import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {

    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts />
        </div>

    )
}

export default Profile