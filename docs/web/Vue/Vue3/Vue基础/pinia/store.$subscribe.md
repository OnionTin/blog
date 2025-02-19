## store.$subscribe

> 监听 store 的变化

### 参数

- `callback`：监听回调函数
- `options`：配置项

### 返回值

- `unsubscribe`：取消监听的函数

### 示例

```js
import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

const store = useStore();

// 监听 store 的变化
store.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});

store.increment(); // 输出：{ type: 'increment', storeId: 'main' } { count: 1 }
```

### options

- `detached`：是否在组件卸载后仍然监听 store 的变化
- `deep`：是否深度监听 store 的变化
- `flush`：监听的时机，可选值：`pre`、`post`、`sync`
- `onCleanup`：取消监听时的回调函数

### 示例

```js
import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

const store = useStore();

// 监听 store 的变化
store.$subscribe(
  (mutation, state) => {
    console.log(mutation);
    console.log(state);
  },
  {
    detached: true,
    deep: true,
    flush: "pre",
    onCleanup() {
      console.log("取消监听");
    },
  }
);

store.increment(); // 输出：{ type: 'increment', storeId: 'main' } { count: 1 }
```
