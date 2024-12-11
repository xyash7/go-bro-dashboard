import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const WeeklyComparison = () => {
  const kpiData = [
    {
      metric: "Installs",
      previous: 129116,
      current: 182363,
      growth: 41
    },
    {
      metric: "Profiles Created",
      previous: 69294,
      current: 87480,
      growth: 26
    },
    {
      metric: "Target Age Group",
      previous: 41576,
      current: 53672,
      growth: 29
    },
    {
      metric: "Full Completion",
      previous: 1429,
      current: 2144,
      growth: 50
    }
  ];

  const levelData = [
    {
      name: "Setting Pakki",
      previous: (5199/15142)*100,
      current: (6058/19014)*100
    },
    {
      name: "Kiss ya Miss",
      previous: (6284/16174)*100,
      current: (7788/20345)*100
    },
    {
      name: "Sex or Ex",
      previous: (7194/17663)*100,
      current: (9006/22084)*100
    }
  ];

  return (
    <div className="space-y-6 p-4 bg-gray-50">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl">Key Metrics Week-over-Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="text-sm text-gray-600">{item.metric}</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-2xl font-bold">
                    {item.current.toLocaleString()}
                  </span>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+{item.growth}%</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Previous: {item.previous.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl">Level Completion Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={levelData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip 
                  formatter={(value) => `${value.toFixed(1)}%`}
                />
                <Bar name="Previous Week" dataKey="previous" fill="#94a3b8" />
                <Bar name="Current Week" dataKey="current" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyComparison;
