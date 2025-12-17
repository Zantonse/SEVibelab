window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        okta: {
          midnight: '#00297A',
          blue: '#3C71F7',
          ice: '#F8FAFC', // Lighter, cleaner slate
          white: '#FFFFFF',
          text: '#0F172A', // Slate-900
          gray: '#64748B', // Slate-500
          light: '#E2E8F0'
        },
        vibe: {
          purple: '#8B5CF6', // Violet-500
          pink: '#EC4899',   // Pink-500
          teal: '#14B8A6',   // Teal-500
          dark: '#1E293B'    // Slate-800
        }
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.03)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        glow: '0 0 20px rgba(60, 113, 247, 0.15)'
      }
    }
  }
};
