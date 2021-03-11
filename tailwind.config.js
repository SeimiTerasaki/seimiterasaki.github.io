module.exports = {
  darkMode: 'class',
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      'sans': ['Raleway'],
      'serif': ['Georgia'],
      'heading': ['Bodoni Moda']
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
      animation:{},
      keyframes: {},
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}
