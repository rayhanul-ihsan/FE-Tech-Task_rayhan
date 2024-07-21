/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '30px 10px 30px  rgba(33, 97, 213, 0.5)', 
      },
    },
  },
  plugins: [],
}

