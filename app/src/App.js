import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme.js'
import { Box, Card, Text, Link, Flex, Button } from 'theme-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import codeStrings from './codeStrings'
import ReactMarkdown from 'react-markdown'

const links = [{
  text: 'Glasses',
  href: '#'
},
{
  text: 'Doc',
  href: 'https://francescosaveriozuppichini.github.io/glasses/index.html'
},
{
  text: 'Examples',
  href: 'https://francescosaveriozuppichini.github.io/glasses/glasses.html#'
},
{
  text: 'Models',
  href: 'https://francescosaveriozuppichini.github.io/glasses/glasses.nn.models.html'
}

]

const NavBar = ({ links }) => (
  <Box sx={{ flex: 1 }} >
    <Flex>
      {links.map(({ text, href }) =>
        (
          <Link href={href} variant='primary' key={href}>
            <Text mx={3} sx={{ fontSize: 3 }}>{text}</Text>
          </Link>
        ))}

    </Flex>
  </Box>
)

const Code = () => {
  const [codeString, setCodeString] = useState('')
  const [lastIndex, setLastIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const c = codeStrings[0][lastIndex]
      if ((lastIndex + 1) % codeStrings[0].length) {
        setCodeString(lastIndex > 0 ? codeString + c : c)
        setLastIndex((lastIndex + 1) % codeStrings[0].length)
      }
    }, 10)
    return () => clearTimeout(timer);
  })


  return (<Card variant='code' sx={{ minHeight: '400px' }}>
    <SyntaxHighlighter language="python" style={atomOneLight} >
      {codeString}
    </SyntaxHighlighter>
  </Card>
  )
}

const Actions = () => {
  const toLink = (href) => window.location = href

  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <Button m={2} onClick={() => toLink('https://francescosaveriozuppichini.github.io/glasses/index.html')}>Doc</Button>
      <Button m={2}>Examples</Button>
      <Button m={2}>Models</Button>
    </Flex>
  )
}

const Footer = () => (
  <Flex>
    <Text>Made with <span role='img' aria-label="love">❤️</span> by
    <Link href='https://www.linkedin.com/in/francesco-saverio-zuppichini-94659a150/' variant='primary'> Francesco Saverio Zuppichini</Link> and
    <Link href='https://www.linkedin.com/in/francescocicala/' variant='primary'> Francesco Cicala</Link>
    </Text>

  </Flex >

)

const Header = () => (
  <Box sx={{ flex: 2 }}>
                <Flex sx={{ flexDirection: 'column' }}>
                  <Text sx={{ fontSize: 6, fontWeight: 'bold' }} >Glasses
                  <span role='img' aria-label="glasses">😎</span>
                  </Text>
                  <ReactMarkdown source={'[![codecov](https://codecov.io/gh/FrancescoSaverioZuppichini/glasses/branch/develop/graph/badge.svg)](https://codecov.io/gh/FrancescoSaverioZuppichini/glasses)'} />
                  <Text mt={2} sx={{ fontSize: 4, maxWidth: '800px' }} >Compact, concise and customizable
             deep learning <strong>computer vision</strong> library
built on top of <strong>PyTorch</strong></Text>
                  <Box my={4} />
                  <Actions />
                  <Box my={2} />
                </Flex>
              </Box>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex variant='app'>
        <Flex variant='container' sx={{flexDirection: 'column', width: '100%'}}>
          <Box sx={{flex: 0}}>
          <NavBar links={links} />
          </Box>
          <Flex sx={{ flexDirection: 'column' }}>
            <Box py={[3, 4, 6]} />
            <Flex sx={{ flexDirection: ['column', 'column', 'row'] }} px={[2,3,4]}>
              <Header/>
              <Box sx={{ flex: 1, maxWidth: ['92vw'], minWidth: [0, '400px'] }}>
                <Code />
              </Box>
            </Flex>
          </Flex>
          <Box mt={3} />
          <Box sx={{flexGrow: 1}}/>
          <Footer />
        </Flex>
      </Flex>
    </ThemeProvider >
  );
}

export default App;
