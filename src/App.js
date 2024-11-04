
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';


const App = () => {
  return <div className='container'>
    <Header />
    <SideBar />
    <div className='content'>
      <Profile />
    </div>
  </div>
}

export default App;
