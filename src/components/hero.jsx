import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <header className="bg-navy text-white py-2 px-4 bg-slate-900 flex justify-between items-center text-xs sm:text-sm">
      <div className="flex items-center space-x-4">
        <span>(225) 555-0118</span>
        <span>|</span>
        <span>michelle.rivera@example.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="flex ">Follow Us and get a chance to win 80% off</span>
        <div className="flex space-x-2">
          <a href="#" className="text-white">Fb</a>
          <a href="#" className="text-white">Insta</a>
          <a href="#" className="text-white">Tw</a>
        </div>
      </div>
    </header>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-navy py-4 px-4 flex flex-col sm:flex-row justify-between items-center  text-sm relative">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h1 className="text-lg font-bold">BrandName</h1>
        <button
          className="sm:hidden text-navy focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      <ul
        className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 ${menuOpen ? "block" : "hidden sm:flex"}`}
      >
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">About</a></li>
        <li><a href="#" className="hover:text-blue-500">Blog</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#" className="hover:text-blue-500">Pages</a></li>
      </ul>
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <button className="hidden sm:block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
        <button className="hidden sm:block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Register</button>
        <div className="relative cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21h14a2 2 0 002-2H3a2 2 0 002 2z" />
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">1</span>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Register</button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r mt-10 from-cyan-400 to-blue-200 py-16 px-4 sm:px-16 sm:py-1 sm:rounded-xl sm:mx-24 flex flex-col-reverse sm:flex-row items-center justify-between">
      <div className="space-y-4 text-center sm:text-left max-w-lg">
        <p className="text-sm text-blue-600 uppercase">Summer 2020</p>
        <h2 className="text-3xl font-bold text-navy">New Collection</h2>
        <p className="text-navy">We know how large objects will act, but things on a small scale.</p>
        <NavLink to="/Product">
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Shop Now</button>
          </NavLink>
        
      </div>
      <div className="relative mb-8 sm:mb-0">
        <img
          src="public\hero-img\hero-img.png" // Replace with your image link
          alt="Smiling woman"
          className="rounded-lg mx-auto sm:mx-0 relative"
        />
      </div>
      
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
