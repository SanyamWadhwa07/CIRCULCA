import React from 'react';
import { 
  FireIcon, 
  GlobeAltIcon, 
  BoltIcon, 
  TrashIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: 'red' | 'blue' | 'green' | 'yellow';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, change, icon: Icon, color }) => {
  const colorClasses = {
    red: 'bg-red-50 text-red-600 border-red-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  };

  const isPositive = change > 0;
  const isImprovement = color === 'green' ? isPositive : !isPositive;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg border ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center space-x-1 ${
          isImprovement ? 'text-green-600' : 'text-red-600'
        }`}>
          {isImprovement ? (
            <ArrowTrendingDownIcon className="w-4 h-4" />
          ) : (
            <ArrowTrendingUpIcon className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="text-gray-500 text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
};

const MetricsOverview: React.FC = () => {
  const metrics = [
    {
      title: 'Carbon Footprint',
      value: '2.4',
      unit: 'tCO₂eq/t',
      change: -12.5,
      icon: FireIcon,
      color: 'red' as const,
    },
    {
      title: 'Water Usage',
      value: '15.2',
      unit: 'm³/t',
      change: -8.3,
      icon: GlobeAltIcon,
      color: 'blue' as const,
    },
    {
      title: 'Energy Consumption',
      value: '45.7',
      unit: 'MWh/t',
      change: -15.2,
      icon: BoltIcon,
      color: 'yellow' as const,
    },
    {
      title: 'Waste Generation',
      value: '0.85',
      unit: 't/t',
      change: -22.1,
      icon: TrashIcon,
      color: 'green' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsOverview;