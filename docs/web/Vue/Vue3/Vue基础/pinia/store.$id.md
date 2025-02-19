## store.$id

> store.$id 是一个只读属性，用于获取 store 的唯一标识符。

### 示例

```js
import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
}
```
