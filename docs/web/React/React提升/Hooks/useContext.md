<!-- @format -->

## useContext

`useContext` 是 React 提供的 Hook，用于在函数组件中方便地访问 context。处理跨组件状态共享的强大工具，正确使用它可以简化组件间的通信并提高代码的可维护性。

### 1. 创建 Context

首先，需要使用 `React.createContext` 创建一个 Context 对象。

```jsx
const MyContext = React.createContext(defaultValue);
```

### 2. 提供 Context 值

使用 `Context.Provider` 组件来包裹组件树，以向树内的组件提供 Context 值。

```jsx
<MyContext.Provider value={/* 一些值 */}>
  <YourComponent />
</MyContext.Provider>
```

### 3. 消费 Context

在函数组件中，使用 `useContext` 来消费 Context。

```jsx
import { useContext } from 'react';

function YourComponent() {
  const value = useContext(MyContext);
  // ...
}
```

### 4. 渲染属性模式

`useContext` 的设计初衷是替代“渲染属性”模式（render props）。

### 5. 没有中间组件

`useContext` 允许你直接访问 Context 值，而不需要通过每一层组件手动传递 props。

### 6. 依赖项

`useContext` 会将其依赖的 Context 作为依赖项，因此当 Context 值变化时，组件会重新渲染。

### 7. 默认值

自 React v16.3 起，Context API 支持默认值。如果在组件树中未找到 Provider，就会使用这个默认值。

```jsx
const theme = useContext(MyContext);
```

如果没有 `MyContext.Provider` 包裹组件，`theme` 将会是 `undefined`。

### 8. 在自定义 Hook 中使用

可以在自定义 Hook 中使用 `useContext` 来访问 Context，这样可以在多个组件间复用 Context 逻辑。

```jsx
function useMyContext() {
  return useContext(MyContext);
}

function ComponentA() {
  const value = useMyContext();
  // ...
}

function ComponentB() {
  const value = useMyContext();
  // ...
}
```

### 9. 注意事项

- `useContext` 钩子会将其依赖的 Context 作为依赖项，因此当 Context 值变化时，组件会重新渲染。如果需要优化性能，可以考虑使用 `React.memo` 或 `useMemo`。
- 如果在函数组件中使用 `useContext`，该组件将会在每次渲染时重新创建，除非它被 `React.memo` 包裹。

### 10. Context 的更新

当 Provider 的 `value` 属性改变时，所有消费该 Context 的组件都会重新渲染。如果需要避免不必要的渲染，可以使用 `useMemo` 或 `useReducer` 来创建一个稳定的 `value`。

### 11. 与 `useReducer` 结合

有时，管理 Context 的复杂状态可能需要一个 reducer 函数。这种情况下，可以将 `useReducer` 与 Context 结合使用。

```jsx
const MyContext = React.createContext();

function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
```

### 12. 跨组件共享状态

`useContext` 允许你跨多个组件层级共享状态，而不必使用 props 链式传递。

### 13. Context 的嵌套

可以嵌套多个 Provider，以便在组件树的不同部分提供不同的 Context 值。

### 14. 避免过度使用

虽然 `useContext` 非常有用，但应避免过度使用，因为它可能导致难以追踪的渲染性能问题。
