import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            AI-Driven Life Cycle Assessment
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Advancing Circularity and Sustainability in Metallurgy and Mining
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Research Team</div>
              <div className="text-xs text-gray-500">BRUTE FORCE 0001</div>
            </div>
            <UserCircleIcon className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;