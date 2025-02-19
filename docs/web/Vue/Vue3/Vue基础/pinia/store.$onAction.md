## store.$onAction

> 监听 action 的执行

### 语法

```js
store.$onAction(
  callback: (
    action: Action<Context>,
    onError: (error: Error) => void
  ) => void | (() => void),
  detached?: boolean
): () => void
```

### 参数

- `callback`：回调函数，当 action 执行时触发
- `detached`：是否在 store 被销毁时自动移除监听器

### 返回值

- `() => void`：取消监听器的函数

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
})

const store = useStore()

const unwatch = store.$onAction(({
  before: (action, args) => {
    console.log(`before ${action.name} with args ${args}`)
  },
  after: (action, args, returnedValue) => {
    console.log(`after ${action.name} with args ${args} and returned ${returnedValue}`)
  },
  onError: (action, error) => {
    console.log(`error in ${action.name} with args ${error}`
  }
})
})

unwatch()
```
