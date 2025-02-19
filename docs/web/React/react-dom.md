## react-dom

> React 和 ReactDOM 是 React 技术栈中的核心库。React 提供了创建组件的 API 和维护状态的机制，而 ReactDOM 提供了将这些组件渲染到 DOM 的能力。它们共同为开发现代 web 应用提供了强大的基础。

> ReactDOM 是一个用于将 React 组件渲染到 DOM 的库。它提供了一些方法，如 render、hydrate 和 unmountComponentAtNode 等，来与 DOM 进行交互。当组件的状态或者 props 发生变化时，ReactDOM 可以高效地更新 DOM。提供了与 DOM 交互的方法，如获取节点信息、添加事件监听器等。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```
