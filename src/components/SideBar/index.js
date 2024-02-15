import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/">  <img src="https://th.bing.com/th/id/OIP.NE2zEeDwfsGKDte5HPgKfAAAAA?rs=1&pid=ImgDetMain" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navigation">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/transactions" className="nav-item">Transactions</Link>
        <Link to="/start-here" className="nav-item">Start Here</Link>
        <Link to="/faq" className="nav-item">FAQ</Link>
        <Link to="/learning-modules" className="nav-item">Learning Modules</Link>
        <Link to="/rewards" className="nav-item">Rewards</Link>
      </div>
    </div>
  );
}

export default Sidebar;
