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
  fontSizes: [
    14, 16, 20, 24, 28, 48, 64,
  ],
  app: {
    margin: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(270deg, #AA47BA 0%, #4D5098 100%)',
    color: 'white'
  },
  spacer: {
    flex: '1 1'
  },
  links: {
    primary: {
      color: 'inherit',
      textDecoration: 'none',
      '&:active': {
        opacity: 0.5,
      },
      '&:hover': {
        opacity: 0.5,
      }
    }
  },
  container: {
    padding: [3, 4, 5]
  },
  cards: {
    code: {
      background: 'rgb(250, 250, 250)',
      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.25)',
      borderRadius: '36px',
      padding: 3,
      color: 'black'
    }
  },
  buttons: {
    primary: {
      background: '#8F61CA',
      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.25)',
      borderRadius: '32px',
      fontSize: 3,
      paddingX: 4,
      paddingY: 3,
      outline: 'none',
      '&:active': {
        boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.25)',
        // outline:'none'
      }
    },
   
  },
  centering: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

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