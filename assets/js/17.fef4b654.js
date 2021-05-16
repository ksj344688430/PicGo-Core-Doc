(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{364:function(t,s,a){"use strict";a.r(s);var r=a(44),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("p",[t._v("picgo 需要配置文件来启动。当你未指定配置文件的时候，picgo 将会使用默认配置文件来启动。")]),t._v(" "),a("h2",{attrs:{id:"默认配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认配置文件"}},[t._v("#")]),t._v(" 默认配置文件")]),t._v(" "),a("p",[t._v("picgo 的默认配置文件为"),a("code",[t._v("~/.picgo/config.json")]),t._v("。其中"),a("code",[t._v("~")]),t._v("为用户目录。不同系统的用户目录不太一样。")]),t._v(" "),a("p",[t._v("linux 和 macOS 均为"),a("code",[t._v("~/.picgo/config.json")]),t._v("。")]),t._v(" "),a("p",[t._v("windows 则为"),a("code",[t._v("C:\\Users\\你的用户名\\.picgo\\config.json")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"自动生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成"}},[t._v("#")]),t._v(" 自动生成")]),t._v(" "),a("p",[a("strong",[t._v("通常来说你只需要配置 "),a("code",[t._v("Uploader")]),t._v(" 即可，所以你可以通过 "),a("code",[t._v("picgo set uploader")]),t._v(" 来进入交互式命令行，配置成功后会自动生成配置文件，无需复制粘贴！其他更多的命令可以参考 "),a("RouterLink",{attrs:{to:"/zh/guide/commands.html"}},[t._v("CLI 命令")]),t._v(" 一章。")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("同时，填好图床配置之后，请务必通过 "),a("code",[t._v("picgo use uploader")]),t._v(" 选择当前要使用的 "),a("code",[t._v("Uploader")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ picgo "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" uploader\n? Choose a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" uploader "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  smms\n❯ tcyun\n  github\n  qiniu\n  imgur\n  aliyun\n  upyun\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Move up and down to reveal "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" choices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"手动生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动生成"}},[t._v("#")]),t._v(" 手动生成")]),t._v(" "),a("p",[t._v("如果你要手动生成配置文件，需要自己创建对应的目录、JSON 文件以及至少有如下的配置项（因此还是推荐通过命令行自动生成配置文件）：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"picBed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uploader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smms"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代表当前的默认上传图床为 SM.MS,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"smms"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 https://sm.ms/home/apitoken 获取的 token")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"picgoPlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为插件预留")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"picbed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed"}},[t._v("#")]),t._v(" picBed")]),t._v(" "),a("p",[t._v("作为 picgo 最主要的配置项，picBed 里包括了当前上传图床，以及所有上传图床的配置。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("插件开发者注意")]),t._v(" "),a("p",[t._v("如果一个 Uploader 的名字为"),a("code",[t._v("xxx")]),t._v("，那么它的配置信息会放置在"),a("code",[t._v("picBed.xxx")]),t._v("里。这个将有助于 PicGo 的 electron 版本进行配置。")])]),t._v(" "),a("h3",{attrs:{id:"picbed-uploader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-uploader"}},[t._v("#")]),t._v(" picBed.uploader")]),t._v(" "),a("ul",[a("li",[t._v("type: string")]),t._v(" "),a("li",[t._v("default: "),a("code",[t._v("smms")])])]),t._v(" "),a("p",[t._v("表明当前的上传图床是哪个。默认值是"),a("code",[t._v("smms")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"picbed-current"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-current"}},[t._v("#")]),t._v(" picBed.current")]),t._v(" "),a("p",[t._v("作用与"),a("code",[t._v("picBed.uploader")]),t._v("一致，主要是为了兼容 PicGo 的 electron 版本而留下的配置。未来有可能抛弃。")]),t._v(" "),a("h3",{attrs:{id:"picbed-smms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-smms"}},[t._v("#")]),t._v(" picBed.smms "),a("Badge",{attrs:{text:"1.4.7+"}})],1),t._v(" "),a("p",[t._v("SMMS 图床的相关配置。注册并登录 "),a("a",{attrs:{href:"https://sm.ms/home/apitoken",target:"_blank",rel:"noopener noreferrer"}},[t._v("smms"),a("OutboundLink")],1),t._v(" 获取 "),a("code",[t._v("token")]),t._v("。可以查看 PicGo 的 "),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#smms",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v(" 进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册后获取的 api token")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"picbed-qiniu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-qiniu"}},[t._v("#")]),t._v(" picBed.qiniu")]),t._v(" "),a("p",[t._v("七牛图床的相关配置。可以查看 PicGo 的 "),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#%E4%B8%83%E7%89%9B%E5%9B%BE%E5%BA%8A",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v("进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secretKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储空间名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z0"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z1"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z2"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"na0"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"as0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储区域编号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网址后缀，比如？imgslim")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义存储路径，比如 img/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"picbed-upyun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-upyun"}},[t._v("#")]),t._v(" picBed.upyun")]),t._v(" "),a("p",[t._v("又拍云的相关配置。可以查看 PicGo 的 "),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#%E5%8F%88%E6%8B%8D%E4%BA%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v("进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储空间名，及你的服务名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作员")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 密码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对图片的一些后缀处理参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义存储路径，比如 img/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加速域名，注意要加 http://或者 https://")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"picbed-tcyun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-tcyun"}},[t._v("#")]),t._v(" picBed.tcyun")]),t._v(" "),a("p",[t._v("腾讯云 COS 的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#腾讯云 cos) 进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secretId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secretKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储桶名，v4 和 v5 版本不一样")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储区域，例如 ap-beijing-1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义存储路径，比如 img/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义域名，注意要加 http://或者 https://")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v5"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v4"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// COS 版本，v4 或者 v5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"picbed-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-github"}},[t._v("#")]),t._v(" picBed.github")]),t._v(" "),a("p",[t._v("GitHub 图床的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github 图床)进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仓库名，格式是 username/reponame")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// github token")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义存储路径，比如 img/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义域名，注意要加 http://或者 https://")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"branch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分支名，默认是 main")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"picbed-aliyun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-aliyun"}},[t._v("#")]),t._v(" picBed.aliyun")]),t._v(" "),a("p",[t._v("阿里云 OSS 的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#阿里云 oss) 进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKeyId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKeySecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储空间名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储区域代号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义存储路径")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义域名，注意要加 http://或者 https://")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对图片的一些后缀处理参数 PicGo 2.2.0+ PicGo-Core 1.4.0+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"picbed-imgur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picbed-imgur"}},[t._v("#")]),t._v(" picBed.imgur")]),t._v(" "),a("p",[t._v("Imgur 的相关配置。可以查看 PicGo 的 [wiki](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#imgur 图床)进行配置。")]),t._v(" "),a("p",[t._v("默认值如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imgur 的 clientId")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代理地址，仅支持 http 代理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"picgoplugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgoplugins"}},[t._v("#")]),t._v(" picgoPlugins")]),t._v(" "),a("p",[t._v("这个配置项将会将所有插件名放置进去。主要用于判断插件是否被启用或者禁用。 "),a("strong",[t._v("picgo 自动生成，不需要配置！")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"picgo-plugin-xxx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该插件被启用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"picgo-plugin-yyy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该插件被禁用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"transformer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transformer"}},[t._v("#")]),t._v(" transformer")]),t._v(" "),a("p",[t._v("这个配置项主要用于存放第三方插件里的 Transformer 的相关配置。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("插件开发者注意")]),t._v(" "),a("p",[t._v("如果一个 Transformer 的名字为"),a("code",[t._v("xxx")]),t._v("，那么它的配置信息会放置在"),a("code",[t._v("transformer.xxx")]),t._v("里。这将有助于 PicGo 的 electron 版本进行配置。")])]),t._v(" "),a("p",[t._v("默认值："),a("code",[t._v("{}")])]),t._v(" "),a("h2",{attrs:{id:"picgo-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgo-plugin"}},[t._v("#")]),t._v(" picgo-plugin-*")]),t._v(" "),a("p",[t._v("如果你为 picgo 开发了一个插件，如果这个插件本身需要一些配置项，那么这个插件对应的配置应该直接放置在配置文件下的同名配置里：")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"picgo-plugin-xxx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);