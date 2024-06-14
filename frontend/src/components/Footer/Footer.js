// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row flex_s">
          <div className="col-md-2">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li><a href="#">Curved text generator</a></li>
              <li><a href="#">Photo effects</a></li>
              <li><a href="#">Image enhancer</a></li>
              <li><a href="#">Add frames to photos</a></li>
              <li><a href="#">Add text to photos</a></li>
              <li><a href="#">Online video recorder</a></li>
              <li><a href="#">Video trimmer</a></li>
              <li><a href="#">Convert videos to MP4</a></li>
              <li><a href="#">See more features</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><a href="#">Design ideas</a></li>
              <li><a href="#">Custom prints</a></li>
              <li><a href="#">Font pairing</a></li>
              <li><a href="#">Colors</a></li>
              <li><a href="#">Color wheel</a></li>
              <li><a href="#">Color palette generator</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Apps</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li><a href="#">Online communities</a></li>
              <li><a href="#">Creators</a></li>
              <li><a href="#">Canva Represents Fund</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Affiliates program</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Download</h5>
            <ul className="list-unstyled">
              <li><a href="#">iOS</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Windows</a></li>
              <li><a href="#">Mac</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Step Two</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Trust Center</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Terms and Privacy</a></li>
              <li><a href="#">Contact Sales</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
