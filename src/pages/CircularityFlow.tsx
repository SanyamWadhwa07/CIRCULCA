import React, { useState } from 'react';
import { 
  ArrowPathIcon,
  AdjustmentsHorizontalIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const CircularityFlow: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('aluminum');
  const [viewMode, setViewMode] = useState('sankey');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Circularity Flow Visualization</h1>
          <p className="text-gray-600 mt-2">
            Interactive material flow diagrams showing circular economy pathways
          </p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="aluminum">Aluminum</option>
            <option value="copper">Copper</option>
            <option value="steel">Steel</option>
            <option value="lithium">Lithium</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            <span>Configure</span>
          </button>
        </div>
      </div>

      {/* View Mode Selector */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">View Mode:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('sankey')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'sankey'
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sankey Diagram
            </button>
            <button
              onClick={() => setViewMode('network')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'network'
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Network View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'timeline'
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Timeline View
            </button>
          </div>
        </div>
      </div>

      {/* Main Visualization Area */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {selectedMaterial.charAt(0).toUpperCase() + selectedMaterial.slice(1)} Circular Flow
          </h3>
          <p className="text-gray-600">Material flow visualization showing circular pathways and recovery rates</p>
        </div>

        {/* Enhanced Flow Diagram */}
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-12 min-h-[600px]">
          {/* Mining/Extraction */}
          <div className="absolute top-8 left-8">
            <div className="bg-orange-100 border-2 border-orange-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="font-semibold text-orange-800">Raw Material</div>
                <div className="text-sm text-orange-600 mt-2">
                  35% Primary<br/>
                  Mining & Extraction
                </div>
                <div className="mt-3 text-xs bg-orange-200 rounded px-2 py-1">
                  2.1 tCO₂eq/t
                </div>
              </div>
            </div>
          </div>

          {/* Recycled Input */}
          <div className="absolute top-8 left-64">
            <div className="bg-green-100 border-2 border-green-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <ArrowPathIcon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-green-800">Recycled Input</div>
                <div className="text-sm text-green-600 mt-2">
                  65% Secondary<br/>
                  Post-Consumer
                </div>
                <div className="mt-3 text-xs bg-green-200 rounded px-2 py-1">
                  0.8 tCO₂eq/t
                </div>
              </div>
            </div>
          </div>

          {/* Processing */}
          <div className="absolute top-8 right-64">
            <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div className="font-semibold text-blue-800">Processing</div>
                <div className="text-sm text-blue-600 mt-2">
                  AI Optimized<br/>
                  Energy Efficient
                </div>
                <div className="mt-3 text-xs bg-blue-200 rounded px-2 py-1">
                  45.7 MWh/t
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="absolute top-8 right-8">
            <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Pr</span>
                </div>
                <div className="font-semibold text-purple-800">Products</div>
                <div className="text-sm text-purple-600 mt-2">
                  High Quality<br/>
                  Extended Life
                </div>
                <div className="mt-3 text-xs bg-purple-200 rounded px-2 py-1">
                  25 year lifespan
                </div>
              </div>
            </div>
          </div>

          {/* Use Phase */}
          <div className="absolute bottom-48 right-8">
            <div className="bg-indigo-100 border-2 border-indigo-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <EyeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-indigo-800">Use Phase</div>
                <div className="text-sm text-indigo-600 mt-2">
                  2.3x Longer Life<br/>
                  Smart Monitoring
                </div>
                <div className="mt-3 text-xs bg-indigo-200 rounded px-2 py-1">
                  IoT Enabled
                </div>
              </div>
            </div>
          </div>

          {/* End of Life */}
          <div className="absolute bottom-8 right-64">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div className="font-semibold text-gray-800">End of Life</div>
                <div className="text-sm text-gray-600 mt-2">
                  70% Recycle<br/>
                  25% Reuse<br/>
                  5% Disposal
                </div>
              </div>
            </div>
          </div>

          {/* Recovery & Processing */}
          <div className="absolute bottom-8 left-64">
            <div className="bg-cyan-100 border-2 border-cyan-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <ArrowPathIcon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-cyan-800">Recovery</div>
                <div className="text-sm text-cyan-600 mt-2">
                  92% Rate<br/>
                  High Purity
                </div>
                <div className="mt-3 text-xs bg-cyan-200 rounded px-2 py-1">
                  AI Sorting
                </div>
              </div>
            </div>
          </div>

          {/* Waste */}
          <div className="absolute bottom-8 left-8">
            <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6 w-40 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div className="font-semibold text-red-800">Waste</div>
                <div className="text-sm text-red-600 mt-2">
                  5% Disposal<br/>
                  Minimized
                </div>
                <div className="mt-3 text-xs bg-red-200 rounded px-2 py-1">
                  0.05 t/t
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrows - Enhanced with gradients */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
              </marker>
            </defs>
            {/* Main flow lines */}
            <line x1="200" y1="120" x2="320" y2="120" stroke="#374151" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="360" y1="120" x2="480" y2="120" stroke="#374151" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="520" y1="120" x2="640" y2="120" stroke="#374151" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="680" y1="160" x2="680" y2="280" stroke="#374151" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="640" y1="320" x2="520" y2="320" stroke="#374151" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="480" y1="320" x2="360" y2="320" stroke="#374151" strokeWidth="3" markerEnd="url(#arrowhead)" />
            
            {/* Circular flow */}
            <path d="M 320 360 Q 240 400 160 360" stroke="#10B981" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
            <line x1="200" y1="320" x2="200" y2="160" stroke="#10B981" strokeWidth="4" markerEnd="url(#arrowhead)" />
          </svg>
        </div>
      </div>

      {/* Flow Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
          <div className="text-sm text-gray-600">Material Recovery Rate</div>
          <div className="text-xs text-gray-500 mt-1">vs 78% industry avg</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">2.8x</div>
          <div className="text-sm text-gray-600">Circularity Index</div>
          <div className="text-xs text-gray-500 mt-1">Linear = 1.0</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">-45%</div>
          <div className="text-sm text-gray-600">Waste Reduction</div>
          <div className="text-xs text-gray-500 mt-1">vs conventional</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">87%</div>
          <div className="text-sm text-gray-600">Resource Efficiency</div>
          <div className="text-xs text-gray-500 mt-1">Material utilization</div>
        </div>
      </div>
    </div>
  );
};

export default CircularityFlow;