import React from 'react';
import { Card } from '@/components/ui/card';

const DashboardContainer = () => {
  const kpis = [
    {
      title: "Total Installs",
      current: "182,363",
      target: "834,000",
      progress: ((182363 / 834000) * 100).toFixed(1),
      trend: "+41% WoW"
    },
    {
      title: "Profile Creation",
      current: "87,480",
      target: "500,400",
      progress: ((87480 / 500400) * 100).toFixed(1),
      trend: "+26% WoW"
    },
    {
      title: "Target Age Group (15-19)",
      current: "53,672",
      target: "300,240",
      progress: ((53672 / 300240) * 100).toFixed(1),
      trend: "+29% WoW"
    },
    {
      title: "Full Game Completion",
      current: "2,144",
      target: "60,048",
      progress: ((2144 / 60048) * 100).toFixed(1),
      trend: "+50% WoW"
    }
  ];

  const levelMetrics = [
    {
      name: "Setting Pakki",
      started: 19014,
      completed: 6058,
      completion: ((6058/19014)*100).toFixed(1)
    },
    {
      name: "Kiss ya Miss",
      started: 20345,
      completed: 7788,
      completion: ((7788/20345)*100).toFixed(1)
    },
    {
      name: "Sex or Ex",
      started: 22084,
      completed: 9006,
      completion: ((9006/22084)*100).toFixed(1)
    }
  ];

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold mb-6">Go Bro Analytics Dashboard</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="p-4">
            <h2 className="text-sm text-gray-600">{kpi.title}</h2>
            <div className="mt-2">
              <span className="text-2xl font-bold">{kpi.current}</span>
            </div>
            <div className="text-xs text-gray-500">
              Target: {kpi.target} ({kpi.progress}%)
            </div>
            <div className="mt-2 text-sm text-green-500">
              {kpi.trend}
            </div>
          </Card>
        ))}
      </div>

      {/* Level Completion */}
      <Card className="p-4">
        <h2 className="font-bold mb-4">Level Completion</h2>
        <div className="space-y-4">
          {levelMetrics.map((level, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{level.name}</span>
                <span>{level.completion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${level.completion}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardContainer;
