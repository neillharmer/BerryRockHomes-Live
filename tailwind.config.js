export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        berry: {
          50:  '#fff5f3',
          100: '#fde8e4',
          200: '#fbc5bc',
          300: '#f89688',
          400: '#f36e5a',
          500: '#eb6045',
          600: '#E8553D', // primary coral — buttons, badges
          700: '#c0392b', // dark red — hover states
          800: '#9a2d22',
          900: '#7a241b',
          950: '#4a1510',
        },
        navy: {
          50:  '#f0f4f9',
          100: '#dce6f1',
          200: '#b9cde3',
          300: '#8aaece',
          400: '#5a8db6',
          500: '#3a6e9a',
          600: '#2b567c',
          700: '#1e3f5e',
          800: '#002e5d',
          900: '#002050',
          950: '#001030',
        },
        slate: {
          900: '#0f172a',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
        },
        // Warm cream / parchment — used as a soft section background.
        // sand-100 is the canonical tint shipping on the QualifyCTA module.
        sand: {
          50:  '#faf7f2',
          100: '#f5f1eb',
          200: '#e8e1d6',
        },
        // Muted green — calm, natural accent (e.g. category tags).
        sage: {
          50:  '#f3f6f3',
          200: '#cbd8cb',
          700: '#4d6150',
        },
        // Warm tan — earthy neutral accent (e.g. category tags).
        khaki: {
          50:  '#f7f4ec',
          200: '#e2d8bf',
          700: '#6b5d3e',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(232, 85, 61, 0.25)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(37, 99, 235, 0.5)',
      }
    },
  },
  plugins: [],
}
