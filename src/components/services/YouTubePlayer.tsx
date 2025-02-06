import React from 'react';

interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden aspect-video shadow-lg bg-gray-100 group">
      <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&cc_load_policy=1&color=purple`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}