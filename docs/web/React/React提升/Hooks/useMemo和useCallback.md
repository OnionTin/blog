<!-- @format -->

## useMemo 和 useCallback

`useMemo` 和 `useCallback` 是 React 提供的两个 Hook，用于优化性能，它们通过记忆化来避免不必要的计算和渲染。以下是这两个 Hook 的关键技术点和概念：

### `useMemo`

### 1. 基本使用

`useMemo` 用于对高开销的计算进行记忆化，以优化性能。

```jsx
import { useMemo } from 'react';

function expensiveCalculation(x, y) {
  // 假设这是一个复杂的计算
  return x * y;
}

function MyComponent({ x, y }) {
  const result = useMemo(() => expensiveCalculation(x, y), [x, y]);
  return <div>Result: {result}</div>;
}
```

### 2. 依赖数组

`useMemo` 接受一个函数和一个依赖数组，只有当依赖项改变时，才会重新计算。

### 3. 避免不必要的计算

`useMemo` 可以避免在每次渲染时都进行高开销的计算。

### 4. 惰性计算

`useMemo` 可以用于惰性计算，即只有在需要时才进行计算。

### 5. 与`useMemo`结合使用

`useMemo` 可以与 `useCallback` 结合使用，以确保传递给子组件的回调函数的稳定性。

### `useCallback`

### 1. 基本使用

`useCallback` 用于返回一个记忆化的回调函数，这个函数只有在依赖项改变时才会重新创建。

```jsx
import { useCallback } from 'react';

function MyComponent({ doSomething }) {
  const handleDoSomething = useCallback(() => {
    doSomething();
  }, [doSomething]);
  return <button onClick={handleDoSomething}>Do Something</button>;
}
```

### 2. 依赖数组

`useCallback` 接受一个函数和一个依赖数组，只有当依赖项改变时，才会重新创建函数。

### 3. 避免不必要的渲染

`useCallback` 可以避免子组件因为父组件的重新渲染而不必要的重新渲染。

### 4. 稳定性

`useCallback` 可以确保回调函数的引用稳定性，这对于传递给子组件或使用在`useEffect`中非常有用。

### 5. 自定义 Hook

`useCallback` 可以用于创建自定义 Hook，以在多个组件间复用回调逻辑。

### 6. 与`useMemo`的区别

- `useMemo` 用于优化高开销的计算。
- `useCallback` 用于优化回调函数的创建。

### 7. 性能注意事项

- 过度使用 `useMemo` 和 `useCallback` 可能会导致性能下降，因为它们会增加代码的复杂性。
- 应该在真的有性能瓶颈时才使用这两个 Hook。

### 8. 与`React.memo`结合使用

`useMemo` 和 `useCallback` 可以与 `React.memo` 结合使用，以避免组件的不必要的渲染。

### 9. 惰性初始化

`useMemo` 和 `useCallback` 可以用于惰性初始化对象或函数。

### 10. 避免深比较

在依赖数组中，应避免进行深比较，因为这可能会导致性能问题。

### 11. 避免在渲染阶段使用

`useMemo` 和 `useCallback` 应该谨慎使用，以避免在渲染阶段进行复杂的计算或创建函数。
