import React from 'react';
import { Palette } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
        <Palette className="w-6 h-6 text-purple-600" />
      </div>
      <span className="text-xl font-semibold text-gray-800">Design Studio</span>
    </div>
  );
}