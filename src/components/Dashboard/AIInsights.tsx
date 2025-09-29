import React from 'react';
import { 
  LightBulbIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface InsightCardProps {
  type: 'recommendation' | 'warning' | 'success' | 'info';
  title: string;
  description: string;
  confidence?: number;
}

const InsightCard: React.FC<InsightCardProps> = ({ type, title, description, confidence }) => {
  const getIcon = () => {
    switch (type) {
      case 'recommendation':
        return <LightBulbIcon className="w-5 h-5" />;
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5" />;
      case 'success':
        return <CheckCircleIcon className="w-5 h-5" />;
      default:
        return <ClockIcon className="w-5 h-5" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'recommendation':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getColors()}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs mt-1 opacity-90">{description}</p>
          {confidence && (
            <div className="mt-2">
              <div className="text-xs opacity-75">Confidence: {confidence}%</div>
              <div className="w-full bg-white bg-opacity-50 rounded-full h-1.5 mt-1">
                <div 
                  className="h-1.5 rounded-full bg-current" 
                  style={{ width: `${confidence}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AIInsights: React.FC = () => {
  const insights = [
    {
      type: 'recommendation' as const,
      title: 'Optimize Energy Mix',
      description: 'Increasing renewable energy to 75% could reduce carbon footprint by 18%',
      confidence: 92
    },
    {
      type: 'success' as const,
      title: 'Recycling Rate Improved',
      description: 'Recent process changes increased material recovery by 12%',
      confidence: 88
    },
    {
      type: 'warning' as const,
      title: 'Water Usage Spike',
      description: 'Detected 15% increase in water consumption in processing unit 3',
      confidence: 95
    },
    {
      type: 'info' as const,
      title: 'Predictive Maintenance',
      description: 'Equipment performance suggests maintenance needed in 2 weeks',
      confidence: 76
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
        <p className="text-sm text-gray-600">Machine learning recommendations and alerts</p>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">ML Model Accuracy</span>
          <span className="font-medium text-gray-900">94.2%</span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94.2%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;