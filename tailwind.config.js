module.exports = {
  darkMode: 'class', // Keep
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // Renamed from purge
  theme: {
    extend: {
      typography: (theme) => ({ // Keep existing typography config
        DEFAULT: {
          'a:hover': {
            color: theme('colors.pink.100')
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            h2: {
              color: theme('colors.gray.100')
            },
            h3: {
              color: theme('colors.gray.200')
            },
            h4: {
              color: theme('colors.gray.200')
            },
            p: {
              color: theme('colors.gray.400')
            },
            a: {
              color: theme('colors.purple.400'),
            },
            'a:hover': {
              color: theme('colors.pink.400')
            },
          },
        },
      }),
    },
  },
  // variants block removed
  plugins: [require('@tailwindcss/typography')], // Keep
}
