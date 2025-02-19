<!-- @format -->

## useReducer

`useReducer` 是 React 提供的另一个 Hook，它让你可以在函数组件中使用 reducer 函数来管理复杂状态。

### 1. 基本使用

`useReducer` 让你向组件传递一个 reducer 函数，这个函数会根据 action 来返回新的状态。

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

### 2. 初始化状态

`useReducer` 的第二个参数是初始状态。与 `useState` 不同，它不是在渲染后才定义，而是在组件创建时就定义。

### 3. 调度动作

`useReducer` 返回一个数组，其中第二个元素是一个 dispatch 函数，用来分派 action。

### 4. Reducer 函数

Reducer 是一个纯函数，它接受当前状态和一个动作对象，返回新的状态对象。

### 5. 动作对象

Action 是一个包含类型属性的对象，表示要执行什么操作。

### 6. 状态更新逻辑

Reducer 通常包含多个 case，每个 case 对应一种动作，返回对应动作的新状态。

### 7. 状态不可变性

与 Redux 类似，`useReducer` 要求状态更新时返回一个新对象，而不是修改原状态。

### 8. 性能优化

由于状态不可变性，`useReducer` 可以用于性能优化，如避免不必要的渲染。

### 9. 自定义 Hook

`useReducer` 可以与 `useContext` 结合使用，创建复杂的状态逻辑和全局状态管理。

### 10. 与`useState`比较

- `useState` 适合管理简单状态。
- `useReducer` 适合管理复杂状态逻辑，如多子值状态。

### 11. 异步操作

虽然 `useReducer` 本身不处理异步操作，但可以与 `useEffect` 结合使用执行异步操作。

```jsx
import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, {
    /* 初始状态 */
  });

  useEffect(() => {
    // 异步操作
  }, [state.value]); // 当state.value变化时执行

  // ...
}
```

### 12. 初始状态作为函数

如果初始状态需要根据 props 计算，可以传递一个函数给 `useReducer`。

```jsx
const initialReducerState = { count: 0 };
function reducer(state, action) {
  // ...
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(
    reducer,
    (initialCount) => ({ count: initialCount }),
    initialCount
  );
  // ...
}
```

### 13. 调试

使用 `useReducer` 的调试模式可以更容易地跟踪动作和状态的变化。

### 14. 动作组合

可以在 reducer 中组合多个动作，以处理复杂的状态转换。

### 15. 状态提升

对于深层嵌套组件的状态管理，可以考虑将状态提升到共同的父组件中。
