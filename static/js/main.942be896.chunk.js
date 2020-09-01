(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{345:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),o=n.n(i),c=(n(47),n(12)),l=(n(48),n(351)),s={colors:{text:"#000",textLight:"white",background:"#F4F4F4",primary:"#6A66F2",primaryLight:"A29FFF",dark:"#413BFF",gray:"C4C4C4",warning:"#F26666",warningActive:"#FF6099",active:"#9B66F2",cardBg:"white"},fonts:{body:"'Roboto', sans-serif",heading:"'Roboto', sans-serif",monospace:"Menlo, monospace"},breakpoints:["40em","56em","64em","100em"],fontWeights:{thin:200,body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},fontSizes:[14,16,20,24,28,48,64],app:{margin:0,minWidth:"100vw",minHeight:"100vh",background:"linear-gradient(270deg, #AA47BA 0%, #4D5098 100%)",color:"white"},spacer:{flex:"1 1"},links:{primary:{color:"inherit",textDecoration:"none","&:active":{opacity:.5},"&:hover":{opacity:.5}}},container:{padding:[3,4]},cards:{code:{background:"rgb(250, 250, 250)",boxShadow:"8px 8px 16px rgba(0, 0, 0, 0.25)",borderRadius:"36px",padding:3,color:"black"}},buttons:{primary:{background:"#8F61CA",boxShadow:"8px 8px 16px rgba(0, 0, 0, 0.25)",borderRadius:"32px",fontSize:3,paddingX:4,paddingY:3,outline:"none","&:active":{boxShadow:"2px 2px 16px rgba(0, 0, 0, 0.25)"},"&:hover":{boxShadow:"2px 2px 16px rgba(0, 0, 0, 0.25)"}}},centering:{flexDirection:"column",justifyContent:"center",alignItems:"center"},vCentering:{justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex",width:"100%"}},m=n(349),u=n(350),p=n(348),h=["# change activation\nResNet.resnet18(activation = nn.SELU)\n# change number of classes (default is 1000 )\nResNet.resnet18(n_classes=100)\n# pass a different block\nResNet.resnet18(block=SENetBasicBlock)\n# change the initial convolution\nmodel = ResNet.resnet18()\nmodel.encoder.gate.conv1 = nn.Conv2d(3, 64, kernel_size=3)\n# store each feature\nx = torch.rand((1, 3, 224, 224))\nmodel = ResNet.resnet18()\nfeatures = []\nx = model.encoder.gate(x)\nfor block in model.encoder.blocks:\n    >>> x = block(x)\n    >>> features.append(x)\nprint([x.shape for x in features])\n# [torch.Size([1, 64, 56, 56]), torch.Size([1, 128, 28, 28]), torch.Size([1, 256, 14, 14]), torch.Size([1, 512, 7, 7])]"],d=n(34),f=n.n(d),g=n(35),x=n.n(g),b=[{text:"Glasses",href:"#"},{text:"Doc",href:"https://francescosaveriozuppichini.github.io/glasses/"},{text:"Examples",href:"https://francescosaveriozuppichini.github.io/glasses/glasses.html#"},{text:"Models",href:"https://francescosaveriozuppichini.github.io/glasses/glasses.nn.models.html"}],v=function(e){var t=e.links;return r.a.createElement(m.d,{sx:{width:"100%"}},t.map((function(e){var t=e.text,n=e.href;return r.a.createElement(m.e,{href:n,variant:"primary",key:n},r.a.createElement(m.f,{mx:3,sx:{fontSize:3}},t))})),r.a.createElement(m.a,{sx:{flexGrow:1}}),r.a.createElement(m.e,{href:"https://github.com/FrancescoSaverioZuppichini/glasses"},r.a.createElement("img",{height:"28px",src:x.a,alt:"git"})))},E=function(e){var t=e.text,n=e.children,i=e.speed,o=void 0===i?10:i,l=Object(a.useState)(""),s=Object(c.a)(l,2),m=s[0],u=s[1],p=Object(a.useState)(0),h=Object(c.a)(p,2),d=h[0],f=h[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){var e=t[d];(d+1)%t.length&&(u(d>0?m+e:e),f((d+1)%t.length))}),o);return function(){return clearTimeout(e)}})),r.a.createElement("div",null,n(m))},w=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(0),l=Object(c.a)(o,2),s=l[0],d=l[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){var e=h[0][s];(s+1)%h[0].length&&(i(s>0?n+e:e),d((s+1)%h[0].length))}),10);return function(){return clearTimeout(e)}})),r.a.createElement(m.c,{variant:"code",sx:{minHeight:"400px"}},r.a.createElement(E,{text:h[0]},(function(e){return r.a.createElement(u.a,{language:"python",style:p.a},e)})))},y=function(){return r.a.createElement(m.d,{sx:{flexWrap:"wrap"}},r.a.createElement(m.b,{m:2,onClick:function(){return e="https://francescosaveriozuppichini.github.io/glasses/",window.location=e;var e}},"Doc"),r.a.createElement(m.b,{m:2},"Examples"),r.a.createElement(m.b,{m:2},"Models"))},k=function(){return r.a.createElement(m.d,null,r.a.createElement(m.f,null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," by",r.a.createElement(m.e,{href:"https://www.linkedin.com/in/francesco-saverio-zuppichini-94659a150/",variant:"primary"}," Francesco Saverio Zuppichini")," and",r.a.createElement(m.e,{href:"https://www.linkedin.com/in/francescocicala/",variant:"primary"}," Francesco Cicala")))},S=function(){return r.a.createElement(m.a,{sx:{flex:2}},r.a.createElement(m.d,{sx:{flexDirection:"column"}},r.a.createElement(m.f,{sx:{fontSize:6,fontWeight:"bold"}},"Glasses",r.a.createElement("span",{role:"img","aria-label":"glasses"},"\ud83d\ude0e")),r.a.createElement(f.a,{source:"[![codecov](https://codecov.io/gh/FrancescoSaverioZuppichini/glasses/branch/develop/graph/badge.svg)](https://codecov.io/gh/FrancescoSaverioZuppichini/glasses)"}),r.a.createElement(m.f,{mt:2,sx:{fontSize:4,maxWidth:"800px"}},"Compact, concise and customizable deep learning ",r.a.createElement("strong",null,"computer vision")," library built on top of ",r.a.createElement("strong",null,"PyTorch")),r.a.createElement(m.a,{my:4}),r.a.createElement(y,null),r.a.createElement(m.a,{my:2})))};var F=function(){return r.a.createElement(l.a,{theme:s},r.a.createElement(m.d,{variant:"app"},r.a.createElement(m.d,{variant:"container",sx:{flexDirection:"column",width:"100%"}},r.a.createElement(m.a,{sx:{flex:0}},r.a.createElement(v,{links:b})),r.a.createElement(m.d,{sx:{flexDirection:"column"}},r.a.createElement(m.a,{py:[3,4,6]}),r.a.createElement(m.d,{sx:{flexDirection:["column","column","row"]},px:[2,3,4]},r.a.createElement(S,null),r.a.createElement(m.a,{sx:{flex:1,maxWidth:["92vw"],minWidth:[0,"400px"]}},r.a.createElement(w,null)))),r.a.createElement(m.a,{mt:3}),r.a.createElement(m.a,{sx:{flexGrow:1}}),r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports=n.p+"static/media/github.f0aed993.svg"},42:function(e,t,n){e.exports=n(345)},47:function(e,t,n){},48:function(e,t,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.942be896.chunk.js.map