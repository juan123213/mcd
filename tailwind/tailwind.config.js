const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#color-palette-reference
        teal: colors.teal,
        'light-blue': colors.lightBlue,
        'orange': colors.orange,
        gray: {
          light: 'var(--gray-light)',
          DEFAULT: 'var(--gray-default)',
          dark: 'var(--gray-dark)'
        },
        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary-default)',
          dark: 'var(--primary-dark)'
        },
        secondary: {
          light: 'var(--secondary-light)',
          DEFAULT: 'var(--secondary-default)',
          dark: 'var(--secondary-dark)'
        },
        success: {
          light: 'var(--success-light)',
          DEFAULT: 'var(--success-default)',
          dark: 'var(--success-dark)'
        },
        info: {
          light: 'var(--info-light)',
          DEFAULT: 'var(--info-default)',
          dark: 'var(--info-dark)'
        },
        warning: {
          light: 'var(--warning-light)',
          DEFAULT: 'var(--warning-default)',
          dark: 'var(--warning-dark)'
        },
        danger: {
          light: 'var(--danger-light)',
          DEFAULT: 'var(--danger-default)',
          dark: 'var(--danger-dark)'
        }
        
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}