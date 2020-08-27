const theme = {
    colors: {
      text: '#000',
      textLight: 'white',
      background: '#F4F4F4',
      primary: '#6A66F2',
      primaryLight: 'A29FFF',
      dark: '#413BFF',
      gray: 'C4C4C4',
      warning: '#F26666',
      warningActive: '#FF6099',
      active: '#9B66F2',
      cardBg: 'white'
    },
    fonts: {
      body: "'Roboto', sans-serif",
      heading: "'Roboto', sans-serif",
      monospace: 'Menlo, monospace',
    },
    breakpoints: [
      '40em', '56em', '64em', '100em',
    ],
    fontWeights: {
      thin: 200,
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    links: {
      bold: {
        fontWeight: 'bold',
        textDecoration: 'underline'
      }
    },
    fontSizes: [
      14, 16, 20, 24, 28, 48, 64,
    ],
    app: {
      margin: 0,
      width: '100vw',
      height: '100vh'
    },
    spacer: {
      flex: '1 1'
    },
    centering: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    vCentering: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      width: '100%'
  
    
    }
  }
  
  export default theme