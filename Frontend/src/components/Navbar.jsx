import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, BarChart2, Gavel, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/auction', icon: <Gavel className="h-5 w-5" />, text: 'Auction' },
    { to: '/teams', icon: <Users className="h-5 w-5" />, text: 'Teams' },
    { to: '/matches', icon: <Calendar className="h-5 w-5" />, text: 'Schedule' },
    { to: '/stats', icon: <BarChart2 className="h-5 w-5" />, text: 'Stats' },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8" />
            <span className="font-bold text-xl">CricketPro</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-1 hover:text-blue-200 transition"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="px-4 py-2 text-blue-200 hover:text-white transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-blue-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              <span>{link.text}</span>
            </Link>
          ))}
          <div className="border-t border-blue-700 my-2 pt-2">
            <Link
              to="/signin"
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 mt-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;