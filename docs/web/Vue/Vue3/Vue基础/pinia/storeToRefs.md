## storeToRefs

> store 中的 state 转换为 ref

### 语法

```js
import { storeToRefs } from "pinia";

const { name, age } = storeToRefs(store);
```

### 示例

```js
import { defineStore } from "pinia";
import { storeToRefs } from "pinia";

const useStore = defineStore("main", {
  state: () => ({
    name: "张三",
    age: 18,
  }),
});

const store = useStore();

const { name, age } = storeToRefs(store);
```
