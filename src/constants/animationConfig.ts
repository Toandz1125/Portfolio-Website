export const ANIMATION_CONFIG = {
  durations: {
    fast: 500,      // 0.5s
    medium: 800,    // 0.8s
    slow: 1000,     // 1.0s
    slower: 1200,   // 1.2s
    slowest: 1500   // 1.5s
  },
  
  timingFunctions: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    gentle: 'ease-in-out'
  },
  
  delays: {
    short: 100,
    medium: 200,
    long: 300
  }
} as const;