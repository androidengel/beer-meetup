import React from 'react';
import { Link } from 'react-router-dom';

const members = () => (
  <div>
    <h1>MEMBERS</h1>
    <Link to="/members/request">
      <button type="button">+Request Member</button>
    </Link>
  </div>
);

export default members;
