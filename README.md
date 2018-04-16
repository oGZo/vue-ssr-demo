###vue服务端渲染

```
安装依赖
npm i;

开发
npm run dev 

打包客户端代码
npm run build:client

打包服务端代码
npm run build:server

打包
npm run build

启动生产环境
npm start


```

```
服务端渲染页面
detail
页面描述， 该页面有两个接口获取数据，假设该页面第二个接口依赖第一个接口，
页面的url具体产生什么变化才会重新发起请求，可在该页面组件asyncData中自主控制
该页面满足功能
场景1. 直接访问该页面   接口1服务端发起，接口二则直接从客户端mounted钩子发起
场景2. 该页面search参数更改  接口1客户端beforeRouteUpdate钩子发起 接口二 组件内监听$route获取
场景3. 从其他单页面进入该页面， 接口1beforeMount钩子发起，接口2 mounted钩子发起


```