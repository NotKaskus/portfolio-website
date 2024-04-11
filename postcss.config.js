module.exports = {
  plugins: {
<<<<<<< HEAD
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
=======
    tailwindcss: {},
    autoprefixer: {},
>>>>>>> source/main
  },
};
