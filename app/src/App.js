import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme.js'
import { Box, Card, Text, Link, Flex, Button } from 'theme-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

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

const codeString = `# change activation
ResNet.resnet18(activation = nn.SELU)
# change number of classes (default is 1000 )
ResNet.resnet18(n_classes=100)
# pass a different block
ResNet.resnet18(block=SENetBasicBlock)
# change the initial convolution
model = ResNet.resnet18()
model.encoder.gate.conv1 = nn.Conv2d(3, 64, kernel_size=3)
# store each feature
x = torch.rand((1, 3, 224, 224))
model = ResNet.resnet18()
features = []
x = model.encoder.gate(x)
for block in model.encoder.blocks:
    >>> x = block(x)
    >>> features.append(x)
print([x.shape for x in features])
# [torch.Size([1, 64, 56, 56]), torch.Size([1, 128, 28, 28]), torch.Size([1, 256, 14, 14]), torch.Size([1, 512, 7, 7])]`

const Code = () => (
  <Card variant='code' sx={{ maxWidth: ['66vw', '600px'] }}>
    <SyntaxHighlighter language="python" style={atomOneLight} >
      {codeString}
    </SyntaxHighlighter>
  </Card>
)

const Actions = () => {
  const toLink = (href) => window.location = href

  return (
    <Flex sx={{flexWrap: 'wrap'}}> 
      <Button m={2} onClick={() => toLink('https://francescosaveriozuppichini.github.io/glasses/index.html')}>Doc</Button>
      <Button m={2}>Examples</Button>
      <Button m={2}>Models</Button>
    </Flex>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box variant='app'>
        <Box variant='container'>
          <NavBar links={links} />

          <Flex sx={{ flexDirection: 'column' }} variant='centering'>
            <Box py={6} />
            <Flex sx={{ flexDirection: ['column', 'column', 'row'] }}>
              <Box sx={{ flex: 2 }}>
                <Flex sx={{ flexDirection: 'column' }}>
                  <Text sx={{ fontSize: 6, fontWeight: 'bold' }} >Glasses <span role='img' aria-label="glasses">😎</span></Text>
                  <Text mt={2} sx={{ fontSize: 4, maxWidth: '600px' }} >Compact, concise and customizable
             deep learning <strong>computer vision</strong> library
built on top of <strong>PyTorch</strong></Text>
                  <Box my={4} />
                  <Actions />
                  <Box my={2} />
                </Flex>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Code />
              </Box>
            </Flex>
          </Flex>
        </Box>

      </Box>
    </ThemeProvider >
  );
}

export default App;
