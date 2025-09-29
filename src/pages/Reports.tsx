import React, { useState } from 'react';
import { 
  DocumentArrowDownIcon,
  PrinterIcon,
  ShareIcon,
  ChartBarIcon,
  DocumentTextIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';

const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState('comprehensive');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const reportTypes = [
    {
      id: 'comprehensive',
      name: 'Comprehensive LCA Report',
      description: 'Complete analysis including environmental impact, circularity metrics, and AI insights',
      icon: DocumentTextIcon,
      estimatedPages: 15
    },
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'High-level overview with key findings and recommendations',
      icon: ChartBarIcon,
      estimatedPages: 3
    },
    {
      id: 'technical',
      name: 'Technical Data Sheet',
      description: 'Detailed technical data, calculations, and methodologies',
      icon: TableCellsIcon,
      estimatedPages: 8
    },
    {
      id: 'comparison',
      name: 'Pathway Comparison',
      description: 'Side-by-side comparison of conventional vs circular pathways',
      icon: DocumentArrowDownIcon,
      estimatedPages: 5
    }
  ];

  const formats = ['PDF', 'Excel', 'Word', 'PowerPoint'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports & Documentation</h1>
        <p className="text-gray-600 mt-2">
          Generate and export comprehensive LCA reports and analysis documentation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Selection */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Select Report Type</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTypes.map((report) => {
              const Icon = report.icon;
              return (
                <div
                  key={report.id}
                  onClick={() => setSelectedReport(report.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedReport === report.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      selectedReport === report.id ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        selectedReport === report.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        selectedReport === report.id ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {report.name}
                      </h4>
                      <p className={`text-sm mt-1 ${
                        selectedReport === report.id ? 'text-blue-700' : 'text-gray-600'
                      }`}>
                        {report.description}
                      </p>
                      <div className={`text-xs mt-2 ${
                        selectedReport === report.id ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        Est. {report.estimatedPages} pages
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Format Selection */}
          <div className="mt-8">
            <h4 className="font-medium text-gray-900 mb-4">Export Format</h4>
            <div className="flex space-x-3">
              {formats.map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format.toLowerCase())}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFormat === format.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          {/* Generation Options */}
          <div className="mt-8">
            <h4 className="font-medium text-gray-900 mb-4">Options</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Include charts and visualizations</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Include AI recommendations</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Include raw data tables</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Include methodology details</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span>Generate Report</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <PrinterIcon className="w-5 h-5" />
              <span>Print</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <ShareIcon className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Report Preview</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="aspect-[8.5/11] bg-white rounded shadow-sm p-4 text-xs">
              <div className="border-b pb-2 mb-4">
                <div className="font-bold text-lg">CircuLCA Report</div>
                <div className="text-gray-600">AI-Driven Life Cycle Assessment</div>
              </div>
              
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                
                <div className="my-4 h-16 bg-blue-100 rounded flex items-center justify-center">
                  <ChartBarIcon className="w-8 h-8 text-blue-500" />
                </div>
                
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            This preview shows the general layout and structure of your selected report.
          </div>

          {/* Report Stats */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Material:</span>
              <span className="font-medium">Aluminum</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Analysis Date:</span>
              <span className="font-medium">Sep 29, 2025</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Confidence Level:</span>
              <span className="font-medium">94.2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Carbon Footprint:</span>
              <span className="font-medium text-green-600">2.4 tCO₂eq/t</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Circularity Score:</span>
              <span className="font-medium text-blue-600">87%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Reports</h3>
        
        <div className="space-y-4">
          {[
            { name: 'Aluminum_LCA_Comprehensive_Sep2025.pdf', date: '2025-09-28', size: '2.4 MB', type: 'PDF' },
            { name: 'Copper_Comparison_Report_Sep2025.xlsx', date: '2025-09-27', size: '1.8 MB', type: 'Excel' },
            { name: 'Steel_Executive_Summary_Sep2025.pdf', date: '2025-09-26', size: '956 KB', type: 'PDF' },
            { name: 'Lithium_Technical_Data_Sep2025.docx', date: '2025-09-25', size: '3.2 MB', type: 'Word' }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded">
                  <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{report.name}</div>
                  <div className="text-sm text-gray-600">{report.date} • {report.size}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{report.type}</span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;