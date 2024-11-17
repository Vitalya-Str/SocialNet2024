import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <SideBar state={props.state.sideBar} />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} exact />
          <Route path="/dialogs" element={<DialogsContainer state={props.state.dialogsPage} dispatch={props.dispatch} />} exact />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
