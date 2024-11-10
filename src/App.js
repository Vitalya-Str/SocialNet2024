
import React from 'react';
import './App.css';
import state from './redux/state';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return <div className='container'>

    <Header />
    <SideBar />
    <div className='content'>
      <Routes>
        <Route path="/profile" element={<Profile state = {state.profilePage} />} exact />
        <Route path="/dialogs" element={<Dialogs state ={state.dialogsPage} />} exact />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  </div>
}

export default App;
