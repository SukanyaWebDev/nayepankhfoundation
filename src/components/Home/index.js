import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar';
import './index.css';

const Home = () => {
  const personName = localStorage.getItem('personName');

  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <div className="navbar">
          <span>Welcome, {personName}</span>
          <Link to="/profile" className="nav-item">Profile</Link>
          <Link to="/logout" className="nav-item">Logout</Link>
        </div>
        <div className="welcome-page">
          <h1>{personName}  Welcome to DonationApp</h1>
          <p>This is the home page content.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
