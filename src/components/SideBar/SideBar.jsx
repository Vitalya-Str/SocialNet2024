import s from './SideBar.module.css'

const SideBar = () => {

    return (
        <div className={s.sidebar}>
            <div><a href="">Profile</a></div>
            <div><a href="">Dialogs</a></div>
            <div><a href="">Users</a></div>
        </div>
    )
}

export default SideBar