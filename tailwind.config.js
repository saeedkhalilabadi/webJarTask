/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      margin: {
        '3/12': '20%',
      },

      minWidth: {
        '350': '350px',
      },
      colors: {
        'Normal': '#00C853',
        'presed': '#00c85380',
        'disable': '#817F7F',
        'loading': '#00c853bf',
        'focus': '#00712F',
        'ligthBtnPresed': '#f2f2f280',
        'inputBorderNormal': '#00000033',
        'backloginModal': '#0000004d',
        'modalLogin': '#FAFAFA',

      },
      boxShadow: {
        'normal': '0px 0px 10px rgba(0, 0, 0, 0.05)',
        'active': '0px 0px 10px rgba(0, 0, 0, 0.1)',
        'focus': 'box-shadow: 0px 0px 10px rgba(0, 148, 255, 0.1)',
        'presedBtnLigth': "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        'hoverBtnLigth': '0px 5px 10px rgba(0, 200, 83, 0.25)',

      }


    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
}
