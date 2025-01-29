// import React from 'react';
import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ShopHeader = () => (
  <div className="bg-green-700 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <FaPhone className="mr-2" /> (225) 555-0118
        <FaEnvelope className="ml-4 mr-2" /> michelle.rivera@example.com
      </div>
      <div className="text-center">
        Follow Us and get a chance to win 80% off!
      </div>
      <div className="flex items-center">
        Follow Us : 
        <FaInstagram className="ml-2" />
        <FaYoutube className="ml-2" />
        <FaTwitter className="ml-2" />
      </div>
    </div>
  </div>
);

export default ShopHeader;