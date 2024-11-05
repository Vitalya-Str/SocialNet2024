import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {

    return (
        <div className={s.container}>
            <div >
                <img className={s.images} src="https://img1.akspic.ru/previews/5/3/0/9/7/179035/179035-voda-gora-gidroresursy-rastenie-oblako-500x.jpg" alt="img" />
            </div>
            <div  >
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile