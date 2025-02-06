import React from 'react';

export default function AboutImage() {
  return (
    <div className="relative group">
      <img
        src="https://res.cloudinary.com/dslsdpxaf/image/upload/v1738830430/rnt3sxowqx4upmbbyyll.jpg"
        alt="Professional portrait"
        className="w-full rounded-lg shadow-xl transition-transform duration-700 group-hover:scale-105"
      />
      {/* Zoom overlay effect */}
      <div
        className="absolute inset-0 bg-blue-600/0 rounded-lg transition-colors duration-700 
                    group-hover:bg-blue-600/10"
      />
    </div>
  );
}
