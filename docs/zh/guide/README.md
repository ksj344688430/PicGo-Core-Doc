# 介绍

PicGo-Core是[PicGo](https://github.com/Molunerfinn/PicGo)2.0版本里将会预置的底层核心组件。它可以看做是一个简单的上传流程系统。

## 特性

- 支持CLI调用
- 支持API调用
- 支持插件系统

## 它是如何工作的？

下图是PicGo-Core的生命周期：

![flow](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo-core.jpg)

### 4个部件

1. Input（输入）：接受来自外部的图片输入，默认是通过路径或者完整的图片base64信息
2. Transformer（转换器）：把输入转换成可以被上传器上传的图片对象（包含图片尺寸、base64、图片名等信息）
3. Uploader（上传器）：将来自转换器的输出上传到指定的地方，默认的上传器将会是SM.MS
4. Output（输出）：输出上传的结果，通常可以在输出的imgUrl里拿到结果

### 3个生命周期钩子

1. beforeTransform：可以获取input信息
2. beforeUpload：可以获取通过转换器的output信息
3. afterUpload：可以获取最终的output信息

一张图片通过上述的流程便可以实现上传到指定地点并获取URL。

::: tip
插件可以开发不同的Uploader、Transformer，还可以接入3个生命周期钩子实现复杂的上传需求。
:::