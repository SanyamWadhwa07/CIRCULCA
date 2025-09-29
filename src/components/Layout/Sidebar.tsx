import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  ArrowPathIcon,
  DocumentArrowDownIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', icon: HomeIcon, label: 'Dashboard', description: 'Overview & Analytics' },
    { path: '/input', icon: DocumentTextIcon, label: 'LCA Input', description: 'Process & Material Data' },
    { path: '/analysis', icon: ChartBarIcon, label: 'AI Analysis', description: 'ML Processing & Insights' },
    { path: '/circularity', icon: ArrowPathIcon, label: 'Circularity Flow', description: 'Material Flow Visualization' },
    { path: '/reports', icon: DocumentArrowDownIcon, label: 'Reports', description: 'Export & Documentation' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <ArrowPathIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">CircuLCA</h1>
            <p className="text-xs text-gray-500">AI-Driven LCA Tool</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 px-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-start p-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 mt-0.5 mr-3 ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <div className="text-left">
                  <div className={`font-medium text-sm ${
                    isActive(item.path) ? 'text-blue-700' : 'text-gray-900'
                  }`}>
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <CogIcon className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm font-medium text-gray-900">Settings</div>
            <div className="text-xs text-gray-500">Configure parameters</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;