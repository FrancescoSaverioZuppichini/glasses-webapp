const template = (model) =>
    `from glasses.nn.models.classification import ${model.split('.')[0]}
# change activation
${model}(activation = nn.SELU)
# change number of classes (default is 1000 )
${model}(n_classes=100)
# change the initial convolution
model =${model}()
model.encoder.gate.conv = nn.Conv2d(3, 64, kernel_size=3)
# store each feature
x = torch.rand((1, 3, 224, 224))
model = ${model}()
features = []
x = model.encoder.gate(x)
for block in model.encoder.blocks:
    x = block(x)
    features.append(x)        `

export default ['ResNet.resnet18', 'SeResNet.resnet34', 'MobileNetV2', 'VGG.vgg19', 'AlexNet',
    'DenseNet.densenet169', 'EfficientNet.b1'].map(el => template(el))