import React, {useEffect} from "react";
import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {connect} from "react-redux";
import Preloader from "./common/Preloader/Preloader";
import {autorizedTh} from "./redux/appReducer";
import {Users} from "./components/Users/Users";
import {Col, Layout, Menu, Row, theme} from 'antd';
import Logo from "./images/user.png";
import {ChatPage} from "./ChatPage/ChatPage";

const {Header, Content, Sider} = Layout;


const App = ({autorizedTh, autorized}) => {
    useEffect(() => {
        autorizedTh();
    });


    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    if (!autorized) {
        return <Preloader/>
    }
    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={18} push={6}>
                        <HeaderContainer/>
                    </Col>
                    <Col span={6} pull={18}>
                        <img style={{width: '50px'}} src={Logo} alt="logo"/>
                    </Col>
                </Row>

            </Header>
            <Layout>
                <Sider width={200} style={{background: colorBgContainer}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                        items={[
                            {
                                key: '1',
                                icon: <Link to="/profile">Profile</Link>,

                            },
                            {
                                key: '2',
                                icon: <Link to="/dialogs">Messages</Link>,

                            },
                            {
                                key: '3',
                                icon: <Link to="/users">Users</Link>,

                            },
                            {
                                key: '4',
                                icon: <Link to="/chatPage">Chat</Link>,

                            }

                        ]}
                    >

                    </Menu>

                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>} exact/>
                            <Route path="/dialogs" element={<DialogsContainer/>} exact/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/chatPage" element={<ChatPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Layout>

    );
};

const mapStateToProps = (state) => ({
    autorized: state.app.autorized,
});

export default connect(mapStateToProps, {autorizedTh})(App);
