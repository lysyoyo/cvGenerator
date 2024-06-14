// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Hero from './components/Hero/Hero';
import TextEditor from './components/Design/TextEditor';
import EditorLayout from './layouts/EditorLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/edit" element={<EditorLayout><TextEditor /></EditorLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
