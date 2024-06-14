// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Ajoutez ce fichier CSS pour le style spécifique à cette sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li><a href="#">Templates</a></li>
        <li><a href="#">Elements</a></li>
        <li><a href="#">Brand</a></li>
        <li><a href="#">Uploads</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Apps</a></li>
        <li><a href="#">CV</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
