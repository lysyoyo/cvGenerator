// src/components/Hero.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero text-center py-5">
      <h1 className="display-4">
        What will you <span className="text-primary">design</span> today?
      </h1>
      <p className="lead">
        Canva makes it easy to create professional designs and to share or print them.
      </p>
      <Link to="/create" className="btn btn-primary btn-lg">Start designing</Link>
    </div>
  );
};

export default Hero;
