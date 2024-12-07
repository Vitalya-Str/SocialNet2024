import s from "./Header.module.css";
import logo from "../../images/user.png";
import { NavLink } from "react-router-dom";

const Header = ({ login, Logout, isAuth }) => {
  return (
    <div className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.link}>
        {isAuth ? (
          <div>
            {login}
            <button onClick={Logout} className={s.btn}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}> Login </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
