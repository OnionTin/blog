<!-- @format -->

## useEffect

`useEffect` 是 React 中一个非常强大的 Hook，它允许你在函数组件中执行副作用操作，如数据获取、订阅或手动更改 DOM。正确使用它可以帮助你管理组件的生命周期和状态变化。

### 1. 基本使用

`useEffect` 用于在组件渲染后执行副作用操作。它接受一个函数和一个依赖数组。

```jsx
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Component is rendered');
    return () => {
      console.log('Cleanup');
    };
  }, []); // 空依赖数组表示这个effect只在挂载和卸载时运行
}
```

### 2. 清理函数

`useEffect` 可以返回一个清理函数，用于执行清理操作，如取消网络请求、移除事件监听器等。

```jsx
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]); // props.source是依赖项
```

### 3. 依赖数组

`useEffect` 的第二个参数是一个依赖数组，它决定了 effect 何时运行。如果依赖项改变，effect 会重新运行。

```jsx
useEffect(() => {
  console.log('Effect runs when count changes');
}, [count]); // 当count变化时，effect重新运行
```

### 4. 副作用的模拟

在类组件中，`useEffect` 相当于`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`的组合。

### 5. 模拟`componentDidMount`和`componentDidUpdate`

通过添加依赖项，你可以模拟`componentDidUpdate`行为。

```jsx
useEffect(() => {
  console.log('Mount or update when count changes');
}, [count]); // 类似于componentDidUpdate
```

### 6. 模拟`componentWillUnmount`

通过返回一个清理函数，你可以模拟`componentWillUnmount`行为。

```jsx
useEffect(() => {
  console.log('Cleanup when unmounting');
  return () => {
    console.log('Component will unmount');
  };
}, []); // 类似于componentWillUnmount
```

### 7. 副作用的依赖性

确保将所有外部变量和 props 作为依赖项，以确保 effect 在依赖项变化时正确运行。

### 8. 条件 Effect

你可以通过条件渲染或条件执行 effect 函数来控制 effect 的执行。

```jsx
useEffect(() => {
  if (show) {
    console.log('Effect runs when show is true');
  }
}, [show]);
```

### 9. 多个 Effect

你可以在组件中使用多个`useEffect`调用，以处理不同的副作用逻辑。

```jsx
useEffect(() => {
  // 第一个effect
}, [dependency1]);

useEffect(() => {
  // 第二个effect
}, [dependency2]);
```

### 10. 性能优化

如果你在 effect 中进行高开销操作，如数据获取或大规模计算，考虑使用`useMemo`或`useCallback`进行优化。

### 11. 避免不必要的渲染

通过正确使用依赖数组，你可以避免不必要的组件渲染。

### 12. 副作用的纯粹性

尽量保持 effect 函数的纯粹性，避免在 effect 内部产生副作用，除非是必须的。

### 13. 使用`useLayoutEffect`

在必要时，可以使用`useLayoutEffect`来执行同步的副作用操作，如 DOM 测量。

```jsx
import { useLayoutEffect } from 'react';

useLayoutEffect(() => {
  // Synchronous re-rendering
});
```
