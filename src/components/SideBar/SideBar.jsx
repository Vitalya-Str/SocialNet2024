import { NavLink } from 'react-router-dom'
import s from './SideBar.module.css'

const active=(navData)=> navData.isActive ? s.active : ""

const SideBar = () => {

    return (
        <div className={s.sidebar}>
            <div className={s.style}>
                <NavLink to="/profile" className ={active}  >Profile</NavLink>
            </div>
            <div className={s.style}>
                <NavLink to="/dialogs"className={active}>Messages</NavLink>
            </div>
            <div className={s.style}>
                <NavLink to="/users" className={active}>Users</NavLink>
            </div>
        </div>
    )
}

export default SideBar