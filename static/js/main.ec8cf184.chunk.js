(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{345:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(33),r=n.n(i),s=(n(47),n(15)),c=(n(48),n(351)),l={colors:{text:"#000",textLight:"white",background:"#F4F4F4",primary:"#6A66F2",primaryLight:"A29FFF",dark:"#413BFF",gray:"C4C4C4",warning:"#F26666",warningActive:"#FF6099",active:"#9B66F2",cardBg:"white"},fonts:{body:"'Roboto', sans-serif",heading:"'Roboto', sans-serif",monospace:"Menlo, monospace"},breakpoints:["40em","56em","64em","100em"],fontWeights:{thin:200,body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},fontSizes:[14,16,20,24,28,48,64],app:{margin:0,minWidth:"100vw",background:"linear-gradient(270deg, #AA47BA 0%, #4D5098 100%)",color:"white"},spacer:{flex:"1 1"},links:{primary:{color:"inherit",textDecoration:"none","&:active":{opacity:.5},"&:hover":{opacity:.5}}},container:{padding:[3,4]},cards:{code:{background:"rgb(250, 250, 250)",boxShadow:"8px 8px 16px 8px rgba(0, 0, 0, 0.25)",borderRadius:"36px",padding:3,color:"black"}},buttons:{primary:{background:"#8F61CA",boxShadow:"8px 8px 16px rgba(0, 0, 0, 0.25)",borderRadius:"32px",fontSize:3,paddingX:4,paddingY:3,outline:"none","&:active":{boxShadow:"2px 2px 16px rgba(0, 0, 0, 0.25)"},"&:hover":{boxShadow:"2px 2px 16px rgba(0, 0, 0, 0.25)"}},text:{background:"rgba(143, 97, 202, 0.2)",boxShadow:"8px 8px 16px rgba(0, 0, 0, 0.25)",borderRadius:"32px",fontSize:2,paddingX:4,paddingY:3,outline:"none","&:active":{boxShadow:"2px 2px 16px rgba(0, 0, 0, 0.25)"},"&:hover":{boxShadow:"2px 2px 16px rgba(0, 0, 0, 0.25)"}}},centering:{flexDirection:"column",justifyContent:"center",alignItems:"center"},vCentering:{justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex",width:"100%"},section:{paddingX:[2,3,5],paddingY:[4,5,5]}},m=n(349),d=n(350),u=n(348),p={classification:function(e){return"from glasses import AutoModel\n# create a model\nmodel = AutoModel('".concat(e,"')\n# change activation\nmodel = AutoModel('").concat(e,"', activation = nn.SELU)\n# change number of classes (default is 1000 )\nmodel = AutoModel('").concat(e,"', n_classes=100)\n# change the initial convolution\n# freeze only the convolution weights\nmodel = AutoModel('").concat(e,"')\nmodel.freeze(who=model.encoder)\n# to extract the inner features, \n# first notify the model we want them\nmodel.encoder.features\nmodel(torch.rand((1,3,224,224)))\n# get the features :)\nfeatures = model.encoder.features\n")},segmentation:function(e){return"from functools import partial\nfrom glasses.nn.models.segmentation.unet import UNet, UNetDecoder\n# vanilla Unet\nunet = UNet()\n# let's change the encoder\nunet = UNet.from_encoder(partial(AutoModel.from_name, '".concat(e,"'))\n# mmm I want more layers in the decoder!\nunet = UNet(decoder=partial(UNetDecoder, widths=[256, 128, 64, 32, 16]))\n# maybe resnet was better\nunet = UNet(encoder=lambda **kwargs: ResNet.resnet26(**kwargs).encoder)\n# same API\nunet.summary(input_shape=(1,224,224))")},interpretability:function(e){return"import requests\nfrom PIL import Image\nfrom io import BytesIO\nfrom glasses.interpretability import GradCam, SaliencyMap\nfrom torchvision.transforms import Normalize\nr = requests.get('https://i.insider.com/5df126b679d7570ad2044f3e?width=700&format=jpeg&auto=webp')\nim = Image.open(BytesIO(r.content))\n# un normalize when done\npostprocessing = Normalize(-cfg.mean / cfg.std, (1.0 / cfg.std))\n# apply preprocessing\nx =  cfg.transform(im).unsqueeze(0)\nmodel = AutoModel('".concat(e,"'\n_ = model.interpret(x, using=GradCam(), postprocessing=postprocessing).show()")},customization:function(e){return"from glasses.nn.models.classification.vgg import VGGBasicBlock\nfrom glasses.nn.models.classification.resnet import ResNetBasicBlock, ResNetBottleneckBlock\nfrom glasses.nn.models.classification.senet import SENetBasicBlock, SENetBottleneckBlock\nfrom glasses.nn.models.classification.resnetxt import ResNetXtBottleNeckBlock\nfrom glasses.nn.models.classification.densenet import DenseBottleNeckBlock\nfrom glasses.nn.models.classification.wide_resnet import WideResNetBottleNeckBlock\nfrom glasses.nn.models.classification.efficientnet import EfficientNetBasicBlock\nfrom glasses import AutoModel\n# load a model and change the inner block\nmodel = model = AutoModel('".concat(e,"', block=WideResNetBottleNeckBlock)\n# create a custom block and pass it to the model\nfrom glasses.nn.att import SpatialSE\nfrom  glasses.nn.models.classification.resnet import ResNetBottleneckBlock\n# create a squeeze and excitation bottleneck block!\nclass SEResNetBottleneckBlock(ResNetBottleneckBlock):\n    def __init__(self, in_features: int, out_features: int, squeeze: int = 16, *args, **kwargs):\n        super().__init__(in_features, out_features, *args, **kwargs)\n        # all the weights are in block, we want to apply se after the weights\n        self.block.add_module('se', SpatialSE(out_features, reduction=squeeze))\n# let's pass it to the model\nmodel = model = AutoModel('").concat(e,"', block=SEResNetBottleneckBlock)\n\n")}},f={classification:"Glasses supports all the major SOTA models and allows to quickly change activation, classes and to store the inter-layer features.",segmentation:"Glasses supports various segmentation models and it is easy to change between different decoders architectures.",interpretability:"Glases models have interpretability build-in!",customization:"Glasses models have the same structure, making it easy to swap inner blocks"},g=["resnet34","se_resnet34","resnext50_32x4d","densenet121","vgg16","efficientnet_b1","efficientnet_lite0"],h=n(34),x=n.n(h),b=n(35),E=n.n(b),v=[{text:"Glasses",href:"#"},{text:"Doc",href:"https://francescosaveriozuppichini.github.io/glasses/"},{text:"Examples",href:"https://francescosaveriozuppichini.github.io/glasses/tutorials/README.html#getting-started"},{text:"Models",href:"https://francescosaveriozuppichini.github.io/glasses/glasses.nn.models.html"}],k=["classification","segmentation","interpretability","customization"],w=function(e){var t=e.links;return o.a.createElement(m.d,{sx:{width:"100%"}},t.map((function(e){var t=e.text,n=e.href;return o.a.createElement(m.e,{href:n,variant:"primary",key:n},o.a.createElement(m.f,{mx:3,sx:{fontSize:3}},t))})),o.a.createElement(m.a,{sx:{flexGrow:1}}),o.a.createElement(m.e,{href:"https://github.com/FrancescoSaverioZuppichini/glasses"},o.a.createElement("img",{height:"28px",src:E.a,alt:"git"})))},y=function(e){var t=e.text,n=e.children,i=e.speed,r=void 0===i?15:i,c=e.onFinish,l=Object(a.useState)(""),m=Object(s.a)(l,2),d=m[0],u=m[1],p=Object(a.useState)(0),f=Object(s.a)(p,2),g=f[0],h=f[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){var e=t[g];(g+1)%t.length?(u(g>0?d+e:e),h((g+1)%t.length)):c&&(c(),h(0))}),r);return function(){return clearTimeout(e)}})),o.a.createElement("div",null,n(d))},B=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=p.classification(g[n]);return o.a.createElement(m.c,{variant:"code",sx:{minHeight:"400px"}},o.a.createElement(y,{text:r,onFinish:function(){var e=n+1<r.length?n+1:0;i(e)}},(function(e){return o.a.createElement(d.a,{language:"python",style:u.a},e)})))},S=function(){var e=function(e){return window.location=e};return o.a.createElement(m.d,{sx:{flexWrap:"wrap"}},o.a.createElement(m.b,{m:2,onClick:function(){return e("https://francescosaveriozuppichini.github.io/glasses/")}},"Doc"),o.a.createElement(m.b,{m:2,onClick:function(){return e("https://francescosaveriozuppichini.github.io/glasses/tutorials/README.html#getting-started")}},"Examples"),o.a.createElement(m.b,{m:2,onClick:function(){return e("https://francescosaveriozuppichini.github.io/glasses/glasses.nn.models.html")}},"Models"))},z=function(e){var t=e.section,n=e.model,a=void 0===n?"resnet34":n,i=e.backgroundColor,r=void 0===i?"background":i;return o.a.createElement(m.a,{variant:"section",sx:{backgroundColor:r}},o.a.createElement(m.f,{sx:{fontSize:4}},t.charAt(0).toUpperCase()+t.slice(1)),o.a.createElement(m.a,{mb:2}),o.a.createElement(m.d,{sx:{flexDirection:["column","column","row"],alignItems:"center"}},o.a.createElement(m.a,{sx:{flex:1}},o.a.createElement(m.f,{sx:{fontSize:2}},f[t])),o.a.createElement(m.a,{p:3}),o.a.createElement(m.a,{sx:{flex:1,maxWidth:"99%"}},o.a.createElement(m.c,{variant:"code"},o.a.createElement(d.a,{language:"python",style:u.a},p[t](a))))))},N=function(){return o.a.createElement(m.a,{sx:{flex:2}},o.a.createElement(m.d,{sx:{flexDirection:"column"}},o.a.createElement(m.f,{sx:{fontSize:6,fontWeight:"bold"}},"Glasses",o.a.createElement("span",{role:"img","aria-label":"glasses"},"\ud83d\ude0e")),o.a.createElement(x.a,{source:"[![codecov](https://codecov.io/gh/FrancescoSaverioZuppichini/glasses/branch/develop/graph/badge.svg)](https://codecov.io/gh/FrancescoSaverioZuppichini/glasses)"}),o.a.createElement(m.f,{mt:2,sx:{fontSize:4,maxWidth:"800px"}},"Compact, concise and customizable deep learning ",o.a.createElement("strong",null,"computer vision")," library built on top of ",o.a.createElement("strong",null,"PyTorch")),o.a.createElement(m.a,{my:4}),o.a.createElement(S,null),o.a.createElement(m.a,{my:2})))},_=function(){return o.a.createElement(m.d,null,o.a.createElement(m.f,null,"Made with ",o.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," by",o.a.createElement(m.e,{href:"https://www.linkedin.com/in/francesco-saverio-zuppichini-94659a150/",variant:"primary"}," Francesco Saverio Zuppichini")," and",o.a.createElement(m.e,{href:"https://www.linkedin.com/in/francescocicala/",variant:"primary"}," Francesco Cicala")))};var A=function(){return o.a.createElement(c.a,{theme:l},o.a.createElement(m.d,{variant:"app"},o.a.createElement(m.d,{variant:"container",sx:{flexDirection:"column",width:"100%"}},o.a.createElement(m.a,{sx:{flex:0}},o.a.createElement(w,{links:v})),o.a.createElement(m.d,{sx:{flexDirection:"column"}},o.a.createElement(m.a,{py:[3,4,6]}),o.a.createElement(m.d,{sx:{flexDirection:["column","column","column","row"]},px:[2,3,4]},o.a.createElement(N,null),o.a.createElement(m.a,{sx:{flex:1,maxWidth:["92vw"],minWidth:[0,"600px"]}},o.a.createElement(B,null)))),o.a.createElement(m.a,{mt:3}),o.a.createElement(m.a,{sx:{flexGrow:1}}),o.a.createElement(m.a,{py:[3,4,6]}))),k.map((function(e,t){var n=t%2?"background":"white";return o.a.createElement(z,{section:e,model:"resnet34",backgroundColor:n,key:e})})),o.a.createElement(m.a,{p:4},o.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports=n.p+"static/media/github.f0aed993.svg"},42:function(e,t,n){e.exports=n(345)},47:function(e,t,n){},48:function(e,t,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.ec8cf184.chunk.js.map