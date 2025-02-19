## store.$state

> 获取 store 的 state

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

console.log(store.$state); // { counter: 0 }
```
