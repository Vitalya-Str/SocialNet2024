import { NavLink } from 'react-router-dom'
import s from './SideBar.module.css'
import Friends from './Friends/Friends'

const active = (navData) => navData.isActive ? s.active : ""

const SideBar = (props) => {

    const friendsItem = props.state.map(f => <Friends key = {f.id} id={f.id} name ={f.name} />)

    return (
        <div className={s.sidebar}>
            <div className={s.style}>
                <NavLink to="/profile" className={active}  >Profile</NavLink>
            </div>
            <div className={s.style}>
                <NavLink to="/dialogs" className={active}>Messages</NavLink>
            </div>
            <div className={s.style}>
                <NavLink to="/users" className={active}>Users</NavLink>
            </div>
            <div>
            <h3>Friends:</h3>
                {friendsItem}
            </div>

        </div>
    )
}

export default SideBar