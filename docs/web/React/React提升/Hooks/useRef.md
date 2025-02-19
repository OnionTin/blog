<!-- @format -->

## useRef

`useRef` 是 React 提供的 Hook，用于在函数组件中访问 DOM 元素、管理内部状态或保存任何可变值。

### 1. 基本使用

`useRef` 创建一个可变的 ref 对象，它在整个组件生命周期内持续存在。

```jsx
import { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);
  return <div ref={myRef}>Hello</div>;
}
```

### 2. 访问 DOM 元素

`useRef` 常用于直接访问 DOM 元素，如获取输入字段或按钮。

```jsx
function TextInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
      />
      <button onClick={focusInput}>Focus the input</button>
    </>
  );
}
```

### 3. 初始值

`useRef` 可以接受一个初始值，该值将在组件挂载时被设置。

```jsx
const ref = useRef(initialValue);
```

### 4. 保存可变值

`useRef` 可以用来保存任何可变值，这个值在组件的整个生命周期内持续存在。

```jsx
function Timer() {
  const intervalRef = useRef();

  function startTimer() {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  return null;
}
```

### 5. 传递回调函数

`useRef` 可以用于保存回调函数，确保回调函数的稳定性。

```jsx
function MyComponent() {
  const handleButtonClick = useRef(() => {
    console.log('Button clicked');
  });

  return <button onClick={handleButtonClick.current}>Click me</button>;
}
```

### 6. 组合使用

`useRef` 可以与 `useEffect` 组合使用，以处理副作用。

```jsx
import { useRef, useEffect } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    console.log('Ref current:', myRef.current);
  }, []);

  return <div ref={myRef}>Hello</div>;
}
```

### 7. 清除 Ref

虽然 `useRef` 创建的 ref 对象在组件卸载后仍然存在，但可以通过手动设置 `null` 来清除。

```jsx
function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    return () => {
      myRef.current = null;
    };
  }, []);

  return <div ref={myRef}>Hello</div>;
}
```

### 8. 多个 Ref

可以在一个组件中使用多个 ref，只要每个 ref 都有唯一的引用。

### 9. 与类组件的区别

在类组件中，通常使用`React.createRef`创建 ref，而在函数组件中使用`useRef`。

### 10. Refs 与 Context

`useRef` 可以与 `useContext` 结合使用，以在组件树中传递 DOM 元素引用。

### 11. Refs 与 forwardRef

`useRef` 可以与 `forwardRef` 结合使用，以将 ref 传递给子组件。

```jsx
import React, { forwardRef } from 'react';

const FancyButton = forwardRef((props, ref) => (
  <button
    ref={ref}
    className="FancyButton">
    {props.children}
  </button>
));

function App() {
  const buttonRef = useRef();
  return <FancyButton ref={buttonRef}>Click me!</FancyButton>;
}
```

### 12. Refs 与 useImperativeHandle

当使用 `forwardRef` 时，`useImperativeHandle` 可以用于控制子组件暴露给父组件的实例值。

### 13. 调试

`useRef` 可以用于调试目的，如保存组件的特定状态或日志信息。
