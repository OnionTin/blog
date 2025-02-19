<!-- @format -->

## React 中 Refs

Refs（引用）在 React 中是一个重要的特性，它允许你直接访问 DOM 元素或组件实例。提供了一种方式来处理 DOM 元素和组件实例的直接引用。

### 1. 创建 Ref

在函数组件中，使用`useRef` Hook 来创建一个 ref。

```jsx
import { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);
  // ...
}
```

在类组件中，使用`React.createRef`来创建一个 ref。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  // ...
}
```

### 2. 访问 DOM 元素

Refs 通常用于直接访问和操作 DOM 元素，如输入框、按钮等。

```jsx
function MyComponent() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <input
      ref={inputRef}
      type="text"
    />
  );
}
```

### 3. 传递 Ref 到子组件

Refs 可以传递给子组件，以便在组件树中进一步向下访问 DOM 元素。

```jsx
function ParentComponent() {
  const childRef = useRef(null);
  return <ChildComponent ref={childRef} />;
}

function ChildComponent(props) {
  useImperativeHandle(props.ref, () => ({
    focus: () => {
      // ...
    }
  }));
  // ...
}
```

### 4. 转发 Ref

使用`forwardRef`可以将接收到的 ref 转发到子组件。

```jsx
const FancyButton = forwardRef((props, ref) => (
  <button
    ref={ref}
    className="FancyButton">
    {props.children}
  </button>
));
```

### 5. 组合 Refs

你可以组合多个 refs，只要每个 ref 都有一个唯一的引用。

### 6. 清理 Ref

当组件卸载时，应该清理 ref 以避免内存泄漏。

```jsx
function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    return () => {
      myRef.current = null;
    };
  }, []);

  // ...
}
```

### 7. 使用 Ref 回调

另一种创建 ref 的方式是使用回调函数。

```jsx
function MyComponent() {
  let inputRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
    />
  );
}
```

### 8. 非受控组件

Refs 常用于非受控组件，即那些不由 React 状态管理的组件。

### 9. 性能优化

Refs 可以用于性能优化，例如，通过直接操作 DOM 来避免不必要的渲染。

### 10. 访问组件实例

Refs 还可以用于访问 React 组件的实例，这对于调用组件的方法或访问其状态非常有用。

### 11. 避免过度使用

过度使用 refs 可能会导致代码难以维护，应该谨慎使用。

### 12. 与 Context 一起使用

Refs 可以与 Context API 结合使用，以在组件树中传递 DOM 元素引用。

### 13. 自动对焦

Refs 经常用于实现自动对焦、文本选择或媒体播放等行为。

### 14. 管理焦点、文本选择或媒体播放

Refs 可以用于管理焦点、文本选择或媒体播放等。
