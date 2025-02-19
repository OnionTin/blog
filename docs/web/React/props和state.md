## props 和 state

> 在 React 中，数据可以通过属性（props）和状态（state）在组件之间传递和管理。

### props(只能父向子，子组件不可改)

> Props 是组件间数据传递的主要方式。父组件可以向子组件传递数据，这些数据在子组件中通过 props 访问。Props 是只读的，子组件不能修改它们。

```jsx
// 父组件
function ParentComponent() {
  const name = "John Doe";
  return <ChildComponent name={name} />;
}

// 子组件
function ChildComponent({ name }) {
  return <div>Hello, {name}!</div>;
}
```

### state(可变，组件内部管理)

> State 是组件内部管理数据的方式。State 可以在组件内部进行修改，并且修改后的状态会触发组件的重新渲染。

```jsx
import React, { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {/* 等同 */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
