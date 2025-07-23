import React from 'react';
import { Wallet } from 'lucide-react';

export function Header() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-white" />
            <h1 className="ml-3 text-2xl font-bold text-white">SmartFinance</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}