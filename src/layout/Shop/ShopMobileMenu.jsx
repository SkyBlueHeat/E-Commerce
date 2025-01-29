// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

const MobileMenu = () => (
  <div className="md:hidden mt-2">
    <ul className="flex flex-col space-y-2">
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Home</a></li>
      <li><a href="#" className="block py-2 px-4 font-bold hover:bg-gray-200">Shop</a></li>
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">About</a></li>
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Blog</a></li>
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Contact</a></li>
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Pages</a></li>
    </ul>
  </div>
);

export default MobileMenu;