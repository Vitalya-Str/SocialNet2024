import React, {useEffect} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {SideBarContainer} from "./components/SideBar/SideBarContaier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {connect} from "react-redux";
import Preloader from "./common/Preloader/Preloader";
import {autorizedTh} from "./redux/appReducer";
import {Users} from "./components/Users/Users";

const App = ({ autorizedTh, autorized }) => {
  useEffect(() => {
    autorizedTh();
  });

  if (!autorized) {
    return <Preloader/>
  }
    return (
      <div className="container">
        <HeaderContainer />
        <SideBarContainer />
        <div className="content">
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} exact />
            <Route path="/dialogs" element={<DialogsContainer />} exact />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => ({
  autorized: state.app.autorized,
});

export default connect(mapStateToProps, { autorizedTh })(App);
