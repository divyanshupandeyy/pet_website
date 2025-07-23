import { format } from 'date-fns';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(Math.abs(amount));
};

export const formatDate = (date: string): string => {
  return format(new Date(date), 'MMM d, yyyy • h:mm a');
};