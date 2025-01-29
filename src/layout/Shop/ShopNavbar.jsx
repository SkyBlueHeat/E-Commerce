/* eslint-disable react/prop-types */

import { FaBars } from 'react-icons/fa';

const ShopNavbar = ({ toggleMenu }) => (
  <nav className="bg-white p-4 shadow">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Bandage</div>
      <div className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="#" className="font-bold hover:text-blue-500">Shop</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Blog</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
        <a href="#" className="hover:text-blue-500">Pages</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FaBars className="text-2xl" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-blue-500">Login / Register</a>
      </div>
    </div>
  </nav>
);

export default ShopNavbar;