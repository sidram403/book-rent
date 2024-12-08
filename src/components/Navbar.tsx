import { Home, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-2xl font-bold text-emerald-500">Makaan</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-emerald-500' : 'text-gray-700'} hover:text-emerald-500`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-emerald-500' : 'text-gray-700'} hover:text-emerald-500`}
            >
              ABOUT
            </Link>
            <Link 
              to="/properties" 
              className={`${isActive('/properties') ? 'text-emerald-500' : 'text-gray-700'} hover:text-emerald-500`}
            >
              PROPERTIES
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-emerald-500' : 'text-gray-700'} hover:text-emerald-500`}
            >
              CONTACT
            </Link>
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600">
              SignIn
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 ${isActive('/') ? 'text-emerald-500' : 'text-gray-700'}`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 ${isActive('/about') ? 'text-emerald-500' : 'text-gray-700'}`}
            >
              ABOUT
            </Link>
            <Link 
              to="/properties" 
              className={`block px-3 py-2 ${isActive('/properties') ? 'text-emerald-500' : 'text-gray-700'}`}
            >
              PROPERTIES
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 ${isActive('/contact') ? 'text-emerald-500' : 'text-gray-700'}`}
            >
              CONTACT
            </Link>
            <div className="px-3 py-2">
              <button className="w-full bg-emerald-500 text-white px-6 py-2 rounded-md">
                SignIn
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}