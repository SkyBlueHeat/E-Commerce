import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchWithToken = async (url) => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    throw new Error('Token not found');
  }
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await response.json();
  return data;
};

export default function HomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail');

    if (!authToken) {
      navigate('/home');  
    } else {
      setUser({ email: userEmail });
     
      fetchUserData();
    }
  }, [navigate]);  

  const fetchUserData = async () => {
    try {
      const data = await fetchWithToken('http://localhost:5173/user');
      console.log('User Data:', data); 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
   
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');

    
    setUser(null);

   
    navigate('/home');
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {user && (
        <div className="bg-slate-900 text-white w-64 p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Welcome</h2>
            <p>{user.email}</p>
          </div>
        </div>
      )}

      <div className="flex-1">
        <header className="bg-slate-900 text-white py-2 px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-4">
            <span>(225) 555-0118</span>
            <span>|</span>
            <span>michelle.rivera@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex">Follow Us and get a chance to win 80% off</span>
            <div className="flex space-x-2">
              <a href="#" className="text-white">Fb</a>
              <a href="#" className="text-white">Insta</a>
              <a href="#" className="text-white">Tw</a>
            </div>
          </div>
        </header>

        <Navbar user={user} handleLogout={handleLogout} handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
        <HeroSection />
      </div>
    </div>
  );
}

const Navbar = ({ user, handleLogout, handleLoginClick, handleRegisterClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-navy py-4 px-4 flex justify-between items-center text-sm relative">
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
        className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 ${menuOpen ? 'block' : 'hidden sm:flex'}`}
      >
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">About</a></li>
        <li><a href="#" className="hover:text-blue-500">Blog</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#" className="hover:text-blue-500">Pages</a></li>
      </ul>
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Logout</button>
        ) : (
          <>
            <button onClick={handleLoginClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
            <button onClick={handleRegisterClick} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Register</button>
          </>
        )}
      </div>
      {menuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 mt-4">
          {user ? (
            <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Logout</button>
          ) : (
            <>
              <button onClick={handleLoginClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
              <button onClick={handleRegisterClick} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Register</button>
            </>
          )}
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
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Shop Now</button>
      </div>
      <div className="relative mb-8 sm:mb-0">
        <img
          src="/hero-img/hero-img.png"
          alt="Smiling woman"
          className="rounded-lg mx-auto sm:mx-0 relative"
        />
      </div>
    </section>
  );
};
