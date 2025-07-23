import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartViewProps {
  data: Array<{ category: string; amount: number }>;
}

export function BarChartView({ data }: BarChartViewProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Spending</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}