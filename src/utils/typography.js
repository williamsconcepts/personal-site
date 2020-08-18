import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: '1.666',
  headerFontFamily: ['Baloo Tamma 2', 'cursive'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Baloo Tamma 2',
      styles: ['800', '400'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '300', '200'],
    },
  ],
});

export default typography;
