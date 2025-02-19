<!-- @format -->

## refEffect

> RefHook 可以在函数组件中存储/查找组件内的标签或任意其它数据

### 语法

```jsx
const refContainer = useRef();
```

### 作用

> 保存标签对象，功能与 React.createRef()一样

### 使用

```jsx
import React, { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
      />
    </div>
  );
}

export default App;
```
