<!-- @format -->

## state

在 React 中，`state`是组件内部的状态，它可以帮助管理组件的动态行为和数据。

### 1. 定义 State

在类组件中，可以通过`this.state`定义状态，并在`constructor`中初始化。

```jsx
class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}
```

在函数组件中，使用`useState` Hook 来定义状态。

```jsx
import { useState } from 'react';

function MyFunctionComponent() {
  const [count, setCount] = useState(0);
}
```

### 2. 更新 State

在类组件中，使用`this.setState()`更新状态。

```jsx
this.setState({ count: this.state.count + 1 });
```

在函数组件中，使用`setState`函数更新状态。

```jsx
setCount(count + 1);
```

### 3. State 的不可变性

当更新状态时，应该返回一个新对象，而不是修改现有的状态对象。

```jsx
setCount((prevCount) => prevCount + 1);
```

### 4. State 的异步性

`setState`是异步的，React 会批量更新状态，以提高性能。

### 5. 初始渲染

在类组件中，状态可以在构造函数中初始化。在函数组件中，状态在组件创建时初始化。

### 6. 组合 State

可以有多个状态，每个状态对应不同的数据。

```jsx
const [age, setAge] = useState(40);
const [fruit, setFruit] = useState('apple');
```

### 7. State 和 Props

State 是组件私有的，而 props 是组件从外部接收的。State 是组件内部的数据，props 是组件外部的数据。

### 8. 状态提升

当多个组件需要共享相同状态时，可以将状态提升到它们共同的父组件中。

### 9. 状态与 Context

状态可以与 Context API 结合使用，以在组件树中共享状态。

### 10. 使用 State 进行条件渲染

可以根据状态的值进行条件渲染。

```jsx
return count > 0 ? <p>You have clicked {count} times</p> : null;
```

### 11. State 的模式

- **提升状态**：当多个组件需要共享状态时，将状态提升到它们共同的父组件。
- **状态容器**：创建一个专门用于存储状态的组件。

### 12. 状态与生命周期

在类组件中，状态的更新可能会触发组件的重新渲染，这个过程与生命周期方法（如`componentDidMount`和`componentDidUpdate`）密切相关。

### 13. 状态的默认值

在函数组件中，可以通过`useState`的第二个参数提供状态的默认值。

### 14. 状态的惰性初始化

在函数组件中，可以惰性地初始化状态，即在首次渲染时根据 props 计算初始状态。

```jsx
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

### 15. 状态与 Hooks

`useState`是 React Hooks 的一部分，它允许在函数组件中使用状态。
