## store.$dispose

> `store.$dispose` 是 Pinia 提供的一个方法，用于手动销毁一个 store 实例。

### 用法

```js
import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

const store = pinia.defineStore("myStore", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

app.use(pinia);
app.mount("#app");

// 在某个时刻手动销毁 store 实例
store.$dispose();
```
