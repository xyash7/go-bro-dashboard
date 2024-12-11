import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UserJourneyAnalysis = () => {
  const journeyData = [
    {scene: "0", visits: 1138},
    {scene: "1", visits: 5},
    {scene: "2", visits: 2357},
    {scene: "3", visits: 2165},
    {scene: "4", visits: 14260},
    {scene: "5", visits: 23194},
    {scene: "6", visits: 1166},
    {scene: "7", visits: 2450},
    {scene: "8", visits: 1129},
    {scene: "9", visits: 239},
    {scene: "10", visits: 261}
  ];

  const majorDropoffs = [
    {
      from: "Scene 5",
      to: "Scene 6",
      dropPercentage: ((23194 - 1166) / 23194 * 100).toFixed(1)
    },
    {
      from: "Scene 4",
      to: "Scene 3",
      dropPercentage: ((14260 - 2165) / 14260 * 100).toFixed(1)
    }
  ];

  return (
    <div className="space-y-6 p-4">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>User Journey Progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={journeyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scene" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Major Drop-off Points</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {majorDropoffs.map((dropoff, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{dropoff.from} → {dropoff.to}</span>
                  <span className="text-red-500">{dropoff.dropPercentage}% drop</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserJourneyAnalysis;
