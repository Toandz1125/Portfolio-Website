import React from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden aspect-video shadow-lg">
      <video
        className="w-full h-full object-cover"
        controls
        poster={poster}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}