const fonts = `
  @font-face {
    font-family: 'MainFont';
    src: url('/fonts/Roboto.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TitleFont';
    src: url('/fonts/ScienceGothic.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --font-main: 'MainFont';
    --font-title: 'TitleFont';
  }
`;

export default fonts;
