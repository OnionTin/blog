## 持久化 pinia

### 介绍

> Pinia 提供了插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。

### 持久化插件

> Pinia 提供了一个插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。其中，持久化插件可以将 Pinia 的状态持久化到本地存储中，比如 localStorage 或者 sessionStorage，这样即使页面刷新或者关闭，状态也不会丢失。

### pinia-plugin-persist

> pinia-plugin-persist 是一个用于将 Pinia 状态持久化的插件，它可以将状态保存到 localStorage 或者 sessionStorage 中，并在页面刷新或者关闭后自动恢复状态。

### 安装

```bash
npm install pinia-plugin-persist
```

### 使用

```js
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export default pinia;
```

### 配置

```js
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPluginPersist, {
  key: "my-app", // 本地存储的键名
  storage: localStorage, // 本地存储的方式，可以是 localStorage 或者 sessionStorage
  paths: ["user.name", "user.age"], // 需要持久化的状态路径
});

export default pinia;
```

### 整体案例

```js
// src/store/index.js
// 开启缓存
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
```

```js
// src/store/user.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "张三",
    age: 18,
    gender: "男",
  }),
  actions: {
    setName(name) {
      this.name = name;
    },
    setAge(age) {
      this.age = age;
    },
  },
  getters: {
    fullName: (state) => `${state.name} ${state.age}`,
  },
  persist: {
    // 直接配置就行了，index.js中已经配置了
    enabled: true, // 开启持久化
    strategies: [
      {
        key: "user", // 本地存储的键名
        // 本地存储的方式，可以是 localStorage 或者 sessionStorage
        storage: localStorage,
        paths: ["name", "age"], // 需要持久化的状态路径，不需要gender所以不缓存
      },
    ],
  },
});
```

### 注意事项

> 1. 持久化插件会将状态保存到本地存储中，如果状态中包含敏感信息，需要谨慎使用。
> 2. 持久化插件会在页面刷新或者关闭后自动恢复状态，如果状态中包含动态生成的数据，需要小心处理。
> 3. 持久化插件只支持简单的数据类型，如果状态中包含复杂的数据类型，需要手动处理。
> 4. 持久化插件可能会影响性能，如果状态非常大，需要谨慎使用。
> 5. 持久化插件可能会与其他插件冲突，需要小心处理。
> 6. 持久化插件只支持持久化状态，如果需要持久化其他数据，需要手动处理。
