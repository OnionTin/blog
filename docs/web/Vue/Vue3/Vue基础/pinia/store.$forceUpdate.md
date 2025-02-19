## store.$forceUpdate

> 强制更新 store 中的数据

```js
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    $forceUpdate() {
      this.$patch({
        count: this.count + 1,
      });
    },
  },
});
```

```js
const store = useStore();

store.$forceUpdate();
```
