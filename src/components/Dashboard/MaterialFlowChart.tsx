import React from 'react';

const MaterialFlowChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Material Flow Visualization</h3>
        <p className="text-sm text-gray-600">Interactive Sankey diagram showing circular material flows</p>
      </div>
      
      {/* Simplified Flow Diagram */}
      <div className="relative bg-gray-50 rounded-lg p-8 min-h-96">
        {/* Raw Materials */}
        <div className="absolute top-4 left-4">
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 w-32">
            <div className="text-sm font-medium text-orange-800">Raw Materials</div>
            <div className="text-xs text-orange-600">35% Primary</div>
            <div className="text-xs text-orange-600">65% Recycled</div>
          </div>
        </div>

        {/* Processing */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 w-32">
            <div className="text-sm font-medium text-blue-800">Processing</div>
            <div className="text-xs text-blue-600">AI Optimized</div>
            <div className="text-xs text-blue-600">Energy Efficient</div>
          </div>
        </div>

        {/* Products */}
        <div className="absolute top-4 right-4">
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 w-32">
            <div className="text-sm font-medium text-green-800">Products</div>
            <div className="text-xs text-green-600">High Quality</div>
            <div className="text-xs text-green-600">Extended Life</div>
          </div>
        </div>

        {/* Use Phase */}
        <div className="absolute bottom-20 right-4">
          <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 w-32">
            <div className="text-sm font-medium text-purple-800">Use Phase</div>
            <div className="text-xs text-purple-600">2.3x Longer</div>
            <div className="text-xs text-purple-600">Maintenance</div>
          </div>
        </div>

        {/* End of Life */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-32">
            <div className="text-sm font-medium text-gray-800">End of Life</div>
            <div className="text-xs text-gray-600">70% Recycle</div>
            <div className="text-xs text-gray-600">25% Reuse</div>
            <div className="text-xs text-gray-600">5% Disposal</div>
          </div>
        </div>

        {/* Recovery */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-cyan-100 border border-cyan-300 rounded-lg p-4 w-32">
            <div className="text-sm font-medium text-cyan-800">Recovery</div>
            <div className="text-xs text-cyan-600">92% Rate</div>
            <div className="text-xs text-cyan-600">High Purity</div>
          </div>
        </div>

        {/* Flow Arrows */}
        <div className="absolute top-12 left-40 w-16 h-0.5 bg-gray-400"></div>
        <div className="absolute top-12 right-40 w-16 h-0.5 bg-gray-400"></div>
        <div className="absolute top-20 right-12 w-0.5 h-16 bg-gray-400"></div>
        <div className="absolute bottom-32 right-40 w-16 h-0.5 bg-gray-400"></div>
        <div className="absolute bottom-12 right-40 w-16 h-0.5 bg-gray-400"></div>
        <div className="absolute bottom-12 left-40 w-16 h-0.5 bg-gray-400"></div>
        <div className="absolute bottom-20 left-12 w-0.5 h-16 bg-cyan-400"></div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xl font-bold text-gray-900">95%</div>
          <div className="text-sm text-gray-600">Material Recovery</div>
        </div>
        <div>
          <div className="text-xl font-bold text-blue-600">-45%</div>
          <div className="text-sm text-gray-600">Waste Reduction</div>
        </div>
        <div>
          <div className="text-xl font-bold text-green-600">2.8x</div>
          <div className="text-sm text-gray-600">Circularity Index</div>
        </div>
      </div>
    </div>
  );
};

export default MaterialFlowChart;