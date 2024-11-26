import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { SideBarContainer } from "./components/SideBar/SideBarContaier";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <SideBarContainer />
      <div className="content">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} exact />
          <Route path="/dialogs" element={<DialogsContainer />} exact />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
