import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  label: string;
}

export default function DownloadButton({ fileUrl, fileName, label }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`group inline-flex items-center gap-2 px-8 py-3 rounded-full overflow-hidden 
                 transition-all duration-300 font-medium
                 ${isComplete 
                   ? 'bg-green-600 text-white hover:bg-green-700' 
                   : 'bg-blue-600 text-white hover:bg-blue-700'} 
                 hover:shadow-lg hover:scale-105 w-[180px] justify-center
                 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {isComplete ? (
        <>
          <Check className="w-5 h-5 animate-bounce" />
          <span>Complete!</span>
        </>
      ) : isDownloading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}