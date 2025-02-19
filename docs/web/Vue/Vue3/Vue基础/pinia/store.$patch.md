## store.$patch

> 修改 store 中的状态

### 语法

```js
store.$patch(partialState | partialStateFunction);
```

### 参数

> partialState | partialStateFunction

### 示例

```js
import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});

const store = useStore();

// 1. 传递一个对象
store.$patch({
  counter: store.counter + 1,
  name: "Abigail",
});

// 2. 传递一个函数
store.$patch((state) => {
  state.counter++;
  state.name = "Abigail";
});
```
