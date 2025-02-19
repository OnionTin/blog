<!-- @format -->

## React 中高阶组件（HOC）

高阶组件（Higher-Order Component）是 React 中用于重用组件逻辑的高级技术。HOC 是一个函数，它接受一个组件并返回一个新的组件。多个组件间共享逻辑，而不需要直接修改这些组件。

### 1. 定义 HOC

HOC 是一个函数，它接受一个 React 组件作为参数，并返回一个新的组件。

```jsx
const withExtraInfo = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const extraInfo = 'Extra info';
      return (
        <WrappedComponent
          {...this.props}
          extraInfo={extraInfo}
        />
      );
    }
  };
};
```

### 2. 使用 HOC

使用 HOC 时，将其作为包裹函数应用于现有的组件。

```jsx
const EnhancedComponent = withExtraInfo(MyComponent);
```

### 3. 传递 props

HOC 应该将所有 props 传递给被包裹的组件。

```jsx
const withExtraInfo = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { extraInfo, ...otherProps } = this.props;
      return (
        <WrappedComponent
          {...otherProps}
          extraInfo={extraInfo}
        />
      );
    }
  };
};
```

### 4. 访问被包裹组件的 ref

在 HOC 中，可以使用 React.forwardRef 来转发 ref。

```jsx
const withExtraInfo = (WrappedComponent) => {
  return React.forwardRef((props, ref) => {
    const extraInfo = 'Extra info';
    return (
      <WrappedComponent
        {...props}
        extraInfo={extraInfo}
        ref={ref}
      />
    );
  });
};
```

### 5. HOC 与函数式组件

HOC 可以用于函数式组件，通过使用 React.memo 或 React.forwardRef。

```jsx
const withExtraInfo = (WrappedComponent) => {
  return React.memo((props) => {
    const extraInfo = 'Extra info';
    return (
      <WrappedComponent
        {...props}
        extraInfo={extraInfo}
      />
    );
  });
};
```

### 6. 使用 HOC 进行性能优化

HOC 可以用来实现性能优化，如通过 React.memo 或 shouldComponentUpdate。

```jsx
const withPerformanceOptimization = (WrappedComponent) => {
  return React.memo(WrappedComponent, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
  });
};
```

### 7. HOC 与上下文（Context）

HOC 可以用来提供或消费上下文（Context）。

```jsx
const withTheme = (WrappedComponent) => {
  return function ThemedComponent(props) {
    const theme = useContext(MyContext);
    return (
      <WrappedComponent
        {...props}
        theme={theme}
      />
    );
  };
};
```

### 8. HOC 与状态管理

HOC 可以用来注入状态管理逻辑，如 Redux 的`connect`函数。

### 9. HOC 与副作用

HOC 可以用来处理组件的副作用，如数据获取。

```jsx
const withData = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      fetchData();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
```

### 10. HOC 的注意事项

- HOC 应该保持纯净，不包含任何状态或副作用。
- HOC 应该易于复用，避免过度特定化的逻辑。
- HOC 可能会使组件层次变得复杂，应谨慎使用。

### 11. HOC 与类型检查

在使用 HOC 时，可以使用 PropTypes 来定义被包裹组件的 props 类型。

### 12. HOC 与 CSS 样式

HOC 可以用来注入样式或类名。

```jsx
const withStyles = (styles) => (WrappedComponent) => {
  return function WithStylesComponent(props) {
    return (
      <WrappedComponent
        {...props}
        className={styles.className}
      />
    );
  };
};
```

### 13. HOC 与错误边界

HOC 可以用来创建错误边界，捕获子组件的错误。

### 14. HOC 与 React Hooks

虽然 Hooks 是推荐的代码复用方式，但 HOC 仍然可以与 Hooks 结合使用。
