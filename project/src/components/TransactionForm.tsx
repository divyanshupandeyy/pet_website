import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { Transaction } from '../types/finance';
import { TRANSACTION_CATEGORIES } from '../constants/categories';

interface TransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

export function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString(),
      type
    });
    setAmount('');
    setCategory('');
    setDescription('');
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="w-full bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusCircle className="w-5 h-5" />
        <span>Add New Transaction</span>
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h2 className="text-xl font-semibold mb-6">Add Transaction</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setType('expense')}
            className={`flex-1 py-2 px-4 rounded-md ${
              type === 'expense'
                ? 'bg-red-100 text-red-700 border-2 border-red-300'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType('income')}
            className={`flex-1 py-2 px-4 rounded-md ${
              type === 'income'
                ? 'bg-green-100 text-green-700 border-2 border-green-300'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Income
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-8 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              step="0.01"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            {TRANSACTION_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder="Enter description"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}