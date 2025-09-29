import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularityIndicators: React.FC = () => {
  const recycledContentData = {
    labels: ['Recycled Content', 'Primary Material'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['#10B981', '#E5E7EB'],
        borderColor: ['#059669', '#D1D5DB'],
        borderWidth: 2,
      },
    ],
  };

  const endOfLifeData = {
    labels: ['Recycling', 'Reuse', 'Disposal'],
    datasets: [
      {
        data: [70, 25, 5],
        backgroundColor: ['#3B82F6', '#8B5CF6', '#EF4444'],
        borderColor: ['#2563EB', '#7C3AED', '#DC2626'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Circularity Indicators</h3>
        <p className="text-sm text-gray-600">Material flow and end-of-life metrics</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">
            Recycled Content (65%)
          </h4>
          <div className="h-32">
            <Doughnut data={recycledContentData} options={options} />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">
            End-of-Life Distribution
          </h4>
          <div className="h-32">
            <Doughnut data={endOfLifeData} options={options} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">85%</div>
          <div className="text-xs text-gray-600">Resource Efficiency</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">2.3x</div>
          <div className="text-xs text-gray-600">Life Extension</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">92%</div>
          <div className="text-xs text-gray-600">Recovery Rate</div>
        </div>
      </div>
    </div>
  );
};

export default CircularityIndicators;