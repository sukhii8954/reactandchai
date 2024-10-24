import React from 'react';
import linkdedinIcon from '../Assests/icons/linkedin.png'
import instaIcon from  '../Assests/icons/insta.png'
import twitterIcon from '../Assests/icons/X.png'
import youtubeIcon from '../Assests/icons/yt.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        {/* About Us Section */}
        <div className="flex-1 min-w-[200px] mb-8">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a className="text-gray-300 hover:text-white transition" href="#">Our Story</a></li>
            <li><a className="text-gray-300 hover:text-white transition" href="#">Terms & Conditions</a></li>
            <li><a className="text-gray-300 hover:text-white transition" href="#">Privacy & Cookies</a></li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="flex-1 min-w-[200px] mb-8">
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a className="text-gray-300 hover:text-white transition" href="#">Projects</a></li>
            <li><a className="text-gray-300 hover:text-white transition" href="#">Metrics</a></li>
            <li><a className="text-gray-300 hover:text-white transition" href="#">Surveys</a></li>
            <li><a className="text-gray-300 hover:text-white transition" href="#">Ideas</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex-1 min-w-[200px] mb-8">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><img src= {linkdedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src={instaIcon} alt="YouTube" className="w-6 h-6" /></a>
            <a href="#"><img src={twitterIcon} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src={youtubeIcon} alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex-1 min-w-[200px] mb-8">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: <a className="text-gray-300 hover:text-white transition" href="mailto:contact@makerble.com">contact@makerble.com</a></p>
          <p>Phone: 020 8123 6253</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 pt-6 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
