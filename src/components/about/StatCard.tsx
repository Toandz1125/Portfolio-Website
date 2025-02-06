import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  Icon: LucideIcon;
  title: string;
  value: string;
}

export default function StatCard({ Icon, title, value }: StatCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center theme-transition">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <h4 className="font-bold text-gray-900 dark:text-dark-heading theme-transition">
        {title}
      </h4>
      <p className="text-blue-600 dark:text-blue-400 font-semibold theme-transition">
        {value}
      </p>
    </div>
  );
}