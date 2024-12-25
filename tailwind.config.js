module.exports = {
  content: [
    './*.html',        
    './src/js/**/*.js',  
    './src/css/**/*.css', 
  ],
  theme: {
    extend: {
      colors: {
        white: 'rgb(255, 255, 255)',
        veryDarkBlue: 'rgb(7, 7, 36)',
        darkGray: 'rgb(56, 56, 79)',
        lightGray: 'rgb(131, 131, 145)',
        lightBlue: 'rgb(65, 158, 187)',
        yellow: 'rgb(237, 162, 73)',
        purple: 'rgb(109, 46, 213)',
        lightRed: 'rgb(209, 76, 50)',
        red: 'rgb(216, 58, 52)',
        orange: 'rgb(205, 81, 32)',
        turquoise: 'rgb(30, 193, 162)',
        blue: 'rgb(45, 104, 240)',
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        leagueSpartan: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
