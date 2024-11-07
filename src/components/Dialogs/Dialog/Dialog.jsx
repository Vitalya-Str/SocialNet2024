import { NavLink } from "react-router-dom"
import s from './Dialog.module.css'



const Dialog = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog