<!-- @format -->

## props

在 React 中，组件间的数据传递是通过属性（通常称为 props）来实现的。

### 1. 单向数据流

Props 是 React 中实现单向数据流的方式，确保数据在组件树中自上而下流动。

### 2. 组件通信

Props 用于父组件向子组件传递数据。

```jsx
function ParentComponent() {
  const message = 'Hello from parent';
  return <ChildComponent message={message} />;
}
```

### 3. 读取 Props

在类组件中，可以通过`this.props`访问 props。

```jsx
class ChildComponent extends React.Component {
  render() {
    console.log(this.props.message); // 'Hello from parent'
    return <div>{this.props.message}</div>;
  }
}
```

在函数组件中，props 作为函数参数传递。

```jsx
function ChildComponent(props) {
  console.log(props.message); // 'Hello from parent'
  return <div>{props.message}</div>;
}
```

### 4. 传递复杂数据

可以传递 JavaScript 表达式作为 props，包括对象、函数、数组等。

```jsx
function ParentComponent() {
  const user = { name: 'Kimi', age: 30 };
  return <ChildComponent user={user} />;
}
```

### 5. 默认 Props

可以使用`defaultProps`为组件定义默认 props。

```jsx
ChildComponent.defaultProps = {
  message: 'Default message'
};
```

### 6. Props 类型检查

可以使用`PropTypes`库为组件的 props 定义类型检查。

```jsx
import PropTypes from 'prop-types';

ChildComponent.propTypes = {
  message: PropTypes.string.isRequired
};

ChildComponent.defaultProps = {
  message: 'Default message'
};
```

### 7. 传递子组件

可以通过 props 将子组件传递给另一个组件。

```jsx
function ParentComponent() {
  const Child = () => <div>Child</div>;
  return <WrapperComponent Child={Child} />;
}

function WrapperComponent({ Child }) {
  return <div>{<Child />}</WrapperComponent>;
}
```

### 8. 内联函数

可以在传递 props 时使用内联函数，以便在事件处理或回调中使用子组件的 props。

```jsx
function ParentComponent() {
  return <ChildComponent onClick={() => console.log('Clicked')} />;
}
```

### 9. Props 解构

在函数组件中，可以解构 props 以简化代码。

```jsx
function ChildComponent({ message, onClick }) {
  return <div onClick={onClick}>{message}</div>;
}
```

### 10. 组合组件

在组合组件时，可以将接收到的 props 传递给子组件。

```jsx
function ParentComponent() {
  return <ChildComponent {...props} />;
}
```

### 11. Props.frozen

在 React 17 及以上版本，组件的 props 是不可变的，这意味着你不应该修改传入的 props。

### 12. 访问 props 的 children

`props.children`是在组件中访问其子元素的一种方式。

```jsx
function ParentComponent() {
  return <ChildComponent>Children content</ChildComponent>;
}

function ChildComponent(props) {
  return <div>{props.children}</div>;
}
```

### 13. 使用 Context API 传递 props

当 props 需要在多层嵌套的组件中传递时，可以使用 Context API 来避免“props drilling”。
