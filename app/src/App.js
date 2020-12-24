import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme.js'
import { Box, Card, Text, Link, Flex, Button } from 'theme-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { templates, models } from './codeStrings'
import ReactMarkdown from 'react-markdown'
import github from './github.svg'

const links = [{
  text: 'Glasses',
  href: '#'
},
{
  text: 'Doc',
  href: 'https://francescosaveriozuppichini.github.io/glasses/'
},
{
  text: 'Examples',
  href: 'https://francescosaveriozuppichini.github.io/glasses/tutorials/Transfer%20Learning.html'
},
{
  text: 'Models',
  href: 'https://francescosaveriozuppichini.github.io/glasses/glasses.models.html'
}

]

const NavBar = ({ links }) => (
  <Flex sx={{ width: '100%' }}>
    {links.map(({ text, href }) =>
      (
        <Link href={href} variant='primary' key={href}>
          <Text mx={3} sx={{ fontSize: 3 }}>{text}</Text>
        </Link>
      ))}
    <Box sx={{ flexGrow: 1 }}>

    </Box>
    <Link href='https://github.com/FrancescoSaverioZuppichini/glasses'>
      <img height='28px' src={github} alt='git'></img>
    </Link>
  </Flex>
)

const Typing = ({ text, children, speed = 15, onFinish }) => {
  const [currentText, setCodeString] = useState('')
  const [lastIndex, setLastIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const c = text[lastIndex]
      if ((lastIndex + 1) % text.length) {
        setCodeString(lastIndex > 0 ? currentText + c : c)
        setLastIndex((lastIndex + 1) % text.length)
      } else {
        if (onFinish) {
          onFinish()
          setLastIndex(0)
        }
      }
    }, speed)
    return () => clearTimeout(timer);
  })

  return (
    <div>
      {children(currentText)}
    </div>
  )
}


const Code = () => {
  const [lastIndex, setLastIndex] = useState(0)

  const code = templates['classification'](models[lastIndex])

  const onTypingFinish = () => {
    const newLastIndex = lastIndex + 1 < code.length ? lastIndex + 1 : 0
    setLastIndex(newLastIndex)
  }

  return (
    <Card variant='code' sx={{ minHeight: '400px' }}>
      <Typing text={code} onFinish={onTypingFinish}>
        {currentText => (
          <SyntaxHighlighter language="python" style={atomOneLight} >
            {currentText}
          </SyntaxHighlighter>
        )}
      </Typing>
    </Card>

  )
}



const Actions = () => {
  const toLink = (href) => window.location = href

  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <Button m={2} onClick={() => toLink('https://francescosaveriozuppichini.github.io/glasses/')}>Doc</Button>
      <Button m={2} onClick={() => toLink('https://francescosaveriozuppichini.github.io/glasses/tutorials/Transfer%20Learning.html')}>Examples</Button>
      <Button m={2} onClick={() => toLink('https://francescosaveriozuppichini.github.io/glasses/glasses.models.html')}>Models</Button>
    </Flex>
  )
}

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

const Footer = () => (
  <Flex>
    <Text>Made with <span role='img' aria-label="love">❤️</span> by
    <Link href='https://www.linkedin.com/in/francesco-saverio-zuppichini-94659a150/' variant='primary'> Francesco Saverio Zuppichini</Link> and
    <Link href='https://www.linkedin.com/in/francescocicala/' variant='primary'> Francesco Cicala</Link>
    </Text>
  </Flex >

)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex variant='app'>
        <Flex variant='container' sx={{ flexDirection: 'column', width: '100%' }}>
          <Box sx={{ flex: 0 }}>
            <NavBar links={links} />
          </Box>
          <Box sx={{flexGrow: 1}} />
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex sx={{ flexDirection: ['column', 'column', 'column', 'row'] }} px={[2, 3, 4]}>
              <Header />
              <Box sx={{ flex: 1, minWidth: [0, '400px'] }}>
                <Code />
              </Box>
            </Flex>
          </Flex>
          <Box mt={3} />
          <Box sx={{ flexGrow: 1 }} />
          <Box p={4}><Footer /></Box>
        </Flex>
      </Flex>
    </ThemeProvider >
  );
}

export default App;
