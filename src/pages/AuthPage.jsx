import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { register, login, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
      setIsLoginView(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const containerVariants = {
    login: { backgroundColor: '#fff' },
    register: { backgroundColor: '#3B82F6' }
  };

  const slideVariants = {
    login: { x: '0%' },
    register: { x: '100%' }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-white">
      {error && (
        <div className="absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div className="w-[1000px] h-[600px] flex shadow-2xl rounded-2xl overflow-hidden relative bg-white">
        {/* Forms Container */}
        <motion.div 
          className="w-full h-full flex relative"
          animate={isLoginView ? 'login' : 'register'}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          {/* Login Form */}
          <motion.div
            key="login"
            className={`w-1/2 p-12 absolute ${isLoginView ? 'left-0' : 'right-0'}`}
            variants={formVariants}
            initial="hidden"
            animate={isLoginView ? "visible" : "hidden"}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 1 }}
          >
            <div className="max-w-md w-full space-y-8 mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-center text-gray-900">Sign in</h2>
              </div>

              {/* Social Login Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border-2 border-gray-300 text-gray-600 hover:border-gray-400"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border-2 border-gray-300 text-gray-600 hover:border-gray-400"
                >
                  <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border-2 border-gray-300 text-gray-600 hover:border-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="text-center text-sm text-gray-500">
                or use your account
              </div>

              <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
                    Forgot your password?
                  </a>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    SIGN IN
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Register Form */}
          <motion.div
            key="register"
            className={`w-1/2 p-12 absolute ${isLoginView ? 'right-0' : 'left-0'}`}
            variants={formVariants}
            initial="hidden"
            animate={!isLoginView ? "visible" : "hidden"}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 1 }}
          >
            <div className="max-w-md w-full space-y-8 mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-center text-white">Create Account</h2>
              </div>

              {/* Social Register Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="text-center text-sm text-white">
                or use your email for registration
              </div>

              <form onSubmit={handleRegister} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-white bg-blue-400 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-white bg-blue-400 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-white bg-blue-400 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full flex justify-center py-3 px-4 border-2 border-white text-sm font-medium rounded-lg text-blue-500 bg-white hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    SIGN UP
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Sliding Panel */}
          <motion.div
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-center overflow-hidden"
            animate={isLoginView ? 'login' : 'register'}
            variants={slideVariants}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            style={{ zIndex: 2, right: isLoginView ? '0' : '50%' }}
          >
            <div className="px-12 text-center">
              {isLoginView ? (
                <>
                  <h1 className="text-4xl font-bold mb-6">Hello, Friend!</h1>
                  <p className="mb-8 text-lg">
                    Enter your personal details and start journey with us
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLoginView(false)}
                    className="border-2 border-white px-10 py-2 rounded-full hover:bg-white hover:text-blue-500 transition-colors duration-300"
                  >
                    SIGN UP
                  </motion.button>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
                  <p className="mb-8 text-lg">
                    To keep connected with us please login with your personal info
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLoginView(true)}
                    className="border-2 border-white px-10 py-2 rounded-full hover:bg-white hover:text-blue-500 transition-colors duration-300"
                  >
                    SIGN IN
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 