<!-- @format -->

## React 中`Fragment`

`Fragment`是 React 中一种特殊的组件，它允许你将多个子元素组合在一起进行渲染，而不会在 DOM 中添加额外的节点。处理组件返回多个子元素的一种优雅方式。

### 1. 基本使用

`Fragment`可以让你在组件中返回多个元素而不需要一个包裹元素。

```jsx
import { Fragment } from 'react';

function MyComponent() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>Welcome to my app</p>
    </Fragment>
  );
}
```

### 2. 短语法

React 提供了一个短语法`<>`和`</>`来使用`Fragment`。

```jsx
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to my app</p>
    </>
  );
}
```

### 3. 键（Keys）的传递

你可以在`Fragment`上传递一个`key`属性，但要注意，同一个父元素下的`Fragment`应该有不同的`key`。

```jsx
function List({ items }) {
  return (
    <Fragment>
      {items.map((item) => (
        <Fragment key={item.id}>
          <li>{item.text}</li>
        </Fragment>
      ))}
    </Fragment>
  );
}
```

### 4. 在`Fragment`中使用`key`

在渲染列表时，应该将`key`属性放在最外层的元素上，而不是`Fragment`上。

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li> // 正确
      ))}
    </ul>
  );
}
```

### 5. 命名`Fragment`

你可以给`Fragment`命名来增加可读性，这在调试时特别有用。

```jsx
function Form({ children }) {
  return (
    <form>
      <Fragment>{children}</Fragment>
    </form>
  );
}
```

### 6. 状态和上下文

你可以在`Fragment`中包含状态和上下文提供者。

```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <CountProvider
        count={count}
        onIncrement={setCount}>
        <Counter />
      </CountProvider>
    </Fragment>
  );
}
```

### 7. 性能考虑

`Fragment`不会像普通 DOM 元素那样影响性能，但仍然应该避免过度使用，特别是在大型列表中。

### 8. 与`React.Children`

`Fragment`可以用来解决`React.Children`相关的操作，如`React.Children.map`。

### 9. 避免过度使用

虽然`Fragment`很有用，但应该避免在每个组件中过度使用，以免造成不必要的复杂性。

### 10. `Fragment`与`props`

`Fragment`可以接收`props`并传递给子组件。

```jsx
function Labeled({ label, children }) {
  return (
    <Fragment>
      <label>{label}</label>
      {children}
    </Fragment>
  );
}
```

### 11. `Fragment`与`useMemo`和`useCallback`

`Fragment`可以与`useMemo`和`useCallback`一起使用，以优化性能。

### 12. `Fragment`的可变属性

`Fragment`可以接受任意的 props，包括`key`和`ref`，但这些 props 不会传递到 DOM。
