/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // On étend la configuration des polices
      fontFamily: {
        // La police par défaut ('sans-serif') sera maintenant Montserrat
        sans: ['var(--font-montserrat)', 'sans-serif'],
        // On crée une nouvelle famille 'serif' pour Roboto Slab
        serif: ['var(--font-roboto-slab)', 'serif'],
      },
    },
  },
  plugins: [],
};
