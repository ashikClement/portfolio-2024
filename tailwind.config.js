/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gray': 'radial-gradient(circle at center top, #27272a, #09090b 30%)',
      },
    },
  },
  plugins: [],
}

