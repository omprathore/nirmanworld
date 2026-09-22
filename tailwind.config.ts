import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        nirman: {
          navy: '#0B2347',
          navy2: '#16365F',
          gold: '#D6A54B',
          orange: '#F28B2C',
          ink: '#10213A',
          muted: '#66758C',
          mist: '#F4F7FB'
        }
      },
      boxShadow: {
        soft: '0 24px 70px rgba(11,35,71,.10)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 80% 18%, rgba(214,165,75,.22), transparent 28%)'
      }
    }
  },
  plugins: []
};

export default config;
