import React from 'react';
import { Link } from 'react-router-dom';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Buyer Dashboard</h2>
      <Link to="/create-request">Create Request</Link>
      <Link to="/my-requests">My Requests</Link>
    </div>
  );
};

export default BuyerDashboard;
