import s from "./Header.module.css";
import logo from "../../images/user.png";
import { NavLink } from "react-router-dom";

const Header = ({login}) => {

  return (
    <div className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.link}>
        <NavLink to={"/login"}> {login ? login : "Login"} </NavLink>
      </div>
    </div>
  );
};

export default Header;
