import React from 'react';
import { Card } from '@/components/ui/card';

const App = () => {
  const kpis = [
    {
      title: "Total Installs",
      current: "182,363",
      target: "834,000",
      progress: "21.9%",
      trend: "+41% WoW"
    },
    {
      title: "Profile Creation",
      current: "87,480",
      target: "500,400",
      progress: "17.5%",
      trend: "+26% WoW"
    },
    {
      title: "Target Age Group (15-19)",
      current: "53,672",
      target: "300,240",
      progress: "17.9%",
      trend: "+29% WoW"
    },
    {
      title: "Full Game Completion",
      current: "2,144",
      target: "60,048",
      progress: "3.6%",
      trend: "+50% WoW"
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Go Bro Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">{kpi.title}</div>
            <div className="mt-2 text-2xl font-bold">{kpi.current}</div>
            <div className="text-xs text-gray-500">
              Target: {kpi.target} ({kpi.progress})
            </div>
            <div className="mt-2 text-sm text-green-500">{kpi.trend}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
