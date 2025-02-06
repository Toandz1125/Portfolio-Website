import React from 'react';

export default function ProfileImage() {
  return (
    <div className="relative group">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-blue-500">
        <img
          src="https://res.cloudinary.com/dslsdpxaf/image/upload/v1735466203/jyjlyejxt5ua1iqlic74.jpg"
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}
