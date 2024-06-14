// src/components/Header/EditorHeader.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditorHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light editor-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Editor</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Ajoutez des éléments de navigation spécifiques à l'éditeur ici */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EditorHeader;
