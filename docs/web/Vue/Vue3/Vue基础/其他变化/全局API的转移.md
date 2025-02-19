## 全局 API 的转移(具体参考 vue 迁移指南)

> Vue3.0 对 Vue2.x 中的 API 进行了一些调整，主要包括将全局 API 从`Vue.xxx`调整到应用实例`app`上。

```js
// Vue2.x中的写法
Vue.component("MyButton", {
  data: () => ({
    count: 0,
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>',
});

// 注册全局指令
Vue.directive("focus", {
  inserted: (el) => el.focus(),
});
```

> Vue3.0 中对全局 API 进行了调整，将全局 API 从 Vue.xxx 调整到应用实例 app 上。

| 2.x 全局 API(Vue)        | 3.x 实例 API(app)           |
| ------------------------ | --------------------------- |
| Vue.config.xxxx          | app.config.xxxx             |
| Vue.config.productionTip | 移除                        |
| Vue.component            | app.component               |
| Vue.directive            | app.directive               |
| Vue.mixin                | app.mixin                   |
| Vue.use                  | app.use                     |
| Vue.prototype            | app.config.globalProperties |
