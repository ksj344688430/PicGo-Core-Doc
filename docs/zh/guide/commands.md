# CLI命令

PicGo-Core 支持命令行模式直接使用。在你全局安装了`picgo`之后，你可以通过`picgo -h`来查看所有命令：

```bash
$ picgo -h

  Usage: picgo [options] [command]

  Options:

    -v, --version                 output the version number
    -d, --debug                   debug mode
    -s, --silent                  silent mode
    -c, --config <path>           set config path
    -h, --help                    output usage information

  Commands:

    install|add <plugins...>      install picgo plugin
    uninstall|rm <plugins...>     uninstall picgo plugin
    update <plugins...>           update picgo plugin
    set|config <module> [name]    configure config of picgo modules
    upload|u <input...>           upload, go go go
    choose|ch [options] [module]  choose modules of picgo
```

::: tip
其中，命令选项如果是用`<>`包围起来的为必须输入项，如果是用`[]`包围起来的则为可选输入项。
有些命令支持简写，比如`picgo upload`可以写为`picgo u`。
:::

PicGo-Core 命令行的实现来自于[commander.js](https://github.com/tj/commander.js/)与[inquirer.js](https://github.com/SBoudrias/Inquirer.js/)。下面将介绍各个命令以及如何配置。

## choose|ch

> 该命令用于选择picgo模块。模块主要有三种：1. transformer 2. uploader 3. plugins

```bash
$ picgo choose -h

  Usage: choose|ch [options] [module]

  choose modules of picgo

  Options:

    -l, --list  Display config
    -h, --help  output usage information
```

PicGo-Core内置了如下的内容：

- transformer:
  - path
  - base64
- uploader:
  - smms -> SM.MS
  - tcyun -> 腾讯云COS
  - upyun -> 又拍云
  - aliyun -> 阿里云OSS
  - qiniu -> 七牛云
  - imgur -> Imgur
  - weibo -> 微博图床
  - github -> GitHub

::: tip
通常来说，在命令行模式下你只需要选择`path`作为picgo的`transformer`即可。
:::

具体使用可以通过`picgo choose` 或者 `picgo choose uploader|transformer|plugins`来选择你需要的模块内容，这将会进入一个交互式命令行：

```bash
$ picgo choose
? Choose an uploader (Use arrow keys)
  smms
❯ tcyun
  weibo
  github
  qiniu
  imgur
  aliyun
(Move up and down to reveal more choices)
```

选择完后，picgo将会使用你选择的模块进行上传。在上传前有些模块可能需要配置。比如一些图床的key、token等。这个时候你就需要下面会提到的命令`set|config`来配置你选择的模块内容。

## config|set

> 该命令用于配置某些模块的一些配置项。模块主要有三种：1. transformer 2. uploader 3. plugins

```bash
$ picgo set -h

  Usage: set|config [options] <module> [name]

  configure config of picgo modules

  Options:

    -h, --help  output usage information
```

::: tip
通常来说，PicGo-Core默认只需要配置Uploader即可。所以你可以直接通过`picgo set uploader`或者`picgo set uploader weibo|tcyun|...`等命令直接进入交互式命令行。
:::

PicGo-Core内置的图床的配置项细节可以参考PicGo的配置[wiki](https://github.com/Molunerfinn/PicGo/wiki/%E8%AF%A6%E7%BB%86%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BD%BF%E7%94%A8)。

如果某个uploader或者transformer或者plugin没有可配置项，picgo也会提示配置成功，不需要担心。

```bash
$ picgo set transformer path
[PicGo SUCCESS]: Configure config successfully!
```

## upload|u

> 该命令用于上传图片到图床。通常是上传磁盘上已有的图片，可以同时上传多张。

::: tip
上传多张图片的时候用空格隔开
:::

```bash
$ picgo u ./Test-测试.jpg ./test-qiniu.png
[PicGo INFO]: Before transform
[PicGo INFO]: Transforming...
[PicGo INFO]: Before upload
[PicGo INFO]: Uploading...
[PicGo SUCCESS]:
https://i.loli.net/2018/09/06/5b9134645b9df.jpg
https://i.loli.net/2018/09/06/5b9134651af34.png
```

## install|add

> 该命令用于安装npm上的picgo的插件。picgo的插件名都是以`picgo-plugin-`开头的。可以一次性安装多个插件，用空格隔开即可。

::: tip
PicGo会把插件安装在配置文件所在的目录下。默认配置文件在`~/.picgo/`下，所以插件会安装在`~/.picgo/node_modules/`下。
:::

你可以通过npm的官方网站查找目前所有的picgo的[插件](https://www.npmjs.com/search?q=picgo-plugin-)。
然后再通过：

```bash
picgo install picgo-plugin-xxx
```
来安装插件。你安装了之后，可以通过`picgo ch plugins`来选择开不开启这个插件。

## uninstall|rm

> 该命令用于删除你所安装的picgo插件。如果不存在将会报错。

```bash
picgo uninstall picgo-plugin-xxx
```

## update

> 该命令用于更新已经安装的picgo插件。如果不存在将会报错。

```bash
picgo update picgo-plugin-xxx
```