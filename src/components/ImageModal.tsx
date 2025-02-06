import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({
  src,
  alt,
  isOpen,
  onClose,
}: ImageModalProps) {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[80vw] max-h-[80vh] mt-16 animate-modal-open"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 right-0 w-8 h-8 flex items-center justify-center 
                     bg-white/10 backdrop-blur-sm rounded-full 
                     hover:bg-white/20 transition-all duration-300
                     text-white hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-auto h-auto max-w-full max-h-[75vh] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
