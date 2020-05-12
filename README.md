# 圆舟 YuanZhou-Build

## 项目简述

YuanZhou-Build
一个基于 midway+ice 框架的 node 中后台应用，仿搭建系统 cms 的 demo

### 总体技术栈

前端：ts+react hooks+ice
后端：ts+midway+mysql

### 希望完成的技能点

1. ✅ 使用 ts
2. ✅ 使用 react hooks
3. ✅ 微前端架构
4. ✅ 代码即文档，接口 doc 自动化
5. ✅ 使用装饰器
6. ❌ 自定义装饰器
7. ✅ 有前后端的研发规范文档，包含 lint，ci，目录命名，git flow 等
8. ❌ CI/git-flow

### TODO

1. 功能仅限 demo
2. 只完成 curd 功能，一些 loading 效果等体验功能未做。

## 项目进展

### 应用的功能开发

目前已完成的功能点还十分简单，demo 级别，数据库只涉及到两张表，即对 **会场模板表** 和 **基础物料表** 的 crud 增删改查。
暂无复杂前端交互及复杂状态管理，无复杂数据库结构及数据查询等。
对应的前端页面
![](https://raw.githubusercontent.com/taleyoung/YuanZhou-Build/master/screenshot/frontend1.png)

![](https://raw.githubusercontent.com/taleyoung/YuanZhou-Build/master/screenshot/frontend1.png)

数据表结构

![](https://raw.githubusercontent.com/taleyoung/YuanZhou-Build/master/screenshot/db.png)

### 微前端架构

借助于 ice 体系中的 icestark ，通过 build-plugin-icestark 插件，十分简单的将现有应用改造为微前端应用。
在目前的代码结构中，客户端项目分为 client-framwork 项目和 client-child 项目。

#### 一. client-framework

client-framework 项目是框架主应用，负责提供整体应用的容器，运行在**3333 端口**。
主要的改造方法为：

1. FrameworkLayout 容器层组件布局，以及监听每个应用的挂载与卸载。
2. 在 app.tsx 文件中通过 getApps 钩子发现子应用，设置主应用的路由，主要通过获取子应用的 js 和 css 文件来加载子应用。

![](https://raw.githubusercontent.com/taleyoung/YuanZhou-Build/master/screenshot/framework.png)

#### 二. client-child

client-child 项目是一个子应用，给主应用提供 js/css 文件，运行在**3334 端口**。
在目前的代码实现中，client-child 完成了 BigSale 会场模板和编辑页面

![](https://raw.githubusercontent.com/taleyoung/YuanZhou-Build/master/screenshot/child.png)

#### swagger 的接口自动化

借助 egg 生态中的 egg-swagger-doc 来实现接口 doc 自动化。
简单写一下相关步骤：

1. 首先在配置文件中配置 swagger 的基本项
2. 编写 contract 的类型定义
3. 在 controller 层，添加对应的注释，在 localhost:70001/swagger-ui.html 可查看 ui 页面

![](https://raw.githubusercontent.com/taleyoung/YuanZhou-Build/master/screenshot/swagger.png)

#### 装饰器的应用

因为目前写的应用功能十分简单（只涉及两个表的增删改查），并没有挖掘到需自定义装饰器的场景，不过实际使用中接触到很多装饰器的应用的。

1. 前端写类组件的时候，react-redux 一般通过 connect 高阶组件来实现向组件内注入数据，实际上也可以改写为装饰器写法，如@connect()()。
2. 在 midway 场景下，核心思想是 loC 依赖注入，使用的过程中会大量接触装饰器，比如通过@provide()和@inject()两个装饰器来完成绑定定义和依赖注入属性。除此之外，还有@controller(),@config()等装饰器的应用大大减少代码量，提高效率。

#### 前后端研发文档

**目录命名**  
通读 ice 和 midway 官网文档，目录命名按照官网推荐来进行。

1. client-framework 客户端应用
2. client-child 客户端子应用
3. server 服务的后端体系
   **lint**
   依照 ice 默认 eslintlrc 设置 emmmm....
