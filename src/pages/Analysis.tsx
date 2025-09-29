import React from 'react';
import { 
  CpuChipIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Analysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Analysis Results</h1>
        <p className="text-gray-600 mt-2">
          Machine learning insights and environmental impact predictions
        </p>
      </div>

      {/* AI Processing Status */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <CpuChipIcon className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">AI Processing Complete</h3>
            <p className="text-gray-600">Analysis completed with 94.2% confidence</p>
          </div>
          <div className="ml-auto">
            <CheckCircleIcon className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Environmental Impact Comparison */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Environmental Impact Comparison</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Carbon Footprint</span>
                <span className="text-sm text-green-600 font-medium">-32% improvement</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conventional: 3.8 tCO₂eq/t</span>
                  <span className="text-red-600">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Circular: 2.4 tCO₂eq/t</span>
                  <span className="text-green-600">Moderate</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Water Usage</span>
                <span className="text-sm text-green-600 font-medium">-28% improvement</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conventional: 21.2 m³/t</span>
                  <span className="text-orange-600">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Circular: 15.2 m³/t</span>
                  <span className="text-yellow-600">Moderate</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Energy Consumption</span>
                <span className="text-sm text-green-600 font-medium">-25% improvement</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conventional: 61.2 MWh/t</span>
                  <span className="text-red-600">Very High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Circular: 45.7 MWh/t</span>
                  <span className="text-orange-600">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Circularity Assessment */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Circularity Assessment</h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">87%</div>
              <div className="text-sm text-gray-600">Overall Circularity Score</div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">65%</div>
                <div className="text-xs text-gray-600">Recycled Content</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">92%</div>
                <div className="text-xs text-gray-600">Recovery Rate</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2.3x</div>
                <div className="text-xs text-gray-600">Life Extension</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">85%</div>
                <div className="text-xs text-gray-600">Resource Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">AI-Powered Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 flex items-center">
              <ChartBarIcon className="w-5 h-5 text-blue-600 mr-2" />
              Optimization Opportunities
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-medium text-blue-900 text-sm">Increase Renewable Energy</div>
                <div className="text-blue-700 text-xs mt-1">
                  Upgrading to 75% renewable energy could reduce carbon footprint by 18%
                </div>
                <div className="text-blue-600 text-xs mt-1">Confidence: 92%</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="font-medium text-green-900 text-sm">Improve Water Recycling</div>
                <div className="text-green-700 text-xs mt-1">
                  Enhanced water treatment could reduce consumption by 22%
                </div>
                <div className="text-green-600 text-xs mt-1">Confidence: 88%</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="font-medium text-purple-900 text-sm">Extend Product Lifecycle</div>
                <div className="text-purple-700 text-xs mt-1">
                  Design modifications could extend useful life by 35%
                </div>
                <div className="text-purple-600 text-xs mt-1">Confidence: 76%</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 flex items-center">
              <ExclamationTriangleIcon className="w-5 h-5 text-orange-600 mr-2" />
              Risk Factors & Alerts
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="font-medium text-yellow-900 text-sm">Supply Chain Vulnerability</div>
                <div className="text-yellow-700 text-xs mt-1">
                  Single-source dependency for 40% of recycled materials
                </div>
                <div className="text-yellow-600 text-xs mt-1">Risk Level: Medium</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="font-medium text-red-900 text-sm">Regulatory Compliance</div>
                <div className="text-red-700 text-xs mt-1">
                  New emissions standards may require process updates by 2026
                </div>
                <div className="text-red-600 text-xs mt-1">Risk Level: High</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="font-medium text-orange-900 text-sm">Market Fluctuation</div>
                <div className="text-orange-700 text-xs mt-1">
                  Recycled material prices showing 15% volatility
                </div>
                <div className="text-orange-600 text-xs mt-1">Risk Level: Medium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;