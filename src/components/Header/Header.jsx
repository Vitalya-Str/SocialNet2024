import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {Button, Col, Row} from "antd";
import React from "react";

const Header = ({ login, Logout, isAuth }) => {


    return (
        <div className={s.header}>

            <div className={s.link}>
                {isAuth ? (
                    <Row>
                        <Col span={10} push={6}>
                            <Button type="primary" onClick={Logout}>
                                Log out
                            </Button>
                        </Col>
                        <Col span={10} pull={18} className={s.login} >
                            {login}
                        </Col>
                    </Row>
                ) : (
                    <NavLink to={"/login"}> Login </NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
