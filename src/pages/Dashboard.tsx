import React from 'react';
import MetricsOverview from '../components/Dashboard/MetricsOverview';
import EnvironmentalImpact from '../components/Dashboard/EnvironmentalImpact';
import CircularityIndicators from '../components/Dashboard/CircularityIndicators';
import RecentAnalyses from '../components/Dashboard/RecentAnalyses';
import AIInsights from '../components/Dashboard/AIInsights';
import MaterialFlowChart from '../components/Dashboard/MaterialFlowChart';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">
            Monitor environmental impact and circularity metrics across your metallurgy operations
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          New LCA Analysis
        </button>
      </div>

      {/* Metrics Overview Cards */}
      <MetricsOverview />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Environmental Impact Chart */}
        <EnvironmentalImpact />
        
        {/* Circularity Indicators */}
        <CircularityIndicators />
      </div>

      {/* Material Flow Visualization */}
      <MaterialFlowChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights */}
        <AIInsights />
        
        {/* Recent Analyses */}
        <RecentAnalyses />
      </div>
    </div>
  );
};

export default Dashboard;