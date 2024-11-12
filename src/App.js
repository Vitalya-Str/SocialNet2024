
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import { Routes, Route } from 'react-router-dom'


const App = (props) => {
  return <div className='container'>
    <Header />
    <SideBar state={props.store.state.sideBar} />
    <div className='content'>
      <Routes>
        <Route path="/profile" element={<Profile state={props.store.state.profilePage} addNewPostText={props.store.addNewPostText} addPost={props.store.addPost} />} exact />
        <Route path="/dialogs" element={<Dialogs state={props.store.state.dialogsPage} />} exact />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  </div>
}

export default App;
