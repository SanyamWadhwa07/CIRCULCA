import React, { useState } from 'react';
import { 
  BeakerIcon,
  BoltIcon,
  TruckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const LCAInput: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('aluminum');
  const [processType, setProcessType] = useState('circular');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">LCA Data Input</h1>
        <p className="text-gray-600 mt-2">
          Enter process parameters for life cycle assessment analysis
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Material Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Material Selection</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Type
                </label>
                <select 
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="aluminum">Aluminum</option>
                  <option value="copper">Copper</option>
                  <option value="steel">Steel</option>
                  <option value="lithium">Lithium</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Process Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setProcessType('conventional')}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      processType === 'conventional'
                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Conventional
                  </button>
                  <button
                    onClick={() => setProcessType('circular')}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      processType === 'circular'
                        ? 'bg-green-50 border-green-300 text-green-700'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Circular
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Process Parameters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Process Parameters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Production Volume (tonnes/year)
                </label>
                <input
                  type="number"
                  placeholder="10000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Energy Source Mix
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-600">Renewable (%)</label>
                    <input
                      type="number"
                      placeholder="60"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Fossil (%)</label>
                    <input
                      type="number"
                      placeholder="40"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <BeakerIcon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Raw Materials</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Primary Content (%)</label>
              <input type="number" placeholder="35" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Recycled Content (%)</label>
              <input type="number" placeholder="65" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BoltIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Energy & Processing</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Energy (MWh/t)</label>
              <input type="number" placeholder="45.7" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Water (m³/t)</label>
              <input type="number" placeholder="15.2" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TruckIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Transport</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Distance (km)</label>
              <input type="number" placeholder="500" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Mode</label>
              <select className="w-full p-2 border rounded">
                <option>Truck</option>
                <option>Rail</option>
                <option>Ship</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <ArrowPathIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">End of Life</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Recycling (%)</label>
              <input type="number" placeholder="70" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Reuse (%)</label>
              <input type="number" placeholder="25" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Run AI Analysis
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
          Save Draft
        </button>
      </div>
    </div>
  );
};

export default LCAInput;