// src/layouts/EditorLayout.js
import React from 'react';
import EditorHeader from '../components/Header/EditorHeader';
import Sidebar from '../components/Sidebar/Sidebar';
import './EditorLayout.css'; // Ajoutez ce fichier CSS pour le style spécifique à ce layout

const EditorLayout = ({ children }) => {
  return (
    <div className="editor-layout">
      <EditorHeader />
      <div className="editor-body">
        <Sidebar />
        <div className="editor-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
