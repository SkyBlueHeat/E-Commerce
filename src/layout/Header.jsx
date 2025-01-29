import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      <header>
        {/* Top section for phone and email */}
        <motion.div 
          className="bg-slate-700 text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Section - Phone and Email */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
              <a href="tel:(225)555-0118" className="text-sm md:text-base">
                (225) 555-0118
              </a>
              <a
                href="mailto:michelle.rivera@example.com"
                className="text-sm md:text-base"
              >
                michelle.rivera@example.com
              </a>
              <motion.h1 
                className="text-sm md:text-base mt-2 md:mt-0 md:ml-6 text-center"
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              >
                Follow us and get a chance to win 80% off
              </motion.h1>
            </div>

            {/* Right Section - Social Media Icons */}
            <div className="flex justify-center md:justify-end items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Navbar section */}
      <nav className="py-4 pt-8">
        <motion.div 
          className="container mx-auto px-6 flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Logo */}
          <motion.h1 
            className="text-xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Bandage
          </motion.h1>
          
          {/* Desktop Menu Items */}
          <div className="lg:flex hidden space-x-6 text-gray-600 relative flex-grow justify-center">
            <ul className="flex space-x-6">
              <motion.li whileHover={{ scale: 1.2,  }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <a href="/" className="hover:underline text-xl">Home</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2,  }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <a href="/shop" className="hover:underline text-xl">Explore</a>
              </motion.li>
              <motion.li 
                className="relative" 
                transition={{ duration: 0.3 }}
              >
                <button
                
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="hover:underline focus:outline-none text-xl"
                >
                  Shop ˅
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute top-full mt-2 bg-white border rounded shadow-lg w-80 flex right-0 z-20"
                  >
                    <ul className="w-1/2 border-r">
                      <li className="px-4 py-2 font-bold">Men</li>
                      <motion.li whileHover={{ }}><a href="/shop/men/bags" className="block px-4 py-2 hover:bg-gray-100">Bags</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/men/belts" className="block px-4 py-2 hover:bg-gray-100">Belts</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/men/cosmetics" className="block px-4 py-2 hover:bg-gray-100">Cosmetics</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/men/parfume" className="block px-4 py-2 hover:bg-gray-100">Parfume</a></motion.li>
                    </ul>
                    <ul className="w-1/2">
                      <li className="px-4 py-2 font-bold">Women</li>
                      <motion.li whileHover={{ }}><a href="/shop/women/bags" className="block px-4 py-2 hover:bg-gray-100">Bags</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/women/belts" className="block px-4 py-2 hover:bg-gray-100">Belts</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/women/cosmetics" className="block px-4 py-2 hover:bg-gray-100">Cosmetics</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/women/watch" className="block px-4 py-2 hover:bg-gray-100">Watch</a></motion.li>
                      <motion.li whileHover={{ }}><a href="/shop/women/parfume" className="block px-4 py-2 hover:bg-gray-100">Parfume</a></motion.li>
                    </ul>
                  </div>
                )}
              </motion.li>
              <motion.li whileHover={{ scale: 1.2,  }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <a href="#" className="hover:underline text-xl">About</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2, }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <a href="#" className="hover:underline text-xl">Blog</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2,  }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <a href="#" className="hover:underline text-xl">Contact</a>
              </motion.li>
            </ul>
          </div>

          {/* Login/Register */}
          <motion.div 
            className="flex space-x-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="text-gray-600 hover:underline">Login / Register</a>
          </motion.div>
        </motion.div>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <motion.button
        className={`lg:hidden text-gray-600 p-2 rounded ${isMobileMenuOpen ? 'bg-white' : 'bg-transparent'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white w-full absolute top-64 left-0 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-600">
            <li><a href="/" className="hover:underline text-xl">Home</a></li>
            <li 
              className="relative"
            >
              <button 
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="text-xl hover:underline"
              >
                Shop ˅
              </button>
              {isMobileDropdownOpen && (
                <div className="absolute left-0 bg-white border rounded shadow-lg w-80">
                  <ul>
                    <li className="px-4 py-2 font-bold">Men</li>
                    <motion.li><a href="/shop/men/bags" className="block px-4 py-2 hover:bg-gray-100">Bags</a></motion.li>
                    <motion.li><a href="/shop/men/belts" className="block px-4 py-2 hover:bg-gray-100">Belts</a></motion.li>
                    <motion.li><a href="/shop/men/cosmetics" className="block px-4 py-2 hover:bg-gray-100">Cosmetics</a></motion.li>
                    <motion.li><a href="/shop/men/parfume" className="block px-4 py-2 hover:bg-gray-100">Parfume</a></motion.li>
                  </ul>
                  <ul>
                    <li className="px-4 py-2 font-bold">Women</li>
                    <motion.li><a href="/shop/women/bags" className="block px-4 py-2 hover:bg-gray-100">Bags</a></motion.li>
                    <motion.li><a href="/shop/women/belts" className="block px-4 py-2 hover:bg-gray-100">Belts</a></motion.li>
                    <motion.li><a href="/shop/women/cosmetics" className="block px-4 py-2 hover:bg-gray-100">Cosmetics</a></motion.li>
                    <motion.li><a href="/shop/women/watch" className="block px-4 py-2 hover:bg-gray-100">Watch</a></motion.li>
                    <motion.li><a href="/shop/women/parfume" className="block px-4 py-2 hover:bg-gray-100">Parfume</a></motion.li>
                  </ul>
                </div>
              )}
            </li>
            <li><a href="#" className="hover:underline text-xl">About</a></li>
            <li><a href="#" className="hover:underline text-xl">Blog</a></li>
            <li><a href="#" className="hover:underline text-xl">Contact</a></li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
