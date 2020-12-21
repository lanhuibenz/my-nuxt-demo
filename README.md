# my-nuxt-demo

## Project desc
	本代码模板使用nuxtjs2搭建的html5界面，以供一般性普通门户界面展示和业务逻辑使用，仅为代码框架基础，业务逻辑视具体项目情况而定。

## Build Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# inspect the nuxt process on chrome
$ npm run dev-inspect
```


### Customize configuration and help
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# 快速使用

## 主要使用的包（已使用）
### 1、vuejs 2
### 2、axios：http请求
### 3、rap2: rap2接口mock
### 4、element-ui：ui库
### 5、dayjs：时间日期处理函数库
### 6、cookie-universal-nuxt: 处理cookies的模块，this.$cookies调用即可


## 代码src目录说明
```
├─.nuxt                     // nuxt根据代码变化自动转化的一个文件夹，不需要改动
├─api                       // 接口文件夹
│  ├─api-demo               // 调用接口的demo，用axios
│  ├─api-rap2-demo          // 调用rap2接口的demo，用axios
├─components                // 项目中通用化的组件目录，如一些页头页尾啥的
├─config                    // 项目一些公共化配置，给到nuxt.config.js使用
│  ├─axios                  // axios参数配置
│  ├─proxy-list             // 代理http的配置                    
├─layouts                   // 布局界面，项目默认布局界面统一由layouts/default.vue再加Nuxt组件展示
├─middleware                // 中间件，暂时没用
├─pages                     // nuxt项目界面，nuxt根据这个文件夹动态生成路由
│  ├─detail                 // 详情界面
│  ├─error                  // 报错界面
│  │  ├─forbidden           // 提示无权限界面
│  │  └─not-found           // 提示404界面
│  ├─home                   // 首页界面
│  └─list                   // 列表界面
├─plugins                   // nuxtjs自定义插件，可供nuxt项目全局调用
│  └─axios                  // axios插件，统一化处理所有的axios请求
│  └─element-ui             // elementui库插件
│  └─rap2                   // rap2插件
├─rapper                    // rap2接口仓库生成的rap的接口函数，从typescript转成js
├─static
└─store                     // 设置vuex的状态管理
└─nuxt.config.js            // nuxt项目总配置
└─README.md                 // 项目说明文档
└─server-debugger           // 运行项目debug状态的脚本，具体执行看package.json里面的脚本
└─package.json              // 项目package.json
```

