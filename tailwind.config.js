/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Game-specific color palette
        'primary': '#212225',      // Dark Gray - mysterious base
        'secondary': '#29272c',    // Charcoal - subtle accent
        'tertiary': '#3c3537',     // Deep Taupe - dark background
        'accent': '#f3e9c4',       // Pale Yellow - gentle highlight
        'light': '#fbede4',        // Soft Cream - light background
        'neutral': '#726b73',      // Muted Lavender - neutral text
        'success': '#a9c2a4',      // Soft Green - positive feedback
        'warning': '#c2a783',      // Muted Gold - gentle warning
        'error': '#907577',        // Dusty Rose - soft alert
        'highlight': '#b18da1',    // Muted Pink - for interactive elements
        'background-dark': '#494543', // Darker Gray - for sections
        'background-light': '#e4d2c6', // Light Beige - for contrast
      },
    },
  },
  plugins: [],
}