<!-- @format -->

## React 中渲染属性（Render Props）

渲染属性（Render Props）是一种在 React 中共享代码的模式，它涉及到一个组件接收一个函数作为 props，然后调用这个函数来决定其渲染逻辑。可以在组件间共享渲染逻辑，而不需要直接修改这些组件。

### 1. 定义渲染属性

渲染属性是一种模式，其中一个组件将渲染逻辑外包给通过 props 传递的函数。

```jsx
<MyComponent render={(content) => <div>{content}</div>} />
```

### 2. 使用渲染属性

子组件通过调用传递的函数来决定如何渲染内容。

```jsx
function MyComponent({ render }) {
  const content = 'Hello World';
  return render(content);
}
```

### 3. 传递复杂的数据结构

渲染属性不仅可以传递字符串，还可以传递对象、数组或其他复杂的数据结构。

```jsx
function MyComponent({ render }) {
  const data = { text: 'Hello', emphasis: true };
  return render(data);
}
```

### 4. 与高阶组件结合

渲染属性经常与高阶组件（HOC）结合使用，以提供额外的逻辑或数据。

```jsx
function withData(WrappedComponent) {
  return function (props) {
    const data = { name: 'Kimi', age: 30 };
    return (
      <WrappedComponent
        {...props}
        data={data}
      />
    );
  };
}

const EnhancedComponent = withData(MyComponent);
```

### 5. 传递多个渲染函数

可以传递多个函数来处理不同的渲染逻辑。

```jsx
function MyComponent({ renderHeader, renderContent }) {
  return (
    <>
      {renderHeader('Header')}
      {renderContent('Content')}
    </>
  );
}
```

### 6. 性能考虑

过度使用渲染属性可能会导致性能问题，因为每次组件渲染时都会调用函数。

### 7. 避免过度使用

渲染属性模式可以增加代码的复杂性，因此应该在确实需要时才使用。

### 8. 与 Hooks 结合

在函数组件中，可以使用`useCallback` Hook 来创建稳定的渲染函数。

```jsx
function MyComponent() {
  const content = 'Hello World';
  const render = useCallback((content) => <div>{content}</div>, []);
  return render(content);
}
```

### 9. 渲染属性与上下文

渲染属性可以与 Context API 结合使用，以在组件树中传递渲染逻辑。

### 10. 条件渲染

可以使用渲染属性来实现条件渲染。

```jsx
function MyComponent({ condition, render }) {
  return condition ? render('Content') : null;
}
```

### 11. 与`children`属性结合

渲染属性可以与`children`属性结合使用，以提供更灵活的渲染方式。

```jsx
function MyComponent({ children }) {
  return <div>{children({ text: 'Hello', emphasis: true })}</div>;
}

<MyComponent children={(data) => <div>{data.text}</div>} />;
```

### 12. 自定义 Hook

可以使用自定义 Hook 来实现渲染属性的逻辑，以便在多个组件间重用。

### 13. 调试

渲染属性可以用于调试目的，例如通过传递一个函数来记录组件的渲染输出。

渲染属性是一种强大的模式，正确使用渲染属性可以提高代码的可维护性和复用性。
