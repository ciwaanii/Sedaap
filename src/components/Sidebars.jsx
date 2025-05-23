// components/Sidebars.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/error/400">Error 400</Link></li>
      <li><Link to="/error/401">Error 401</Link></li>
      <li><Link to="/error/403">Error 403</Link></li>
      <li><Link to="/error/404">Error 404</Link></li>
    </ul>
  </div>
);

export default Sidebar;
