import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  colorClass: string;
  trend?: number;
}

export function StatCard({ title, amount, icon: Icon, colorClass, trend }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-200 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className={`mt-2 text-3xl font-bold ${colorClass}`}>
            ${Math.abs(amount).toFixed(2)}
          </p>
          {trend !== undefined && (
            <p className={`text-sm mt-1 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month
            </p>
          )}
        </div>
        <Icon className={`w-12 h-12 ${colorClass} opacity-80`} />
      </div>
    </div>
  );
}