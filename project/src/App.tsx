import React, { useState } from 'react';
import { Transaction } from './types/finance';
import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { LayoutDashboard, ListPlus } from 'lucide-react';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions'>('dashboard');

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Math.random().toString(36).substr(2, 9)
    };
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-6 py-3 rounded-lg shadow-sm transition-all duration-200 ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex items-center px-6 py-3 rounded-lg shadow-sm transition-all duration-200 ${
              activeTab === 'transactions'
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ListPlus className="w-5 h-5 mr-2" />
            Transactions
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {activeTab === 'dashboard' ? (
              <Dashboard transactions={transactions} />
            ) : (
              <TransactionList transactions={transactions} />
            )}
          </div>
          <div className="lg:col-span-1">
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;