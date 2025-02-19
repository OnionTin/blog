## 组合式 Api 可以像一样 react-hooks 拆分

> Vue 3 引入了组合式 API（Composition API），它提供了一种新的方式来组织和共享代码逻辑。React 则通过 Hooks 提供了类似的能力。以下是对两者的详细对比。

### 组合式 API

#### 定义与特点

组合式 API 是 Vue 3 中引入的一套新的 API，允许开发者使用函数的方式组织组件代码。它的核心是 `setup` 函数，它是组件的入口点，可以返回响应式数据、方法、计算属性等。

- **响应式 API**：如 `ref()` 和 `reactive()`，用于创建响应式状态和计算属性。
- **生命周期钩子**：如 `onMounted()` 和 `onUnmounted()`，在组件的不同生命周期阶段执行逻辑。
- **依赖注入**：如 `provide()` 和 `inject()`，用于组件树中的依赖传递。

#### 使用场景

- **逻辑复用**：通过组合函数实现代码逻辑的复用。
- **代码组织**：将相关逻辑分组，易于理解和维护。
- **类型推导**：更好的 TypeScript 支持，提高代码质量和开发体验。

#### 示例代码

```javascript
import { ref, onMounted } from "vue";

export default {
  setup() {
    const count = ref(0);
    onMounted(() => {
      console.log("组件已挂载");
    });
    return { count };
  },
};
```

### React Hooks

#### 定义与特点

React Hooks 是 React 16.8 引入的一套新的 API，允许在函数组件中使用状态和其他 React 特性。常用的 Hooks 包括 `useState`、`useEffect`、`useContext` 等。

- **状态管理**：如 `useState`，用于在函数组件中添加状态。
- **副作用处理**：如 `useEffect`，用于处理组件的副作用，如数据获取、订阅等。
- **上下文访问**：如 `useContext`，用于访问 React 上下文。

#### 使用场景

- **状态管理**：在函数组件中轻松管理状态。
- **副作用处理**：集中处理组件的副作用。
- **逻辑复用**：通过自定义 Hooks 实现逻辑的复用。

#### 示例代码

```javascript
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("组件已挂载");
  }, []);
  return <div>{count}</div>;
}
```

### 对比

1. 设计理念：Vue 3 的组合式 API 更注重逻辑的组合和代码的组织，而 React Hooks 强调在函数组件中使用状态和其他特性。
2. 使用方式：Vue 3 的组合式 API 通过 setup 函数提供统一的入口，React Hooks 则通过在函数组件顶层调用不同的 Hook 实现。
3. 性能优化：React 提供了如 useMemo 和 useCallback 等 Hooks 来优化性能，Vue 3 的响应式系统则在内部自动优化。
4. 类型支持：Vue 3 的组合式 API 在 TypeScript 中的支持更直观，而 React Hooks 需要额外的类型声明。
