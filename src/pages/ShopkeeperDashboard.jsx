import React from 'react';
import { Link } from 'react-router-dom';
import './ShopkeeperDashboard.css';

const ShopkeeperDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Shopkeeper Dashboard</h2>
      <Link to="/nearby-requests">Nearby Requests</Link>
    </div>
  );
};

export default ShopkeeperDashboard;
