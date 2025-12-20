// Tailwind CSS Configuration for all pages
// Include this script in your HTML files after Tailwind CDN

tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: '#ecfdf6',
          100: '#ccfbf5',
          200: '#99f6ea',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          DEFAULT: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#f43f5e',
          hover: '#e11d48',
        },
        // Status Colors
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        // Custom Semantic Colors
        background: '#f3f4f6',
        surface: '#ffffff',
        muted: '#64748b',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        navbar: '0 1px 3px rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
};

