## defineStore

> 定义一个 store

### 定义

```js
import { defineStore } from "pinia";

export const useStore = defineStore("storeId", {
  state: () => {
    return {
      counter: 0,
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
});
```

### 参数

- `id`：唯一标识符，用于在应用程序中访问 store
- `options`：包含 store 的配置选项的对象

### options

- `state`：一个函数，返回一个包含 store 状态的对象
- `actions`：一个对象，包含 store 的方法
- `getters`：一个对象，包含 store 的计算属性

### 使用

```js
import { useStore } from "./store";

export default {
  setup() {
    const store = useStore();

    store.increment(); // 调用 store 的方法

    console.log(store.doubleCounter); // 访问 store 的计算属性
  },
};
```
