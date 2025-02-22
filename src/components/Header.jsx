import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { user, logout } = useUser();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-500">
            E-Commerce
          </Link>

          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <button className="text-gray-600 hover:text-blue-500">
                  <FontAwesomeIcon icon={faSearch} className="text-xl" />
                </button>
                <Link to="/favorites" className="text-gray-600 hover:text-blue-500">
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                </Link>
                <Link to="/cart" className="text-gray-600 hover:text-blue-500">
                  <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                    <FontAwesomeIcon icon={faUser} className="text-xl" />
                    <span>{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Orders
                    </Link>
                    <button
                      onClick={logout}
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
        </div>
      </div>
    </header>
  );
} 