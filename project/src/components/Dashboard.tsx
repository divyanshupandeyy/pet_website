import React from 'react';
import { Transaction } from '../types/finance';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';
import { StatCard } from './StatCard';
import { PieChartView } from './charts/PieChartView';
import { BarChartView } from './charts/BarChartView';
import { calculateBalance, calculateTotalIncome, calculateTotalExpenses, calculateCategoryData } from '../utils/calculations';

interface DashboardProps {
  transactions: Transaction[];
}

export function Dashboard({ transactions }: DashboardProps) {
  const totalIncome = calculateTotalIncome(transactions);
  const totalExpenses = calculateTotalExpenses(transactions);
  const balance = calculateBalance(transactions);
  const categoryData = calculateCategoryData(transactions);

  const pieData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value
  }));

  const barData = Object.entries(categoryData).map(([category, amount]) => ({
    category,
    amount
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Balance"
          amount={balance}
          icon={Wallet}
          colorClass={balance >= 0 ? 'text-blue-600' : 'text-red-600'}
          trend={10}
        />
        <StatCard
          title="Income"
          amount={totalIncome}
          icon={TrendingUp}
          colorClass="text-green-600"
          trend={5}
        />
        <StatCard
          title="Expenses"
          amount={totalExpenses}
          icon={TrendingDown}
          colorClass="text-red-600"
          trend={-3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartView data={pieData} />
        <BarChartView data={barData} />
      </div>
    </div>
  );
}