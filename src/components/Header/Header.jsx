import s from './Header.module.css'
import logo from '../../images/user.png'

const Header = () => {

    return (
        <div className={s.header}>
            <img src= {logo} alt="logo" />
        </div>
    )
}

export default Header