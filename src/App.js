
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import { Routes, Route } from 'react-router-dom'
import { addPost } from './redux/state';


const App = (props) => {
  return <div className='container'>
    <Header />
    <SideBar state={props.state.sideBar} />
    <div className='content'>
      <Routes>
        <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={addPost} />} exact />
        <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} exact />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  </div>
}

export default App;
