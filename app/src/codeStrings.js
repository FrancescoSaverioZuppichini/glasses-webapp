export default  [
    `# change activation
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
]