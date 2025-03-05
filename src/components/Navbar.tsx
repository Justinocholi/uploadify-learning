
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              LearnlyApp
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/creators" className="text-gray-700 hover:text-primary transition-colors">
              For Creators
            </Link>
            <Link to="/learners" className="text-gray-700 hover:text-primary transition-colors">
              For Learners
            </Link>
            <Link to="/pricing" className="text-primary hover:text-primary/90 font-medium transition-colors underline underline-offset-4">
              Pricing
            </Link>
            <div className="relative">
              <button 
                onClick={toggleLanguageDropdown}
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4 mr-1" />
                <span>EN</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                    <span className="mr-2 text-lg">🇬🇧</span>
                    English
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                    <span className="mr-2 text-lg">🇪🇸</span>
                    Español
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                    <span className="mr-2 text-lg">🇫🇷</span>
                    Français
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                    <span className="mr-2 text-lg">🇩🇪</span>
                    Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Log In
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
