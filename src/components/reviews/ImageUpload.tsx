import React, { useRef } from 'react';
import { Camera } from 'lucide-react';

interface ImageUploadProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
}

export default function ImageUpload({ image, onImageChange }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full md:w-64 aspect-square rounded-lg overflow-hidden bg-gray-100">
      {image ? (
        <div className="relative h-full group">
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => onImageChange(null)}
            className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            Change Photo
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-full flex flex-col items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
        >
          <Camera className="w-8 h-8 text-gray-400" />
          <span className="text-sm text-gray-500">Upload Photo</span>
        </button>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}