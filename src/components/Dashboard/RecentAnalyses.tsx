import React from 'react';
import { 
  CalendarDaysIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

interface AnalysisItemProps {
  id: string;
  material: string;
  type: 'Conventional' | 'Circular';
  date: string;
  status: 'Completed' | 'Processing' | 'Draft';
  carbonFootprint: number;
  circularityScore: number;
}

const AnalysisItem: React.FC<AnalysisItemProps> = ({
  material, type, date, status, carbonFootprint, circularityScore
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-medium text-gray-900">{material} LCA</h4>
          <p className="text-sm text-gray-600">{type} Process</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <div className="text-xs text-gray-500">Carbon Footprint</div>
          <div className="font-medium text-red-600">{carbonFootprint} tCO₂eq/t</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Circularity Score</div>
          <div className="font-medium text-green-600">{circularityScore}%</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <CalendarDaysIcon className="w-3 h-3" />
          <span>{date}</span>
        </div>
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
          <span>View Details</span>
          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const RecentAnalyses: React.FC = () => {
  const analyses = [
    {
      id: '1',
      material: 'Aluminum',
      type: 'Circular' as const,
      date: '2025-09-28',
      status: 'Completed' as const,
      carbonFootprint: 2.1,
      circularityScore: 87
    },
    {
      id: '2',
      material: 'Copper',
      type: 'Conventional' as const,
      date: '2025-09-27',
      status: 'Completed' as const,
      carbonFootprint: 3.8,
      circularityScore: 45
    },
    {
      id: '3',
      material: 'Steel',
      type: 'Circular' as const,
      date: '2025-09-26',
      status: 'Processing' as const,
      carbonFootprint: 1.9,
      circularityScore: 92
    },
    {
      id: '4',
      material: 'Lithium',
      type: 'Conventional' as const,
      date: '2025-09-25',
      status: 'Draft' as const,
      carbonFootprint: 4.2,
      circularityScore: 23
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Analyses</h3>
          <p className="text-sm text-gray-600">Latest LCA studies and comparisons</p>
        </div>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm">
          <DocumentTextIcon className="w-4 h-4" />
          <span>View All</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {analyses.map((analysis) => (
          <AnalysisItem key={analysis.id} {...analysis} />
        ))}
      </div>
    </div>
  );
};

export default RecentAnalyses;