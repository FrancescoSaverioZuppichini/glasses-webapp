const templates = {
    'classification': (model) =>
        `from glasses import AutoModel
# create a model
model = AutoModel('${model}')
# change activation
model = AutoModel('${model}', activation = nn.SELU)
# change number of classes (default is 1000 )
model = AutoModel('${model}', n_classes=100)
# change the initial convolution
# freeze only the convolution weights
model = AutoModel('${model}')
model.freeze(who=model.encoder)
# to extract the inner features, 
# first notify the model we want them
model.encoder.features
model(torch.rand((1,3,224,224)))
# get the features :)
features = model.encoder.features
`
,
'segmentation': (model) => 
`from functools import partial
from glasses.nn.models.segmentation.unet import UNet, UNetDecoder
# vanilla Unet
unet = UNet()
# let's change the encoder
unet = UNet.from_encoder(partial(AutoModel.from_name, '${model}'))
# mmm I want more layers in the decoder!
unet = UNet(decoder=partial(UNetDecoder, widths=[256, 128, 64, 32, 16]))
# maybe resnet was better
unet = UNet(encoder=lambda **kwargs: ResNet.resnet26(**kwargs).encoder)
# same API
unet.summary(input_shape=(1,224,224))`,

'interpretability': (model) => 

`import requests
from PIL import Image
from io import BytesIO
from glasses.interpretability import GradCam, SaliencyMap
from torchvision.transforms import Normalize
r = requests.get('https://i.insider.com/5df126b679d7570ad2044f3e?width=700&format=jpeg&auto=webp')
im = Image.open(BytesIO(r.content))
# un normalize when done
postprocessing = Normalize(-cfg.mean / cfg.std, (1.0 / cfg.std))
# apply preprocessing
x =  cfg.transform(im).unsqueeze(0)
model = AutoModel('${model}'
_ = model.interpret(x, using=GradCam(), postprocessing=postprocessing).show()`,

'customization': (model) => 
`from glasses.nn.models.classification.vgg import VGGBasicBlock
from glasses.nn.models.classification.resnet import ResNetBasicBlock, ResNetBottleneckBlock
from glasses.nn.models.classification.senet import SENetBasicBlock, SENetBottleneckBlock
from glasses.nn.models.classification.resnetxt import ResNetXtBottleNeckBlock
from glasses.nn.models.classification.densenet import DenseBottleNeckBlock
from glasses.nn.models.classification.wide_resnet import WideResNetBottleNeckBlock
from glasses.nn.models.classification.efficientnet import EfficientNetBasicBlock
from glasses import AutoModel
# load a model and change the inner block
model = model = AutoModel('${model}', block=WideResNetBottleNeckBlock)
# create a custom block and pass it to the model
from glasses.nn.att import SpatialSE
from  glasses.nn.models.classification.resnet import ResNetBottleneckBlock
# create a squeeze and excitation bottleneck block!
class SEResNetBottleneckBlock(ResNetBottleneckBlock):
    def __init__(self, in_features: int, out_features: int, squeeze: int = 16, *args, **kwargs):
        super().__init__(in_features, out_features, *args, **kwargs)
        # all the weights are in block, we want to apply se after the weights
        self.block.add_module('se', SpatialSE(out_features, reduction=squeeze))
# let's pass it to the model
model = model = AutoModel('${model}', block=SEResNetBottleneckBlock)

`
}

const descriptions = {
    'classification' : 'Glasses supports all the major SOTA models and allows to quickly change activation, classes and to store the inter-layer features.',
    'segmentation': 'Glasses supports various segmentation models and it is easy to change between different decoders architectures.',
    'interpretability': 'Glases models have interpretability build-in!',
    'customization': 'Glasses models have the same structure, making it easy to swap inner blocks'
}

const models = ['resnet34', 'se_resnet34', 'resnext50_32x4d', 'densenet121', 'vgg16',
'efficientnet_b1', 'efficientnet_lite0']

export { templates, models, descriptions }