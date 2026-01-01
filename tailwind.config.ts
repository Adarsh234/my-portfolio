import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo-500
        secondary: '#64748b', // Slate-500
        dark: '#0f172a', // Slate-900
        light: '#f8fafc', // Slate-50
      },
    },
  },
  plugins: [],
}
export default config
