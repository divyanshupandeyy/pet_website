import React from 'react';
import { format } from 'date-fns';
import { Transaction } from '../types/finance';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <p className="text-gray-500">No transactions yet. Add your first transaction to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold p-6 border-b">Recent Transactions</h2>
      <div className="divide-y">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id} 
            className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {transaction.type === 'income' ? (
                  <ArrowUpCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <ArrowDownCircle className="w-6 h-6 text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
                <p className="text-xs text-gray-400">
                  {format(new Date(transaction.date), 'MMM d, yyyy • h:mm a')}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className={`text-lg font-semibold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}