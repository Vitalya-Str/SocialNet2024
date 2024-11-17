import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import { Routes, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { SideBarContainer } from "./components/SideBar/SideBarContaier";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <SideBarContainer />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/dialogs" element={<DialogsContainer />} exact />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
