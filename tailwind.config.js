/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#ffffff',
          text: '#1a1a1a',
          heading: '#2d3748',
          muted: '#4a5568'
        },
        // Dark mode colors
        dark: {
          bg: '#1a1a1a',
          text: '#e2e8f0',
          heading: '#f7fafc',
          muted: '#a0aec0'
        }
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)'
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      }
    }
  },
  plugins: [],
};