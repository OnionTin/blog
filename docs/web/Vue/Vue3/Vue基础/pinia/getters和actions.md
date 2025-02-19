## getters 和 actions

### getters

> 类似于计算属性，getters 的返回值会根据它的依赖被缓存起来，并且只有当它的依赖值发生了改变才会被重新计算

- getters 中的函数接收一个 `state` 作为其第一个参数
- getters 可以被嵌套调用，它们可以返回其他 getters
- getters 可以通过 `this` 访问其他 getters
- getters 可以通过 `this.$pinia` 访问整个 store 实例
- getters 可以通过 `this.$pinia.state` 访问整个 state
- getters 可以通过 `this.$pinia.getters` 访问整个 getters
- getters 可以通过 `this.$pinia.actions` 访问整个 actions
- getters 可以通过 `this.$pinia.commit` 访问整个 commit
- getters 可以通过 `this.$pinia.dispatch` 访问整个 dispatch

```js
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
```

### actions

> actions 类似于组件中的 methods，它们可以包含任意逻辑，包括异步操作

- actions 可以通过 `this` 访问整个 store 实例
- actions 可以通过 `this.$pinia.state` 访问整个 state
- actions 可以通过 `this.$pinia.getters` 访问整个 getters
- actions 可以通过 `this.$pinia.actions` 访问整个 actions
- actions 可以通过 `this.$pinia.commit` 访问整个 commit
- actions 可以通过 `this.$pinia.dispatch` 访问整个 dispatch

```js
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // 支持同步和异步
    increment() {
      this.count++;
    },
  },
});
```
