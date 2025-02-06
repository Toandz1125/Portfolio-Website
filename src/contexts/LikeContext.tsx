import React, { createContext, useContext, useState, useEffect } from 'react';

interface LikeContextType {
  likes: number;
  hasLiked: boolean;
  toggleLike: () => void;
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export function LikeProvider({ children }: { children: React.ReactNode }) {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('totalLikes');
    return savedLikes ? parseInt(savedLikes, 10) : 0;
  });

  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem('hasLiked') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('totalLikes', likes.toString());
    localStorage.setItem('hasLiked', hasLiked.toString());
  }, [likes, hasLiked]);

  const toggleLike = () => {
    if (hasLiked) {
      setLikes(prev => Math.max(0, prev - 1));
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <LikeContext.Provider value={{ likes, hasLiked, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikeContext);
  if (context === undefined) {
    throw new Error('useLikes must be used within a LikeProvider');
  }
  return context;
}