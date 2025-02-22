import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  };

  const formVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    navigate('/');
  };

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
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <Link to="/" className="hover:underline text-xl">Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <Link to="/shop" className="hover:underline text-xl">Shop</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <Link to="/about" className="hover:underline text-xl">About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <Link to="/blog" className="hover:underline text-xl">Blog</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                <Link to="/contact" className="hover:underline text-xl">Contact</Link>
              </motion.li>
            </ul>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faSearch} className="text-xl" />
                </motion.button>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link to="/favorites" className="text-gray-600 hover:text-blue-500">
                    <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link to="/cart" className="text-gray-600 hover:text-blue-500">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                  </Link>
                </motion.div>
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-xl" />
                    <span>{user.name}</span>
                  </motion.button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-50">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              >
                Login / Register
              </Link>
            )}
          </div>
        </motion.div>
      </nav>

      {/* Auth Modal */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAuthModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-full max-w-md relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsAuthModalOpen(false)}
              >
                ✕
              </button>

              {/* Form Container */}
              <div className="overflow-hidden">
                <AnimatePresence initial={false} custom={isLoginView ? 1 : -1}>
                  {isLoginView ? (
                    <motion.div
                      key="login"
                      custom={1}
                      variants={formVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                    >
                      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Password</label>
                          <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                          Login
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="register"
                      custom={-1}
                      variants={formVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                    >
                      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Password</label>
                          <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                          <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Confirm your password"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                          Register
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle Button */}
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setIsLoginView(!isLoginView)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    {isLoginView ? "Need an account? Register" : "Already have an account? Login"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.button
        className="lg:hidden text-gray-600 p-2 rounded fixed top-4 right-4 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-white z-40 pt-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <div className="p-4">
            <ul className="space-y-4">
              <li><Link to="/" className="text-xl">Home</Link></li>
              <li><Link to="/shop" className="text-xl">Shop</Link></li>
              <li><Link to="/about" className="text-xl">About</Link></li>
              <li><Link to="/blog" className="text-xl">Blog</Link></li>
              <li><Link to="/contact" className="text-xl">Contact</Link></li>
              {user && (
                <>
                  <li><Link to="/profile" className="text-xl">Profile</Link></li>
                  <li><Link to="/orders" className="text-xl">Orders</Link></li>
                  <li>
                    <button onClick={handleLogout} className="text-xl text-red-500">
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}
