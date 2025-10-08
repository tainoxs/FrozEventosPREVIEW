/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Azul escuro
        'primary-dark': '#1E3A8A', // Azul mais escuro
        secondary: '#3B82F6', // Azul médio
        'secondary-dark': '#2563EB', // Azul médio mais escuro
        accent: '#BFDBFE', // Azul claro
        neutral: '#F3F4F6', // Cinza claro
        'base-100': '#FFFFFF', // Branco
      },
    },
  },
  plugins: [],
};
