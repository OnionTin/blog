## store.$reset

> 重置 store 的状态到初始状态

### 示例

```js
import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    $reset() {
      this.count = 0;
    },
  },
});

const store = useCounterStore();
store.increment();
console.log(store.count); // 1

store.$reset(); // 重置状态到初始状态
console.log(store.count); // 0
```
